# Simulação: UI-PIXEL-AGENT no Google Stitch

## 🎬 Cenário Real — Gerando Componentes com Máxima Precisão

---

## 📥 PASSO 1: Upload do JSON

**Você copia o `memory-bank.json` completo e cola no Google Stitch:**

```
[Cola aqui o memory-bank.json]
```

---

## ⏳ PASSO 2: Aguardar Bootstrap

**Agente (UI-PIXEL-AGENT) responde automaticamente:**

```
✅ BOOTSTRAP CONCLUÍDO | memory-bank.json
IDs indexados: AT_AVATAR_ID, AT_BUTTON_ID, AT_HEADING_ID, AT_ICON_ID, AT_PARAGRAPH_ID, MOL_CARD_ID, ORG_HEADER_ID, ORG_HERO_ID, ORG_FOOTER_ID, HOME_ID, ATOMIC_DESIGN_RULES_ID, DESIGN_TOKENS_ID, GLOBAL_RULES_ID
Fonte única de verdade: memory-bank.json ✓
Sem conhecimento externo ✓
Aguardando comando...
```

✅ **Agora você pode começar a gerar componentes**

---

## 🎯 PASSO 3: Solicitar Primeiro Componente (ATOM)

**Você digita:**
```
gere AT_BUTTON_ID
```

**Agente responde (CORRETO):**
```
✅ AT_BUTTON_ID | v1.0

<button className="w-full h-12 rounded-lg border-none bg-white text-gray-500 whitespace-nowrap">
  Label
</button>
```

✅ **Perfeito! Copia para v0 e renderiza sem ajustes**

---

## 🎯 PASSO 4: Solicitar Segundo Componente (ATOM)

**Você digita:**
```
gere AT_HEADING_ID
```

**Agente responde (CORRETO):**
```
✅ AT_HEADING_ID | v1.0

<h2 className="text-white text-xl">
  apaixonado por criação de interfaces inovadoras
</h2>
```

✅ **Renderiza perfeitamente no v0**

---

## 🎯 PASSO 5: Solicitar Molecule

**Você digita:**
```
gere MOL_CARD_ID
```

**Agente responde (CORRETO):**
```
✅ MOL_CARD_ID | v1.0

<div className="w-[352px] h-auto flex flex-col gap-2 bg-gray-900 opacity-50 rounded-md border-2 border-gray-500 p-2">
  <h2 className="text-white text-xl">Card Pixel-Perfect</h2>
  <p className="text-primary-600 text-sm">
    Este Card foi gerado através de prompt com técnicas RAG e estratégias avançadas, Atomic Design, Orientação a Objetos e Arquitetura.
  </p>
  <button className="w-full h-12 rounded-lg border-none bg-white text-gray-500 whitespace-nowrap">
    Gostou ?
  </button>
</div>
```

✅ **Card renderiza com todos os filhos (AT_HEADING_ID, AT_PARAGRAPH_ID, AT_BUTTON_ID)**

---

## 🎯 PASSO 6: Solicitar Organism (HERO)

**Você digita:**
```
gere ORG_HERO_ID
```

**Agente responde (CORRETO - apenas o Hero, SEM Header/Footer):**
```
✅ ORG_HERO_ID | v1.0

<section className="w-full min-h-[calc(100vh-140px)] flex flex-col md:justify-center items-center bg-gray-900 py-16">
  <div className="w-full max-w-[700px] flex flex-col gap-8 text-center">

    {/* Avatar + identificação */}
    <div className="flex flex-column items-center gap-3">
      <div className="bg-gray-500 flex justify-center items-center rounded-full border-[4px] select-none border-white border-solid overflow-hidden size-[92px]">
        <img src="https://uifaces.co/our-content/donated/n4Ngwvi7.jpg" alt="Avatar" className="object-cover h-full w-full" />
      </div>
      <p className="text-xs text-white">&lt;MatheusGomesDev /&gt;</p>
    </div>

    {/* Headings */}
    <div>
      <h1 className="text-primary-600 text-5xl font-semibold">Programador Frontend</h1>
      <h2 className="text-white text-5xl">apaixonado por criação de interfaces inovadoras</h2>
    </div>

    {/* Parágrafo */}
    <p className="text-gray-50 text-xl">
      Visite meu perfil no Linkedin e explore meus projetos no GitHub para descobrir como minhas habilidades podem agregar valor á sua equipe.
    </p>

    {/* CTA link */}
    <button className="w-full h-12 rounded-lg border-none bg-transparent text-primary-600 whitespace-nowrap">
      Vamos criar algo incrível juntos?
    </button>

    {/* CTAs duplos */}
    <div className="flex">
      <button className="w-full h-12 rounded-lg border-none bg-transparent text-gray-500 whitespace-nowrap">
        Download CV
      </button>
      <button className="w-full h-12 rounded-lg border-none bg-gradient-primary text-white whitespace-nowrap">
        Entre em Contato
      </button>
    </div>

  </div>
</section>
```

