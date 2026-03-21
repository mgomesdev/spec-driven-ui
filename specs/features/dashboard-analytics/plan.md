# Plan: dashboard-analytics

> Gerado a partir de: `specs/features/dashboard-analytics/research.md`
> Foco: Frontend

## 1. Visão Geral Técnica

Dashboard de analytics com tema escuro moderno para monitoramento de KPIs. O projeto será implementado usando Next.js 16.1.6, React 19.2 e Tailwind CSS v4, seguindo Atomic Design com implementação bottom-up (átomos → moléculas → organismos).

A estrutura será dividida em:
- **Camada de tipos**: Interfaces TypeScript em `src/generated/types.ts`
- **Camada de componentes**: Componentes atômicos, moleculares e organismos
- **Camada de página**: Dashboard principal integrando todos os componentes
- **Dados**: Mock estático para todas as métricas (sem API)

---

## 2. Estrutura de Arquivos

```
frontend/src/
├── app/
│   ├── layout.tsx                    # modificado - adiciona layout com sidebar
│   ├── globals.css                   # modificado - variáveis CSS dark theme
│   └── dashboard/
│       └── page.tsx                  # criado - página principal do dashboard
├── components/
│   ├── atoms/
│   │   ├── button.tsx                # criado - botão base
│   │   ├── icon.tsx                 # criado - ícone base
│   │   ├── badge.tsx                # criado - badge/label
│   │   ├── input.tsx                # criado - input base
│   │   └── avatar.tsx               # criado - avatar do usuário
│   ├── molecules/
│   │   ├── card.tsx                 # criado - card base
│   │   ├── search-bar.tsx           # criado - barra de busca
│   │   ├── breadcrumbs.tsx          # criado - breadcrumbs de navegação
│   │   ├── table.tsx                # criado - tabela base
│   │   ├── pagination.tsx           # criado - controles de paginação
│   │   ├── banner.tsx               # criado - banner de notificação
│   │   └── quick-actions.tsx        # criado - grid de ações rápidas
│   └── organisms/
│       ├── sidebar.tsx              # criado - sidebar de navegação
│       ├── summary-cards.tsx        # criado - cards de métricas
│       ├── chart-section.tsx        # criado - área reservada para gráficos
│       ├── stacked-list.tsx         # criado - lista com paginação
│       ├── table-section.tsx        # criado - tabela completa
│       └── gallery-section.tsx      # criado - galeria de imagens
├── hooks/
│   └── use-dashboard-data.ts        # criado - hook para dados mockados
├── services/
│   └── dashboard-service.ts         # criado - serviço de dados mock
└── generated/
    └── types.ts                     # modificado - adiciona tipos do dashboard
```

Legenda:
- `# criado` — arquivo novo
- `# modificado` — arquivo existente com alterações

---

## 3. Interfaces TypeScript

Todos os tipos devem ser definidos em `src/generated/types.ts`:

```typescript
// Tipos de Navegação
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
}

// Tipos de Métricas (RF-01)
export interface MetricData {
  id: string;
  label: string;
  value: string | number;
  variation: number; // percentual, positivo ou negativo
  icon: string;
  format: 'currency' | 'number' | 'percent';
}

// Tipos de Dados da Tabela (RF-08)
export interface TableRow {
  id: string;
  name: string;
  status: 'active' | 'pending' | 'inactive';
  date: string;
  value: number;
}

export interface TableColumn {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
}

// Tipos de Ações Rápidas (RF-05)
export interface QuickAction {
  id: string;
  label: string;
  icon: string;
  onClick?: () => void;
}

// Tipos de Imagens da Galeria (RF-09)
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

// Tipos de Banner (RF-07)
export interface BannerData {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  dismissible: boolean;
}

// Tipos de Usuário
export interface UserProfile {
  name: string;
  avatar: string;
  role?: string;
}

// Tipos de Configuração do Dashboard
export interface DashboardConfig {
  sidebarWidth: number;
  breadcrumbs: BreadcrumbItem[];
  metrics: MetricData[];
  quickActions: QuickAction[];
  tableData: TableRow[];
  galleryImages: GalleryImage[];
  banner?: BannerData;
  user: UserProfile;
}

// Constantes de Cores (Design System)
export const COLORS = {
  bgPrimary: '#0A0A0B',
  bgSecondary: '#141417',
  accent: '#FF5C00',
  success: '#22C55E',
  error: '#EF4444',
} as const;

// Constantes de Dimensões
export const DIMENSIONS = {
  sidebarWidth: 260,
  borderRadius: 8,
  borderRadiusLg: 16,
} as const;
```

