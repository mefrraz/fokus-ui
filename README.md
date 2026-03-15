# FOKUS UI - Plataforma de Cursos Online

Interface de uma loja de cursos online premium, ainda em desenvolvimento.

## Tecnologias

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Backend**: Express.js
- **ORM**: Drizzle ORM (PostgreSQL)

## Páginas

- `/` - Home
- `/catalog` - Catálogo de cursos
- `/course/:id` - Detalhes do curso
- `/checkout` - Checkout
- `/contact` - Contacto
- `/faq` - Perguntas frequentes
- `/how-it-works` - Como funciona
- `/methodology` - Metodologia
- `/student-area` - Área do aluno

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
# Windows
set NODE_ENV=development && node node_modules/tsx/dist/cli.mjs server/index.ts

# Linux/Mac
npm run dev
```

## Build

```bash
npm run build
```

## Deploy no Vercel

Este projeto está configurado para deploy no Vercel. Basta conectar o repositório GitHub ao Vercel.

https://fokus-ui.vercel.app/

## Estado do Projeto

Em desenvolvimento - interface de loja não finalizada.

---

Desenvolvido com React + Express + Vite