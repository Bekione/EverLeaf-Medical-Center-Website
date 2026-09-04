import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  type = "website",
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  publishedTime,
  modifiedTime,
  noindex = false,
  structuredData,
}) => {
  const { t } = useTranslation();
  // Use environment variable for production domain, fallback to everleaf-medical.com
  const siteUrl =
    (import.meta.env.VITE_SITE_URL || "https://everleaf-medical.com").replace(
      /\/$/,
      "",
    );
  const currentPath = window.location.hash
    ? window.location.hash.replace("#", "")
    : window.location.pathname;
  const supportedLanguages = ["en", "fr", "am"];
  const currentLanguage = supportedLanguages.includes(
    currentPath.split("/")[1],
  )
    ? currentPath.split("/")[1]
    : "en";
  const localizePath = (language: string) => {
    const pathWithoutLanguage = supportedLanguages.includes(
      currentPath.split("/")[1],
    )
      ? currentPath.replace(/^\/[^/]+/, "") || "/"
      : currentPath;
    return `/${language}${pathWithoutLanguage}`;
  };
  const canonicalUrl = canonical
    ? new URL(canonical, siteUrl)
    : new URL(localizePath(currentLanguage), siteUrl);
  if (!supportedLanguages.includes(canonicalUrl.pathname.split("/")[1])) {
    canonicalUrl.pathname = localizePath(currentLanguage);
  }
  const fullUrl = canonicalUrl.toString();
  const localeMap: Record<string, string> = {
    en: "en_US",
    fr: "fr_FR",
    am: "am_ET",
  };

  // Use new OG image placeholder, or external image if provided
  const metaImage = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>
        {title} | {t("components.seo.siteName")}
      </title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={fullUrl} />
      {supportedLanguages.map((language) => (
        <link
          key={language}
          rel="alternate"
          hrefLang={language}
          href={`${siteUrl}${localizePath(language)}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${siteUrl}${localizePath("en")}`}
      />

      {/* Open Graph Tags (Facebook, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:locale" content={localeMap[currentLanguage]} />
      <meta property="og:image" content={metaImage} />
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      {imageWidth && (
        <meta property="og:image:width" content={String(imageWidth)} />
      )}
      {imageHeight && (
        <meta property="og:image:height" content={String(imageHeight)} />
      )}
      <meta property="og:site_name" content={t("components.seo.siteName")} />
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
      {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}

      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
