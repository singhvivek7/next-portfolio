import type { MetadataRoute } from 'next';
import { appConfig } from '@/config/app.config';

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: appConfig.baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    }
  ];
};

export default sitemap;
