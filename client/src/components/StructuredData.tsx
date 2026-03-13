import { useEffect } from "react";

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    // Create or update script tag with JSON-LD
    let script = document.querySelector(
      'script[type="application/ld+json"]'
    ) as HTMLScriptElement;

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
  }, [data]);

  return null;
}
