import { useEffect } from "react";

interface SEOMetaProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEOMeta({
  title,
  description,
  keywords = "OpenClaw, 技能库, AI代理, 开源",
  image = "https://openclaw.ai/og-image.png",
  url = "https://openclaw-skills.pages.dev",
  type = "website",
}: SEOMetaProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const updateProperty = (property: string, content: string) => {
      let element = document.querySelector(
        `meta[property="${property}"]`
      ) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Standard meta tags
    updateMeta("description", description);
    updateMeta("keywords", keywords);
    updateMeta("viewport", "width=device-width, initial-scale=1.0");

    // Open Graph tags
    updateProperty("og:title", title);
    updateProperty("og:description", description);
    updateProperty("og:image", image);
    updateProperty("og:url", url);
    updateProperty("og:type", type);
    updateProperty("og:site_name", "OpenClaw Skills");

    // Twitter Card tags
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", image);

    // Additional SEO tags
    updateMeta("robots", "index, follow");
    updateMeta("language", "Chinese");
  }, [title, description, keywords, image, url, type]);

  return null;
}
