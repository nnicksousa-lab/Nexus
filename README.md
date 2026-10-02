# Nexus — Conexões que Transformam

Projeto front-end educacional de uma organização do terceiro setor, com SPA em JavaScript puro.

## Recursos
- SPA com roteamento por hash e manipulação do DOM
- HTML semântico e navegação responsiva
- CSS responsivo com Flexbox/Grid e estados de foco
- Formulário de voluntariado com validação visual
- `localStorage` para persistência local dos cadastros
- Modal, toast, badges e alertas
- JavaScript modular com ES Modules
- Build/minificação com Vite

## Estrutura
- `index.html`: documento principal
- `css/styles.css`: estilos e responsividade
- `js/main.js`: inicialização e roteamento
- `js/modules/templates.js`: templates das páginas e cards
- `js/modules/forms.js`: eventos e validação
- `js/modules/storage.js`: Web Storage
- `js/modules/ui.js`: modal e toast

## Instalação
Requer Node.js.

```bash
npm install
npm run dev
```

Build de produção:
```bash
npm run build
npm run preview
```

O Vite gera a versão de produção em `dist/`.

## Versionamento
Fluxo sugerido: `main` para versões estáveis, `develop` para integração e `feature/*` para funcionalidades. Commits seguem o padrão Conventional Commits, por exemplo `feat: add volunteer form`.

## Deploy
Na Vercel, importe o repositório, selecione Vite, use `npm run build` e diretório de saída `dist`.
