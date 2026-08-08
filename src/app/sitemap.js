import { blogPosts } from '@/data/blogPosts';

export default function sitemap() {
  const baseUrl = 'https://projexelengineering.com';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => {
    let dateToUse = new Date();
    if (post.date) {
      const parsed = new Date(post.date);
      if (!isNaN(parsed.getTime())) {
        dateToUse = parsed;
      }
    }
    
    return {
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: dateToUse,
      changeFrequency: 'monthly',
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}
