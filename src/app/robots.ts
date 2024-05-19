import type { MetadataRoute } from 'next';
import { appConfig } from '@/config/app.config';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/*'
    },
    sitemap: `${appConfig.baseUrl}/sitemap.xml`
  };
};

export default robots;