---

## 4. Contratos de API (Mock)

Como os dados são mockados, o contrato será implementado via `dashboard-service.ts`:

### 4.1 dashboard-service.ts

```typescript
// services/dashboard-service.ts

import { 
  MetricData, 
  TableRow, 
  QuickAction, 
  GalleryImage, 
  BannerData,
  UserProfile,
  BreadcrumbItem 
} from '@/generated/types';

// Mock de métricas de receita (RF-01)
export const getMetrics = (): MetricData[] => [
  {
    id: 'revenue',
    label: 'Receita',
    value: 125000,
    variation: 12.5,
    icon: 'dollar',
    format: 'currency',
  },
  {
    id: 'active-users',
    label: 'Usuários Ativos',
    value: 8420,
    variation: 8.2,
    icon: 'users',
    format: 'number',
  },
  {
    id: 'conversion-rate',
    label: 'Taxa de Conversão',
    value: 3.45,
    variation: -2.1,
    icon: 'percent',
    format: 'percent',
  },
  {
    id: 'avg-ticket',
    label: 'Ticket Médio',
    value: 285,
    variation: 5.7,
    icon: 'ticket',
    format: 'currency',
  },
];

// Mock de breadcrumbs (RF-03)
export const getBreadcrumbs = (): BreadcrumbItem[] => [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Analytics', href: '/dashboard/analytics' },
  { label: 'Overview', href: '/dashboard/analytics/overview', isActive: true },
];

// Mock de ações rápidas (RF-05)
export const getQuickActions = (): QuickAction[] => [
  { id: 'export', label: 'Exportar', icon: 'download' },
  { id: 'new-report', label: 'Novo Relatório', icon: 'file-plus' },
  { id: 'configure-alerts', label: 'Configurar Alertas', icon: 'bell' },
  { id: 'share', label: 'Compartilhar', icon: 'share' },
];

// Mock de dados da tabela (RF-08)
export const getTableData = (): TableRow[] => [
  { id: '1', name: 'Empresa Alpha', status: 'active', date: '2024-01-15', value: 15000 },
  { id: '2', name: 'Beta Corp', status: 'pending', date: '2024-01-14', value: 8500 },
  { id: '3', name: 'Gamma Ltd', status: 'active', date: '2024-01-13', value: 12300 },
  { id: '4', name: 'Delta Inc', status: 'inactive', date: '2024-01-12', value: 4200 },
  { id: '5', name: 'Epsilon SA', status: 'active', date: '2024-01-11', value: 9800 },
];

// Mock de imagens da galeria (RF-09)
export const getGalleryImages = (): GalleryImage[] => [
  { id: '1', src: '/images/gallery-1.jpg', alt: 'Dashboard screenshot 1' },
  { id: '2', src: '/images/gallery-2.jpg', alt: 'Dashboard screenshot 2' },
  { id: '3', src: '/images/gallery-3.jpg', alt: 'Dashboard screenshot 3' },
  { id: '4', src: '/images/gallery-4.jpg', alt: 'Dashboard screenshot 4' },
];

// Mock de banner (RF-07)
export const getBanner = (): BannerData | null => ({
  id: 'banner-1',
  message: 'Nova funcionalidade: Gráficos interativos disponíveis!',
  type: 'info',
  dismissible: true,
});

// Mock de perfil do usuário
export const getUserProfile = (): UserProfile => ({
  name: 'João Silva',
  avatar: '/images/avatar.png',
  role: 'Analista',
});
```

