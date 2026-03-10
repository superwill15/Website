import { getAllPosts } from "@/lib/posts";

export default async function sitemap() {
  const posts = await getAllPosts();

  const blogUrls = posts.map((post) => ({
    url: `https://assetstage.io/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    // Homepage
    {
      url: 'https://assetstage.io',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },

    // Main sections
    {
      url: 'https://assetstage.io/services',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: 'https://assetstage.io/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://assetstage.io/resources',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://assetstage.io/pricing',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },

    // Product pages
    {
      url: 'https://assetstage.io/inventory',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://assetstage.io/pm-optimization',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://assetstage.io/oem-extraction',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://assetstage.io/nameplate-extraction',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },

    // Blog
    {
      url: 'https://assetstage.io/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },

    // Comparison pages
    {
      url: 'https://assetstage.io/compare',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://assetstage.io/compare/assetstage-vs-mxloader',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://assetstage.io/compare/assetstage-vs-nrx-assethub',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://assetstage.io/compare/assetstage-vs-spreadsheets',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },

    // Industry pages
    {
      url: 'https://assetstage.io/industries',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://assetstage.io/industries/maritime',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://assetstage.io/industries/oil-gas',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://assetstage.io/industries/manufacturing',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://assetstage.io/industries/utilities',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },

    // Guides (pillar pages)
    {
      url: 'https://assetstage.io/guides',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://assetstage.io/guides/cmms-data-quality',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },

    // Contact
    {
      url: 'https://assetstage.io/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },

    // Blog posts (dynamic)
    ...blogUrls,
  ];
}
