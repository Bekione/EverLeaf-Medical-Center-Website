import React from "react";
import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import AutoHeight from "./AutoHeight";

interface MapDirectionsCardProps {
  selectedBranch: any | null;
  branches: any[];
  onSelectBranch: (branch: any) => void;
  onBack: () => void;
  getDirectionsUrl: (branch: any) => string;
}

export const MapDirectionsCard: React.FC<MapDirectionsCardProps> = ({
  selectedBranch,
  branches,
  onSelectBranch,
  onBack,
  getDirectionsUrl,
}) => {
  const { t } = useTranslation();

  return (
    <Reveal
      from="left"
      threshold={0.1}
      className="w-11/12 md:w-96 mx-auto md:mx-0 -mt-10 md:mt-0 md:absolute md:right-10 md:bottom-6 z-500 pointer-events-auto"
    >
      <AutoHeight className="rounded-xl shadow-2xl border bg-surface border-border" >
      <div className="p-6">
        {/* ── Dynamic header ── */}
        <h4 className="font-bold mb-4 flex items-center gap-2 text-text">
          <span className="material-icons text-primary">
            {selectedBranch ? "local_hospital" : "directions"}
          </span>
          {selectedBranch
            ? t(
                `data.branches.${selectedBranch.name
                  .toLowerCase()
                  .replace(/\s+/g, "_")}.name`,
              )
            : t("pages.contact.directions.title")}
        </h4>

        {selectedBranch ? (
          /* ── Selected-branch view ── */
          (() => {
            // Using the branch name as the ID for translation lookup
            const branchKey = selectedBranch.name
              .toLowerCase()
              .replace(/\s+/g, "_");
            const prefix = `data.branches.${branchKey}`;

            return (
              <div className="space-y-3 text-sm">
                {/* Address & Phone */}
                <div className="space-y-1.5 text-muted">
                  <div className="flex gap-2 items-start">
                    <span className="material-icons text-sm text-primary mt-0.5">
                      location_on
                    </span>
                    <p>{t(`${prefix}.address`)}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="material-icons text-sm text-primary">
                      phone
                    </span>
                    <a
                      href={`tel:${t(`${prefix}.phone`)}`}
                      className="hover:underline"
                    >
                      {t(`${prefix}.phone`)}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="rounded-lg p-3 space-y-1 bg-bg-alt">
                  <p className="font-semibold flex items-center gap-1.5 mb-2 text-text">
                    <span className="material-icons text-sm text-primary">
                      schedule
                    </span>
                    {t("pages.contact.directions.hours", "Opening Hours")}
                  </p>
                  {/* We'll assume the structure is consistent in translations */}
                  {[0, 1, 2].map((i) => {
                    const dayKey = `${prefix}.hours.${i}.days`;
                    const hourKey = `${prefix}.hours.${i}.hours`;
                    const dayText = t(dayKey);
                    // If the translation key doesn't exist, don't render it
                    if (dayText === dayKey) return null;
                    return (
                      <div key={i} className="flex justify-between text-xs">
                        <span className="text-muted">{dayText}</span>
                        <span className="font-medium text-text">
                          {t(hourKey)}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Parking */}
                <div className="flex gap-2 items-start text-muted">
                  <span className="material-icons text-sm text-primary mt-0.5">
                    local_parking
                  </span>
                  <p>{t(`${prefix}.parking`)}</p>
                </div>

                {/* Special notes */}
                {t(`${prefix}.notes`) !== `${prefix}.notes` && (
                  <div className="rounded-lg px-3 py-2 text-xs bg-primary-light text-primary">
                    {t(`${prefix}.notes`)}
                  </div>
                )}

                {/* Get Directions button */}
                <a
                  href={getDirectionsUrl(selectedBranch)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg font-semibold text-sm text-white transition-opacity hover:opacity-90 active:opacity-80 bg-primary"
                >
                  <span className="material-icons text-base">
                    directions_car
                  </span>
                  {t(
                    "pages.contact.directions.getDirections",
                    "Get Directions",
                  )}
                </a>

                {/* Back link */}
                <button
                  onClick={onBack}
                  className="w-full text-xs text-center cursor-pointer hover:underline text-muted"
                >
                  {t("pages.contact.directions.showGeneral", "← All branches")}
                </button>
              </div>
            );
          })()
        ) : (
          /* ── Default state: no branch selected ── */
          <div className="text-sm space-y-4">
            {/* Branch count badges */}
            <div className="flex flex-wrap gap-2">
              {branches.map((b) => (
                <button
                  key={b.name}
                  onClick={() => onSelectBranch(b)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors hover:opacity-80 cursor-pointer border-primary text-primary bg-primary-light"
                >
                  <span className="material-icons" style={{ fontSize: "12px" }}>
                    place
                  </span>
                  {t(
                    `data.branches.${b.name
                      .toLowerCase()
                      .replace(/\s+/g, "_")}.name`,
                  )}
                </button>
              ))}
            </div>

            <p className="text-muted">
              {t(
                "pages.contact.directions.selectHint",
                "Select a branch pin on the map or use the dropdown above to see directions.",
              )}
            </p>
          </div>
        )}
      </div>
      </AutoHeight>
    </Reveal>
  );
};