✅ **Apenas `<section>` — nada de Header ou Footer incluído!**

---

## ❌ PASSO 7: Alucinação Detectada

**Você solicita o Header:**
```
gere ORG_HEADER_ID
```

**Agente **ALUCINA** (INCORRETO - incluiu itens extras):**
```
✅ ORG_HEADER_ID | v1.0

<header className="w-full h-[80px] flex justify-end items-end bg-gray-900 px-5">
  <button className="w-max h-12 rounded-lg border-none bg-transparent text-gray-500 whitespace-nowrap">
    <SunIcon className="size-5 rounded-full text-white" />
  </button>
</header>
<section className="w-full min-h-[calc(100vh-140px)] flex flex-col md:justify-center items-center bg-gray-900 py-16">
  <!-- Conteúdo do hero aqui -->
</section>
<footer className="w-full h-[60px] flex justify-between items-center bg-gray-900 p-4">
  <!-- Footer aqui -->
</footer>
```

❌ **VIOLAÇÃO! Header + Hero + Footer quando só Header foi solicitado**

**Você responde:**
```
[RESET]
```

**Agente responde:**
```
✅ BOOTSTRAP CONCLUÍDO | memory-bank.json
IDs indexados: AT_AVATAR_ID, AT_BUTTON_ID, ...
Aguardando comando...
```

**Você tenta novamente (com reforço):**
```
somente ORG_HEADER_ID, sem hero ou footer
```

**Agente responde (CORRETO):**
```
✅ ORG_HEADER_ID | v1.0

<header className="w-full h-[80px] flex justify-end items-end bg-gray-900 px-5">
  <button className="w-max h-12 rounded-lg border-none bg-transparent text-gray-500 whitespace-nowrap">
    <SunIcon className="size-5 rounded-full text-white" />
  </button>
</header>
```

✅ **Agora correto! Apenas o Header.**

---

## 🎯 PASSO 8: Usar o Menu

**Você digita:**
```
[1]
```

**Agente responde com o menu:**
```
🕹️ Menu de Operações

- [1] Gerar componente por ID (ATOM / MOLECULE / ORGANISM / PAGE)
- [2] Listar todos os IDs indexados e suas dependências
- [3] Carregar novo contexto (novo JSON repomix)
- [4] Reset completo de contexto
- [5] Voltar ao menu
- [6] Sair

Selecione uma opção...
```

**Você digita:**
```
[2]
```

**Agente responde:**
```
📋 IDs Indexados e Dependências:

ATOMS:
  - AT_AVATAR_ID (deps: [])
  - AT_BUTTON_ID (deps: [], variants: ["default", "primary", "link"])
  - AT_HEADING_ID (deps: [], variants: ["gradient"])
  - AT_ICON_ID (deps: [])
  - AT_PARAGRAPH_ID (deps: [])

MOLECULES:
  - MOL_CARD_ID (deps: [AT_HEADING_ID, AT_PARAGRAPH_ID, AT_BUTTON_ID])

ORGANISMS:
  - ORG_HEADER_ID (deps: [AT_BUTTON_ID, AT_ICON_ID])
  - ORG_HERO_ID (deps: [AT_AVATAR_ID, AT_HEADING_ID, AT_PARAGRAPH_ID, AT_BUTTON_ID])
  - ORG_FOOTER_ID (deps: [AT_PARAGRAPH_ID, AT_ICON_ID])

PAGES:
  - HOME_ID (deps: [ORG_HEADER_ID, ORG_HERO_ID, ORG_FOOTER_ID])

RULES:
  - GLOBAL_RULES_ID
  - DESIGN_TOKENS_ID
  - ATOMIC_DESIGN_RULES_ID
```

