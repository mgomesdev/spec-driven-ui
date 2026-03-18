export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderProps {
  logoAlt?: string;
  navItems?: NavItem[];
}

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Descrição', href: '/descricao' },
];

export const DEFAULT_LOGO_ALT = 'Logo - Página inicial';
