import contentData from '@/data/content.json';
import { HomeContent } from '@/types/content';

/**
 * Service to handle content retrieval for the Home page.
 * Currently imports directly from a JSON file, but can be updated
 * to fetch from an API or Headless CMS in the future.
 */
export const contentService = {
  /**
   * Returns the complete content for the home page.
   */
  getHomeContent: (): HomeContent => {
    return contentData as HomeContent;
  },
};
