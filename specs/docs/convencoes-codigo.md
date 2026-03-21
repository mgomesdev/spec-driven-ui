# Convenções de Código

## TypeScript

- Não adicionar comentários no código `.ts`, `.tsx`, apenas é permitido em cenarios de teste ou planejamento.
- Não adicionar o tipo de retorno da função, use a **inferencia de tipos** do typescript
- Props de componentes devem ser nomeadas de maneira descritiva para props `ComponentProps`
- Props que utilizam `ForwardRef` devem tipar as suas interfaces de maneira descritiva para ref `ComponentRef`.

---

## Arquivos

- Arquivos devem respeitar o maximo de 500 linhas, acima disso deverá ser criado em arquivo separado e importado onde é utizado.

---

## Identação

- Evite espaçamentos desnecessários entre linhas (vertical).

---

## Componentes

- Componentes só devem ser exportados se forem realmente ser utilizados por outros componentes.
-  Use `export default` para arquivos com apenas 1 componente.

---

## Escrita de testes

- Testes não devem fazer exportações, cada teste deve ser isolado com responsabilidade unica - **single responsability - solid**
- Classes **page object** e **constantes globais** gerais devem ficar no final do arquivo de teste

---

## Next.js

- Utilize o component `Image` de `next/image` para imagens com a prop `alt` obrigatória
- As fonts devem ser importadas de `next/font/google` no arquivo de layout

---

## React

- Em loops `map` adicionar a `key` unica no elemento e priorizando a prop do array da iteração no lugar da key 
