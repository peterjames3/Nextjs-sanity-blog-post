import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap{
    return[
        {
            url: 'https://nextjs-sanity-blog-post-vowd.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
          },
          {
            url: 'https://nextjs-sanity-blog-post-vowd.vercel.app//about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
          },
    ]
}