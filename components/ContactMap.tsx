import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { CustomSelect } from "./CustomSelect";
import { useTheme } from "../contexts/ThemeContext";
import { MapDirectionsCard } from "./MapDirectionsCard";

import type L from "leaflet";

interface ContactMapProps {
  geoJsonUrl?: string;
  className?: string;
}

const createMarkerIcon = (
  Leaflet: typeof L,
  color: string,
  logoUrl: string,
) => {
  const html = `
    <div style="position:relative;width:44px;height:54px;">
      <svg width="44" height="54" viewBox="0 0 44 54" xmlns="http://www.w3.org/2000/svg" style="display:block;">
        <path d="M22 0C10.4 0 1 9.4 1 21c0 15.5 21 33 21 33 S43 36.5 43 21C43 9.4 33.6 0 22 0z" fill="${color}"/>
      </svg>
      ${
        logoUrl
          ? `<img src="${logoUrl}" style="position:absolute;top:4px;left:50%;transform:translateX(-50%);width:28px;height:28px;object-fit:contain;" alt="" />`
          : `<div style="position:absolute;top:9px;left:50%;transform:translateX(-50%);width:14px;height:14px;border-radius:50%;background:rgba(255,255,255,0.6);"></div>`
      }
    </div>
  `;
  return Leaflet.divIcon({
    className: "everleaf-marker",
    html,
    iconSize: [44, 54],
    iconAnchor: [22, 54],
  });
};

