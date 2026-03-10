export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/dashboard/',
        '/admin/',
        '/assets/',
        '/locations/',
        '/sites/',
        '/login/',
        '/api/',
        '/private/',
      ],
    },
    sitemap: 'https://assetstage.io/sitemap.xml',
  };
}