import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  type = "website",
  image,
  structuredData,
}) => {
  // Use environment variable for production domain, fallback to everleaf-medical.com
  const siteUrl =
    import.meta.env.VITE_SITE_URL || "https://everleaf-medical.com";
  const currentPath = window.location.hash
    ? window.location.hash.replace("#", "")
    : window.location.pathname;
  const fullUrl = canonical || `${siteUrl}${currentPath}`;

  // Use new OG image placeholder, or external image if provided
  const metaImage = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title} | Everleaf Medical Center</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags (Facebook, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content="Everleaf Medical Center" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />

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
