type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Pre-built schema generators for common types

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AssetStage",
    "url": "https://assetstage.io",
    "logo": "https://assetstage.io/logo.png",
    "description": "The CMMS Data Workspace. AssetStage helps maintenance teams transform messy data into production-ready hierarchies—faster than traditional consulting, without the six-figure price tag.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "sales@assetstage.io"
    },
    "sameAs": [
      "https://www.linkedin.com/company/assetstage/"
    ]
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AssetStage",
    "url": "https://assetstage.io",
    "description": "The CMMS Data Workspace for maintenance teams",
    "publisher": {
      "@type": "Organization",
      "name": "AssetStage"
    }
  };
}

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AssetStage",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "CMMS Data Workspace for maintenance teams to clean, validate, and prepare asset data",
    "offers": {
      "@type": "Offer",
      "price": "1000",
      "priceCurrency": "GBP",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1"
    }
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url && { "item": item.url })
    }))
  };
}

export function generateArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  url,
  image,
}: {
  headline: string;
  description?: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description || headline,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "url": url,
    "image": image || "https://assetstage.io/og-image.png",
    "author": {
      "@type": "Organization",
      "name": "AssetStage"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AssetStage",
      "logo": {
        "@type": "ImageObject",
        "url": "https://assetstage.io/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}
