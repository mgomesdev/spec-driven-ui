'use client';

import { contentService } from '@/services/content-service';
import { HomeContent } from '@/types/content';
import { useMemo } from 'react';

/**
 * Hook to provide content for the Home page.
 * Keeps the component logic clean and abstracts the data source.
 */
export const useContent = (): HomeContent => {
  const content = useMemo(() => contentService.getHomeContent(), []);
  
  return content;
};