---

## 5. Componentes e Props

### 5.1 Átomos

| Componente | Arquivo | Props |
|------------|---------|-------|
| Button | `atoms/button.tsx` | `variant`, `size`, `disabled`, `onClick`, `children` |
| Icon | `atoms/icon.tsx` | `name`, `size`, `color` |
| Badge | `atoms/badge.tsx` | `variant`, `children` |
| Input | `atoms/input.tsx` | `type`, `placeholder`, `value`, `onChange`, `disabled` |
| Avatar | `atoms/avatar.tsx` | `src`, `alt`, `size` |

### 5.2 Moléculas

| Componente | Arquivo | Props |
|------------|---------|-------|
| Card | `molecules/card.tsx` | `children`, `hoverable`, `onClick` |
| SearchBar | `molecules/search-bar.tsx` | `placeholder`, `onSearch`, `value` |
| Breadcrumbs | `molecules/breadcrumbs.tsx` | `items`, `onNavigate` |
| Table | `molecules/table.tsx` | `columns`, `data`, `onRowClick` |
| Pagination | `molecules/pagination.tsx` | `currentPage`, `totalPages`, `onPageChange` |
| Banner | `molecules/banner.tsx` | `message`, `type`, `dismissible`, `onDismiss` |
| QuickActions | `molecules/quick-actions.tsx` | `actions`, `onActionClick` |

### 5.3 Organismos

| Componente | Arquivo | Props |
|------------|---------|-------|
| Sidebar | `organisms/sidebar.tsx` | `navItems`, `user`, `isOpen`, `onToggle`, `onNavigate` |
| SummaryCards | `organisms/summary-cards.tsx` | `metrics`, `onMetricClick` |
| ChartSection | `organisms/chart-section.tsx` | `title`, `data` |
| StackedList | `organisms/stacked-list.tsx` | `items`, `pagination`, `onPageChange` |
| TableSection | `organisms/table-section.tsx` | `columns`, `data`, `onRowClick`, `pagination` |
| GallerySection | `organisms/gallery-section.tsx` | `images`, `onImageClick` |

---

## 6. Hooks Personalizados

### 6.1 use-dashboard-data.ts

```typescript
// hooks/use-dashboard-data.ts

import { useState } from 'react';
import { 
  MetricData, 
  TableRow, 
  BreadcrumbItem,
  QuickAction,
  GalleryImage,
  BannerData,
  UserProfile 
} from '@/generated/types';
import * as dashboardService from '@/services/dashboard-service';

export function useDashboardData() {
  const [isLoading] = useState(false);
  const [error] = useState<string | null>(null);  
  const metrics = () => dashboardService.getMetrics();
  const breadcrumbs = () => dashboardService.getBreadcrumbs();
  const quickActions = () => dashboardService.getQuickActions();
  const tableData = () => dashboardService.getTableData();
  const galleryImages = () => dashboardService.getGalleryImages();
  const banner = () => dashboardService.getBanner();
  const user = () => dashboardService.getUserProfile();

  return {
    metrics,
    breadcrumbs,
    quickActions,
    tableData,
    galleryImages,
    banner,
    user,
    isLoading,
    error,
  };
}
```

---

## 7. Diagrama de Dependências

Ordem de implementação (bottom-up):