const ContactMap: React.FC<ContactMapProps> = ({
  geoJsonUrl = "/everleaf_medical_center.geojson",
  className,
}) => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  const mapRef = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<L.Map | null>(null);
  const zoomHintTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const satelliteActiveRef = useRef(false);

  // Refs to layers/control — needed for surgical language updates without map rebuild
  const standardLayerRef = useRef<L.TileLayer | null>(null);
  const satelliteLayerRef = useRef<L.LayerGroup | null>(null);
  const layerControlRef = useRef<L.Control.Layers | null>(null);

  const [LInstance, setLInstance] = useState<typeof L | null>(null);
  const [branches, setBranches] = useState<any[]>([]);
  const [selectedBranch, setSelectedBranch] = useState<any>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const isDark = theme.id === "dark" || theme.id === "high-contrast";
  const primaryColor = "var(--color-primary)";

  // 1. Lazy load Leaflet
  useEffect(() => {
    let isMounted = true;
    import("leaflet").then((Leaflet) => {
      if (isMounted) setLInstance(Leaflet.default as any);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // 2. Initialize Map — rebuilds on LInstance ready or dark mode change.
  //    If satellite was active before rebuild, starts with satellite immediately (no tile flash).
  useEffect(() => {
    if (!LInstance || !mapRef.current) return;

    if (leafletRef.current) {
      leafletRef.current.remove();
      leafletRef.current = null;
      setBranches([]);
    }

    const map = LInstance.map(mapRef.current, {
      center: [9.022762, 38.800492],
      zoom: 14,
      scrollWheelZoom: false,
      attributionControl: false,
    });
    leafletRef.current = map;

    const jawgToken = import.meta.env.VITE_JAWG_ACCESS_TOKEN || "";

    const standardLayer = isDark
      ? LInstance.tileLayer(
          `https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}.png?access-token=${jawgToken}`,
          { maxZoom: 19, subdomains: "abcd" },
        )
      : LInstance.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
        });

    const imagery = LInstance.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    );
    const labels = LInstance.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
    );
    const satelliteLayer = LInstance.layerGroup([imagery, labels]);

    // Store in refs so the language effect can update labels without a rebuild
    standardLayerRef.current = standardLayer;
    satelliteLayerRef.current = satelliteLayer;

    // Start with whichever layer was active before the rebuild
    if (satelliteActiveRef.current) {
      satelliteLayer.addTo(map);
    } else {
      standardLayer.addTo(map);
    }

    const control = LInstance.control
      .layers(
        {
          [t("pages.contact.map.standard")]: standardLayer,
          [t("pages.contact.map.satellite")]: satelliteLayer,
        },
        {},
        { position: window.innerWidth < 768 ? "topleft" : "bottomleft" },
      )
      .addTo(map);
    layerControlRef.current = control;

    map.on("baselayerchange", (e: any) => {
      satelliteActiveRef.current = e.name === t("pages.contact.map.satellite");
    });

    // Load GeoJSON markers and routes
    fetch(geoJsonUrl)
      .then((res) => res.json())
      .then((data) => {
        if (!leafletRef.current) return;
        const branchList: any[] = [];
        const geoLayer = LInstance.geoJSON(data, {
          pointToLayer: (feature, latlng) => {
            const name =
              feature.properties.description ||
              feature.properties.name ||
              "Branch";
            const branchKey = name.toLowerCase().replace(/\s+/g, "_");
            const localizedName = t(`data.branches.${branchKey}.name`, name);
            const logo = feature.properties._umap_options?.iconUrl || "";
            const marker = LInstance.marker(latlng, {
              icon: createMarkerIcon(LInstance, primaryColor, logo),
            });
            marker.bindPopup(
              `<b>${t("common.hospitalName")}</b><br>${localizedName}`,
            );
            branchList.push({ name, latlng, marker, logo });
            return marker;
          },
          style: (f) => ({
            color: primaryColor,
            weight: 3,
            opacity: 0.6,
            dashArray: f?.geometry.type === "LineString" ? "8 6" : undefined,
          }),
        }).addTo(map);

        setBranches(branchList);
        if (branchList.length > 0)
          map.fitBounds(geoLayer.getBounds(), { padding: [40, 40] });
      });

    map.whenReady(() => {
      map.invalidateSize();
      setTimeout(() => map.invalidateSize(), 400);
    });

    map.getContainer().addEventListener("wheel", (e) => {
      if (e.ctrlKey || e.metaKey) {
        map.scrollWheelZoom.enable();
      } else {
        map.scrollWheelZoom.disable();
        setShowOverlay(true);
        if (zoomHintTimeoutRef.current)
          clearTimeout(zoomHintTimeoutRef.current);
        zoomHintTimeoutRef.current = setTimeout(
          () => setShowOverlay(false),
          1200,
        );
      }
    });

    return () => {
      map.remove();
      leafletRef.current = null;
    };
  }, [LInstance, isDark]);

  // 3. Surgical language sync — no map rebuild.
  //    Just updates the layer control labels and marker popup text in place.
  useEffect(() => {
    const map = leafletRef.current;
    if (
      !map ||
      !LInstance ||
      !standardLayerRef.current ||
      !satelliteLayerRef.current
    )
      return;

    // Swap out the layer control with fresh translated labels
    if (layerControlRef.current) layerControlRef.current.remove();
    layerControlRef.current = LInstance.control
      .layers(
        {
          [t("pages.contact.map.standard")]: standardLayerRef.current,
          [t("pages.contact.map.satellite")]: satelliteLayerRef.current,
        },
        {},
        { position: window.innerWidth < 768 ? "topleft" : "bottomleft" },
      )
      .addTo(map);

    // Update marker popup content with fresh translations
    branches.forEach((b) => {
      const branchKey = b.name.toLowerCase().replace(/\s+/g, "_");
      const localizedName = t(`data.branches.${branchKey}.name`, b.name);
      b.marker.setPopupContent(
        `<b>${t("common.hospitalName")}</b><br>${localizedName}`,
      );
    });
  }, [i18n.language]);

  // 4. Smooth Fly Transitions
  useEffect(() => {
    if (!leafletRef.current || !LInstance) return;
    const map = leafletRef.current;

    if (selectedBranch) {
      map.flyTo(selectedBranch.latlng, 16, { animate: true, duration: 1.5 });
      selectedBranch.marker.openPopup();
    } else if (branches.length > 0) {
      const group = LInstance.featureGroup(branches.map((b) => b.marker));
      map.flyToBounds(group.getBounds(), {
        padding: [60, 60],
        duration: 1.8,
        animate: true,
        easeLinearity: 0.25,
      });
    }

    const timer = setTimeout(() => map.invalidateSize(), 2000);
    return () => clearTimeout(timer);
  }, [selectedBranch, branches, LInstance]);

  const getDirectionsUrl = (b: any) => {
    const { lat, lng } = b.latlng;
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
  };

  return (
    <section
      className={`relative flex flex-col md:flex-none mb-10 md:mb-0 bg-bg ${className || ""}`}
    >
      {/* ── Map Container ── */}
      <div className="relative w-full h-[400px] min-h-[400px] shrink-0 md:h-[500px]">
        <div
          ref={mapRef}
          className="absolute inset-0 transition-colors duration-500 bg-bg"
        />

        {/* ── HUD layer (Selector & Zoom Hint) ── */}
        <div className="absolute inset-0 pointer-events-none z-1000">
          <div className="absolute top-2.5 right-2 md:right-auto md:left-14 pointer-events-auto">
            <CustomSelect
              options={[
                { value: "", label: t("pages.contact.map.selectBranch") },
                ...branches.map((b) => ({
                  value: b.name,
                  label: t(
                    `data.branches.${b.name.toLowerCase().replace(/\s+/g, "_")}.name`,
                  ),
                })),
              ]}
              value={selectedBranch?.name || ""}
              onChange={(v) =>
                setSelectedBranch(branches.find((b) => b.name === v) || null)
              }
              placeholder={t("pages.contact.map.selectBranch")}
              icon="location_on"
              className="w-50"
            />
          </div>

          <div
            className={`absolute left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-6 py-3 rounded-full text-sm text-white font-medium transition-all duration-300 shadow-2xl border border-white/10 ${
              showOverlay
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } md:bottom-12 bottom-1/2 translate-y-1/2`}
          >
            <span className="flex items-center gap-2">
              <span className="material-icons text-base">mouse</span>
              {t("pages.contact.map.zoomHint")}
            </span>
          </div>
        </div>
      </div>

      {/* ── Directions Card ── */}
      <MapDirectionsCard
        selectedBranch={selectedBranch}
        branches={branches}
        onSelectBranch={(b) => setSelectedBranch(b)}
        onBack={() => setSelectedBranch(null)}
        getDirectionsUrl={getDirectionsUrl}
      />
    </section>
  );
};

export default ContactMap;
