<div align="center">

# 💅 JP Studio de Beleza

**Site premium para salão de beleza e estúdio de estética em Maceió, Alagoas**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-D4A5A5)](LICENSE)

[Demo ao Vivo](#) • [Funcionalidades](#-funcionalidades) • [Instalação](#-como-rodar-localmente) • [Estrutura](#-estrutura-do-projeto)

</div>

---

## 📖 Sobre o Projeto

O **JP Studio de Beleza** é um site de presença digital premium desenvolvido para um salão de beleza e estúdio de estética localizado em **Maceió, Alagoas**. Com mais de 15 anos de atuação (desde 2009), o estúdio é especializado em transformações capilares, maquiagem para noivas e design de sobrancelhas.

O site foi projetado seguindo a filosofia **"Luxo Minimalista Contemporâneo"** — priorizando espaço negativo, tipografia serif elegante, animações sutis e fotografia de alta qualidade como elemento principal.

> **Paleta de cores:** Rosa sofisticado `#D4A5A5` · Ouro rosado `#E8B4A8` · Cinza escuro `#2C2C2C`

---

## ✨ Funcionalidades

| Seção | Descrição |
|---|---|
| **Hero** | Imagem full-bleed com animações blur-in escalonadas e CTA de agendamento |
| **Trust Badges** | 4 indicadores de confiança (experiência, produtos premium, noivas, localização) |
| **Bento Grid** | Layout assimétrico com imagem do salão + 3 cards de diferenciais |
| **Grade de Serviços** | Catálogo filtrável com 8 serviços, preços e botão de agendamento em hover |
| **Depoimentos** | Carrossel automático em 3 colunas com rolagem alternada infinita |
| **Banner CTA** | Chamada para ação com 3 propostas de valor (WhatsApp, horários, pagamento) |
| **Newsletter** | Formulário de captura de e-mail com confirmação visual |
| **Rodapé** | Multi-coluna com marca-d'água, redes sociais e links de navegação |

### 🎨 Animações & Interações

- **Blur-in** na entrada das seções ao rolar a página
- **Fade-in-scale** escalonado nos cards (50 ms de intervalo)
- **Auto-scroll vertical** nos depoimentos (pause ao hover)
- **Hover effects** nos cards de serviços com botão sobreposto
- **Tema claro/escuro** via Context API

---

## 🛠️ Stack Tecnológica

**Frontend**
- [React 19](https://react.dev) — framework principal com hooks modernos
- [TypeScript 5.6](https://www.typescriptlang.org) — tipagem estática
- [Vite 7](https://vite.dev) — build tool ultrarrápido
- [Tailwind CSS 4](https://tailwindcss.com) — estilização utility-first
- [shadcn/ui](https://ui.shadcn.com) — componentes acessíveis (Radix UI)
- [Framer Motion 12](https://www.framer-motion.com) — animações declarativas
- [Wouter](https://github.com/molefrog/wouter) — roteamento leve (SPA)

**Formulários & Validação**
- [React Hook Form 7](https://react-hook-form.com)
- [Zod 4](https://zod.dev)

**Servidor**
- [Express 4](https://expressjs.com) — servidor Node.js para produção

**Ferramentas de Desenvolvimento**
- [pnpm 10](https://pnpm.io) — gerenciador de pacotes
- [ESBuild](https://esbuild.github.io) — bundling do servidor
- [Prettier](https://prettier.io) — formatação de código
- [Vitest](https://vitest.dev) — framework de testes

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org) **≥ 20**
- [pnpm](https://pnpm.io) **≥ 10** — `npm install -g pnpm`

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/joseook/jp-studio-beleza.git
cd jp-studio-beleza

# 2. Instale as dependências
pnpm install

# 3. Inicie o servidor de desenvolvimento
pnpm dev
```

O site estará disponível em **http://localhost:3000**.

### Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `pnpm dev` | Inicia o servidor de desenvolvimento (Vite + hot reload) |
| `pnpm build` | Gera build de produção (frontend + servidor Express) |
| `pnpm start` | Executa o servidor em modo produção |
| `pnpm preview` | Visualiza o build de produção localmente |
| `pnpm check` | Verifica tipos TypeScript sem emitir arquivos |
| `pnpm format` | Formata o código com Prettier |

---

## 📁 Estrutura do Projeto

```
jp-studio-beleza/
├── client/
│   └── src/
│       ├── App.tsx              # Roteamento principal (Wouter)
│       ├── main.tsx             # Ponto de entrada React
│       ├── index.css            # Estilos globais, variáveis e keyframes
│       ├── const.ts             # Constantes do cliente
│       ├── contexts/
│       │   └── ThemeContext.tsx # Provider de tema (claro/escuro)
│       ├── hooks/               # Custom hooks (useMobile, useComposition…)
│       ├── lib/
│       │   └── utils.ts         # Funções utilitárias (cn, etc.)
│       ├── pages/
│       │   ├── Home.tsx         # Página principal (landing page)
│       │   └── NotFound.tsx     # Página 404
│       └── components/
│           ├── jp-studio/       # Seções específicas da marca
│           │   ├── Hero.tsx
│           │   ├── TrustBadges.tsx
│           │   ├── BentoGrid.tsx
│           │   ├── ServicesGrid.tsx
│           │   ├── Testimonials.tsx
│           │   ├── CTABanner.tsx
│           │   ├── Newsletter.tsx
│           │   └── Footer.tsx
│           └── ui/              # Componentes shadcn/ui (40+ componentes)
├── server/
│   └── index.ts                 # Servidor Express para produção
├── shared/
│   └── const.ts                 # Constantes compartilhadas
├── vite.config.ts               # Configuração do Vite
├── tsconfig.json                # Configuração TypeScript
├── components.json              # Configuração shadcn/ui
└── package.json
```

---

## 🗺️ Rotas

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `Home` | Landing page completa |
| `/404` | `NotFound` | Página de erro 404 |
| `*` | `NotFound` | Fallback para rotas inválidas |

---

## 🎨 Design System

### Paleta de Cores

| Nome | Hex | Uso |
|---|---|---|
| Rosa Sofisticado | `#D4A5A5` | Cor primária / accent |
| Rosa Vibrante | `#E75480` | Secundária / CTAs |
| Ouro Rosado | `#E8B4A8` | Detalhes e destaques |
| Cinza Escuro | `#2C2C2C` | Texto principal |
| Bege Claro | `#F5F5F0` | Fundos de seções |

### Tipografia

- **Títulos:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (serif elegante)
- **Corpo:** [Inter](https://fonts.google.com/specimen/Inter) (sans-serif legível)

---

## 📦 Build de Produção

```bash
# Gera os artefatos de build
pnpm build

# Estrutura gerada em /dist:
# ├── public/   → assets do frontend (servidos pelo Express)
# └── index.js  → servidor Express compilado
```

O comando `pnpm build` compila o frontend com **Vite** e o servidor com **ESBuild**, gerando uma aplicação Node.js pronta para deploy.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: adiciona minha feature'`)
4. Push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** — veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

Feito com ❤️ por [joseook](https://github.com/joseook)

</div>
