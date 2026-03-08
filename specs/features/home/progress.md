## Padrões do Projeto

- Componentes são exportados via `src/components/[tier]/index.ts` (ou barrel correspondente) para facilitar imports.
- Não adicione comentários no código, expresse-se através de nomes claros.
- Se uma função, constante, etc, não depende do re-render do componente, devem ser instanciados fora do componente, logo abaixo do componente que o utiliza.
- Não precisa criar varios arquivos para cada componente, se o componente é usado somente no mesmo arquivo, mantenha-os no mesmo arquivo (só separe se o arquivo tive proximo de 500 linhas).
- Prefira arrow functions em vez de funções nomeadas sem return quando o componente não possui logica interna além da renderização.

---

## 2026-03-08 18:10 - US-001

**O que foi implementado:**
- Validação das interfaces `Project`, `Skill`, `Testimonial` e `HomeContent` em `src/types/content.ts`.
- Arquivos: `src/types/content.ts`

**Aprendizados para iterações futuras:**
- As interfaces já estavam implementadas e batem com o `plan.md`.
- O typecheck global falha por dependências não implementadas, mas o arquivo individual está correto.

---

## 2026-03-08 18:15 - US-002

**O que foi implementado:**
- Criação do serviço `src/services/content-service.ts` para leitura centralizada do `content.json`.
- Tipagem do retorno como `HomeContent`.
- Arquivos: `src/services/content-service.ts`

**Aprendizados para iterações futuras:**
- O uso de `resolveJsonModule: true` no `tsconfig.json` é essencial para importar arquivos JSON diretamente em TypeScript.
- Abstrair o carregamento de dados em um serviço facilita a manutenção caso a fonte de dados mude no futuro (ex: para uma API ou CMS).

---

## 2026-03-08 18:20 - US-003

**O que foi implementado:**
- Criação do hook `src/hooks/use-content.ts` para consumo fácil dos dados no frontend.
- Integração com `content-service.ts`.
- Arquivos: `src/hooks/use-content.ts`

**Aprendizados para iterações futuras:**
- Manter uma camada de hook isola os componentes da implementação de fetching ou acesso a dados.
- Em Next.js 16, hooks podem ser usados tanto em client components quanto apenas para organização em alguns contextos, embora para server components a importação direta do serviço seja mais comum.

---
