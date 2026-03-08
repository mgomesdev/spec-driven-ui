import { HomeContent } from '../types/content';
import contentData from '../data/content.json';

/**
 * Serviço para obtenção dos dados da Home
 */
export const getContent = (): HomeContent => {
  return contentData as HomeContent;
};
