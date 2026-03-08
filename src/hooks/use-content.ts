import { HomeContent } from '../types/content';
import { getContent } from '../services/content-service';

/**
 * Hook para acessar o conteúdo da home
 */
export const useContent = (): HomeContent => {
  return getContent();
};