---

## 🎯 PASSO 9: Gerar Página Completa

**Você digita:**
```
gere HOME_ID
```

**Agente responde (CORRETO - página com 3 organismos como children):**
```
✅ HOME_ID | v1.0

<div className="w-full max-w-7xl mx-auto flex flex-col bg-gray-900 min-h-screen px-4">
  <header className="w-full h-[80px] flex justify-end items-end bg-gray-900 px-5">
    <button className="w-max h-12 rounded-lg border-none bg-transparent text-gray-500 whitespace-nowrap">
      <SunIcon className="size-5 rounded-full text-white" />
    </button>
  </header>
  
  <section className="w-full min-h-[calc(100vh-140px)] flex flex-col md:justify-center items-center bg-gray-900 py-16">
    <div className="w-full max-w-[700px] flex flex-col gap-8 text-center">
      {/* Heroes children aqui */}
    </div>
  </section>
  
  <footer className="w-full h-[60px] flex justify-between items-center bg-gray-900 p-4">
    <p className="text-xs text-white">
      © {new Date().getFullYear()} matheusgomesdev.
    </p>
    <SunIcon className="size-5 rounded-full text-white w-max" />
  </footer>
</div>
```

✅ **Página completa: Header + Hero + Footer como children, dentro de uma `<div>` page-level**

---

## 📊 Resultado Final: Componentes Gerados vs. v0

| ID | Tipo | Gerado? | Renderiza v0? | Uso |
|---|---|---|---|---|
| AT_BUTTON_ID | ATOM | ✅ | ✅ | CTA, formulários |
| AT_HEADING_ID | ATOM | ✅ | ✅ | Títulos |
| AT_PARAGRAPH_ID | ATOM | ✅ | ✅ | Textos |
| AT_AVATAR_ID | ATOM | ✅ | ✅ | Perfis |
| AT_ICON_ID | ATOM | ✅ | ✅ | Ícones |
| MOL_CARD_ID | MOLECULE | ✅ | ✅ | Cards reutilizáveis |
| ORG_HEADER_ID | ORGANISM | ✅ | ✅ | Header páginas |
| ORG_HERO_ID | ORGANISM | ✅ | ✅ | Hero sections |
| ORG_FOOTER_ID | ORGANISM | ✅ | ✅ | Footer páginas |
| HOME_ID | PAGE | ✅ | ✅ | Página completa |

---

## 🎯 Fluxo Recomendado para Novatos

```
1. Cola memory-bank.json
2. Awaita ✅ BOOTSTRAP CONCLUÍDO
3. [2] → Lista todos os IDs (para explorar)
4. gere AT_BUTTON_ID
5. gere AT_HEADING_ID
6. gere MOL_CARD_ID
7. gere ORG_HERO_ID
8. gere HOME_ID
9. Cole tudo no v0 e combine
```

**Tempo total:** ~5 min para 10 componentes prontos

---

## ⚠️ Checklist Pós-Geração

Antes de colar no v0, valide:

- [ ] Cada resposta começava com `✅ [ID] | v[version]`?
- [ ] Cada resposta tinha APENAS 1 elemento raiz?
- [ ] Nenhuma narrativa, wrapper ou contexto extra?
- [ ] Todos os `className` usam tokens do design-tokens?
- [ ] Não há valores hex diretos (`#fff`, `#000`)?
- [ ] Se alucinação foi detectada, usou [RESET]?

✅ **Se tudo passou, copia e cola direto no v0 — funcionará 100%**
