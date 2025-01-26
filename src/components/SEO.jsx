import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, path }) => {
  const baseUrl = "https://infinityCoder.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    url: `${baseUrl}${path}`,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${baseUrl}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${baseUrl}${path}`} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