```
[types.ts]
    │
    ├──► [dashboard-service.ts]
    │         │
    │         ▼
    │    [use-dashboard-data.ts]
    │         │
    ▼         ▼
[atoms/button.tsx] ──► [atoms/icon.tsx] ──► [atoms/badge.tsx]
         │                    │                    │
         │                    │                    ▼
         │                    │            [atoms/input.tsx]
         │                    │                    │
         ▼                    ▼                    ▼
[molecules/card.tsx] ◄── [molecules/search-bar.tsx] ◄── [molecules/breadcrumbs.tsx]
         │                              │
         │                              ▼
         │                      [molecules/table.tsx]
         │                              │
         ▼                              ▼
[molecules/pagination.tsx] ◄── [molecules/banner.tsx]
         │                              │
         ▼                              ▼
[molecules/quick-actions.tsx] ◄────────┘
         │
         ▼
[organisms/sidebar.tsx] ◄───────────────────────────────────────┐
         │                                                        │
         ▼                                                        ▼
[organisms/summary-cards.tsx] ◄── [organisms/chart-section.tsx] │
         │                                                        │
         ▼                                                        ▼
[organisms/stacked-list.tsx] ◄── [organisms/table-section.tsx]   │
         │                                                        │
         ▼                                                        ▼
[organisms/gallery-section.tsx] ◄────────────────────────────────┘
         │
         ▼
[dashboard/page.tsx]
```

---

## 8. Detalhamento por Requisito Funcional

| RF | Requisito | Artefatos Correspondentes |
|----|-----------|---------------------------|
| RF-01 | 4 cards de métricas com dados mockados de receita | `MetricData`, `dashboard-service.ts`, `use-dashboard-data.ts`, `organisms/summary-cards.tsx` |
| RF-02 | Sidebar com navegação | `NavItem`, `organisms/sidebar.tsx`, `organisms/sidebar.test.ts` |
| RF-03 | Breadcrumbs refletem hierarquia | `BreadcrumbItem`, `molecules/breadcrumbs.tsx` |
| RF-04 | Barra de busca estilizada | `molecules/search-bar.tsx`, `atoms/input.tsx` |
| RF-05 | Área reservada para gráficos | `organisms/chart-section.tsx` |
| RF-06 | Lista com paginação | `molecules/pagination.tsx`, `organisms/stacked-list.tsx` |
| RF-07 | Banner de notificação com fechar | `BannerData`, `molecules/banner.tsx` |
| RF-08 | Tabela com dados em formato tabular | `TableRow`, `TableColumn`, `molecules/table.tsx`, `organisms/table-section.tsx` |
| RF-09 | Galeria com grid responsivo | `GalleryImage`, `organisms/gallery-section.tsx` |

---

## 9. Questões em Aberto

- [x] Definir estratégia de ícones: usar biblioteca externa (ex: lucide-react) ou ícones customizados
  * Usar icones customizados.
- [x] Confirmar se há necessidade de testes E2E com Playwright nesta fase
  * Os testes serão feitos na proxima fase por um agente especifico.
- [x] Definir se os dados mock devem ser separados em arquivo JSON ou mantidos no service
  * mantidos no service, só exportar se for ser utilizado outro componente externo.
- [x] Verificar se há necessidade de implementar animações específicas para o banner
  * Sim aplicar animações simples e minimalistas.
- [x] Confirmar breakpoint para colapso da sidebar (768px conforme RNF-05)

---

## 10. Variáveis CSS (globals.css)

Atualizar `src/app/globals.css` com as cores mandatórias:

```css
:root {
  --color-bg-primary: #0A0A0B;
  --color-bg-secondary: #141417;
  --color-accent: #FF5C00;
  --color-success: #22C55E;
  --color-error: #EF4444;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #A1A1AA;
  --font-family-primary: 'Inter', sans-serif;
  --sidebar-width: 260px;
}
```

---

## 11. Critérios de Implementação

- Todos os componentes devem usar as variáveis CSS definidas
- Tipografia: fonte Inter de Google Fonts
- Estados de hover devem usar a cor accent (#FF5C00)
- Background primary: #0A0A0B, Background secondary: #141417
- Implementação bottom-up: átomos primeiro, depois moléculas, depois organismos
- Sidebar com largura fixa de 260px
- Layout responsivo: sidebar colapsável em telas menores que 768px
