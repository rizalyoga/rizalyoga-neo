"use client";

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title,
  description,
  image,
  url,
  type = "website",
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Create or update meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      property?: boolean
    ) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", "portfolio, web development, React, projects");
    updateMetaTag("author", "Your Name");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", type, true);

    if (url) {
      updateMetaTag("og:url", url, true);
    }

    if (image) {
      updateMetaTag("og:image", image, true);
      updateMetaTag("og:image:alt", title, true);
    }

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);

    if (image) {
      updateMetaTag("twitter:image", image);
    }

    // Cleanup function to restore default values when component unmounts
    return () => {
      document.title = "Portfolio - Your Name";
    };
  }, [title, description, image, url, type]);

  return null;
};

export default SEO;
