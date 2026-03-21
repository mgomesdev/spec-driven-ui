# Convenções de Código

## Geral

- Não adicionar comentários no código `.ts`, `.tsx`, apenas é permitido em cenarios de teste ou planejamento.

## Tipos e Interfaces

- Props de componentes devem ser nomeadas de maneira descritiva para props `ComponentProps`
- Props que utilizam `ForwardRef` devem tipar as suas interfaces de maneira descritiva para ref `ComponentRef`.

---

## Arquivos

- Arquivos devem respeitar o maximo de 500 linhas, acima disso deverá ser criado em arquivo separado e importado onde é utizado.

### Espaçamentos

- Evite espaçamentos desnecessários entre linhas (vertical).

---

## Componentes

- Componentes só devem ser exportados se forem realmente ser utilizados por outros componentes.
- Quando um arquivo só possui apenas um componente, e ele será utilizado em em outros lugares, ele deverá ser exportado como default `export default`.

---

## Escrita de testes

- Testes não devem fazer exportações, cada teste deve ser isolado com responsabilidade unica - **single responsability - solid**
- Classes **page object** e **constantes globais** gerais devem ficar no final do arquivo de teste

---

## Padrôes Next.js

- Utilize o component `Image` de `next/image` para imagens
- As fonts devem ser importadas de `next/font/google` no arquivo de layout