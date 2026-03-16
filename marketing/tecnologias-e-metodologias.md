# Tecnologias e Metodologias do Projeto

## O que é este projeto?

Este é um site de portfólio pessoal criado com tecnologias modernas de desenvolvimento web. O objetivo é apresentar projetos, habilidades e experiência de forma profissional para recrutadores e clientes em potencial.

---

## 🛠 Tecnologias Principais

### Next.js 16.1.6
**O que é:** Um framework (conjunto de ferramentas) para criar sites e aplicações web com React.

**Por que usamos:** 
- Já vem com várias funcionalidades prontas (roteamento, otimização de imagens, server-side rendering)
- Ótimo para SEO (aparecer bem no Google)
- Muito rápido e performático

**Analogia:** É como usar uma cozinha profissional completa em vez de construir uma do zero.

---

### React 19.2
**O que é:** Uma biblioteca (ferramenta) para criar interfaces de usuário interativas.

**Por que usamos:**
- Permite criar componentes reutilizáveis (como peças de Lego)
- Atualiza a tela automaticamente quando os dados mudam
- É o padrão da indústria

**Analogia:** É como ter blocos de construção que você pode reutilizar em diferentes partes da casa.

---

### TypeScript 5.9
**O que é:** JavaScript com superpoderes de tipagem.

**Por que usamos:**
- Ajuda a encontrar erros antes de rodar o código
- Documenta o código automaticamente
- Autocomplete inteligente no editor

**Diferença para quem não conhece:**
- JavaScript simples: você pode passar qualquer tipo de dado para uma função
- TypeScript: você define que uma função só aceita números, e se alguém passar texto, o editor avisa o erro

---

### Tailwind CSS v4.2
**O que é:** Um framework de estilos (CSS) que permite estilizar elementos diretamente no HTML.

**Por que usamos:**
- Não precisa criar arquivos CSS separados
- Classes reutilizáveis e consistentes
- Tema centralizado (cores, fontes, espaçamento em um só lugar)

**Exemplo:**
```html
<!-- Sem Tailwind (CSS tradicional) -->
<button class="botao-primario">Clique aqui</button>

<!-- Com Tailwind -->
<button class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
  Clique aqui
</button>
```

---

## 🧠 Metodologias

### Spec-Driven Development (Desenvolvimento Guiado por Espeificações)
**O que é:** Um fluxo de trabalho onde cada funcionalidade passa por etapas bem definidas antes de ser implementada.

**Etapas do fluxo:**
1. **Research (Pesquisa):** Entender o que precisa ser feito
2. **Plan (Planejamento):** Definir como será feito
3. **Tasks (Tarefas):** Dividir em pequenas tarefas
4. **Implement (Implementação):** Codar a solução
5. **Review (Revisão):** Verificar se está correto

**Benefício:** Evita retrabalho, pois tudo é planejado antes de codar.

---

### Atomic Design
**O que é:** Uma metodologia para organizar componentes do menor para o maior.

**Níveis (do menor para o maior):**

| Nível | Descrição | Exemplo |
|-------|-----------|---------|
| **Atom** (Átomo) | Menor unidade, não pode ser dividido | Botão, input, texto |
| **Molecule** (Molécula) | Combinação de átomos | Campo de busca com botão |
| **Organism** (Organismo) | Grupo de moléculas | Header com logo, menu, busca |
| **Template** (Modelo) | Estrutura de uma página | Layout de blog |
| **Page** (Página) | Template com conteúdo real | Blog completo |

**Benefício:** Componentes reutilizáveis e manutenção mais fácil.

---

### Conventional Commits
**O que é:** Um padrão para escrever mensagens de commit (salvamento) no Git.

**Formato:**
```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[footer opcional]
```

**Tipos mais comuns:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Estilo (formatação)
- `refactor`: Refatoração
- `test`: Testes

**Exemplo:**
```
feat(button): adiciona botão de download

- Adiciona ícone de download
- Suporte a diferentes tamanhos
```

---

## 🤖 Agentes de IA (OpenCode)

### O que é o OpenCode?
É uma ferramenta que usa agentes de IA para automatizar e estruturar o desenvolvimento. Cada agente tem uma função específica.

