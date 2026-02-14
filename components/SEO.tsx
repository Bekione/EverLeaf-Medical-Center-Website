
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, type = 'website', image, structuredData }) => {
  // In production will change this to actual domain
  const siteUrl = 'https://everleaf-medical.com'; 
  const currentPath = window.location.hash ? window.location.hash.replace('#', '') : window.location.pathname;
  const fullUrl = canonical ? canonical : `${siteUrl}${currentPath}`;
  const metaImage = image 
    ? (image.startsWith('http') ? image : `${siteUrl}${image}`) 
    : 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHdy-TQkrlWxbjfSK2Oiy0_ZEMVW-pJE0f4gboXr4qSy9BOeIWU0215DPTHix5i2VvnodWBnr3qfyNDrRh-kANv576LGzxpYn6JUdqnp1WkDfCvZNtBM891q3m-AKBFVwB7X8sSMvXnjTLfr9fJ6mD6ArEvY-2FZpxSXe58A-EhF9nFyof_0B4wn0eefDo0rtXdhtTB94_3VnPzoZVUr3OkpJI74Z33vo5UV_mV1ud16km-3V86j_KQsMw2N2WSorHb1sQ1GgQmVc';

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
