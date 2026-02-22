## ⚙️ Setup do Projeto

### 1. Instalar dependências

```bash
npm install @radix-ui/react-icons
```

### 2. Configurar Tailwind CSS v4

No arquivo `globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-primary-500: #9e77ed;
  --color-primary-600: #7f56d9;
  --color-gray-50: #f9fafb;
  --color-gray-500: #667085;
  --color-gray-900: #101828;
  --color-white: #ffffff;
  --color-gradient-primary: linear-gradient(90deg, #7f56d9 0%, #9e77ed 100%);
}
```

> ⚠️ Sem esse bloco, classes como `bg-gradient-primary`, `text-primary-600` e `bg-gray-900` **não renderizam**.

---