### Agentes do Projeto

| Agente | Função |
|--------|--------|
| **us-to-research** | Transforma requisitos do product owner em pesquisa estruturada |
| **research-to-plan** | Converte pesquisa em plano técnico |
| **plan-to-tasks** | Transforma plano em tarefas pequenas e acionáveis |
| **implement-tasks** | Executa as tarefas uma por uma |
| **diff-design-vs-code** | Compara o design com o código implementado |
| **export-code-to-design** | Exporta código React para arquivo de design (.pen) |
| **import-design-to-code** | Importa design validado de volta para código |

### Benefício para a Equipe
- **Junior:** Pode seguir fluxos estruturados sem precisar saber tudo
- **Pleno/Senior:** Gasta menos tempo em tarefas repetitivas
- **Time inteiro:** Menos erros por falta de comunicação

---

## 📁 Estrutura de Pastas

```
/
├── frontend/              # Projeto Next.js
│   ├── src/app/          # Páginas e layouts
│   └── package.json      # Dependências
│
├── specs/                 # Especificações do projeto
│   └── docs/
│       ├── architecture.md     # Estrutura geral
│       ├── convencoes-codigo.md # Regras de código
│       ├── guardrails.md      # O que evitar
│       └── padroes-git.md    # Padrões Git
│
├── .opencode/             # Configuração dos agentes IA
│   └── agents/            # Agentes especializados
│
└── AGENTS.md              # Configuração principal
```

---

## ✅ Boas Práticas do Projeto

### TypeScript
- ❌ Não usar `any` (tipo genérico que aceita qualquer coisa)
- ✅ Usar tipagem explícita para props de componentes
- ✅ Preferir inferência de tipos (deixar o TypeScript adivinhar quando óbvio)

### Componentes React
- ❌ Não fazer fetch de dados diretamente no componente
- ✅ Usar hooks ou receber dados por props
- ✅ Tratar estados: loading, sucesso, erro
- ✅ Usar arrow functions (funções de seta)

### Estilização
- ❌ Não usar `style={{...}}` (CSS inline)
- ✅ Usar apenas classes Tailwind
- ❌ Não criar constantes com classes CSS
- ✅ Usar variáveis CSS para temas (cores, fontes)

### Git
- ❌ Commits grandes e vagos ("alterações")
- ✅ Commits pequenos e descritivos seguindo Conventional Commits
- ✅ Mensagens claras do que foi feito

---

## 🎯 Por que isso importa?

### Para o Desenvolvedor Junior
1. **Curva de aprendizado menor:** Segue um fluxo estruturado
2. **Código consistente:** Todas as regras estão documentadas
3. **Mentoria automática:** Os agentes guiam pelo processo
4. **Menor chance de erros:** Guardrails previnem problemas comuns

### Para o Projeto
1. **Qualidade elevada:** Padrões bem definidos
2. **Manutenção fácil:** Código organizado e documentado
3. **Escalabilidade:** Cresce sem virar bagunça
4. **Colaboração:** Qualquer pessoa pode entender o código

### Para a Empresa/Cliente
1. **Entrega mais rápida:** Automação com agentes IA
2. **Menos bugs:** Validações automáticas
3. **Código sustentável:** Facilmente mantível no futuro

---

## 🚀 Como Contribuir

1. **Leia os guardrails:** `specs/docs/guardrails.md`
2. **Siga o fluxo:** Research → Plan → Tasks → Implement
3. **Mantenha a convenção:** Arquivos, código, commits
4. **Teste local:** Use `npm run dev` para rodar o projeto
5. **Verifique lint:** Use `npm run lint` antes de commitar

---

## 📚 Recursos para Aprender Mais

- [Documentação Next.js](https://nextjs.org/)
- [Documentação React](https://react.dev/)
- [Documentação TypeScript](https://www.typescriptlang.org/)
- [Documentação Tailwind CSS](https://tailwindcss.com/)
- [Atomic Design](https://atomicdesign.bradfrost.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

*Este documento foi criado para ajudar desenvolvedores de todos os níveis a entenderem as tecnologias, metodologias e práticas utilizadas neste projeto.*
