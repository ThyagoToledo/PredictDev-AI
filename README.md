<div align="center">

# PredictDev AI

**Plataforma de Inteligência Preditiva para Gestão de Projetos de Software**

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[![Licença: MIT](https://img.shields.io/badge/Licen%C3%A7a-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-obrigatório-CB3837?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/)

</div>

---

## Índice

- [Visão Geral](#visão-geral)
- [Stack Tecnológico](#stack-tecnológico)
- [Funcionalidades](#funcionalidades)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
  - [Estrutura de Diretórios](#estrutura-de-diretórios)
  - [Estrutura de Rotas](#estrutura-de-rotas)
  - [Arquitetura de Componentes](#arquitetura-de-componentes)
  - [Gerenciamento de Estado](#gerenciamento-de-estado)
  - [Sistema de Design](#sistema-de-design)
- [Páginas e Módulos](#páginas-e-módulos)
- [Integração com IA](#integração-com-ia)
- [Primeiros Passos](#primeiros-passos)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Variáveis de Ambiente](#variáveis-de-ambiente)
  - [Executando o Servidor de Desenvolvimento](#executando-o-servidor-de-desenvolvimento)
  - [Build para Produção](#build-para-produção)
- [Deploy](#deploy)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## Visão Geral

**PredictDev AI** é um dashboard SaaS para gestão de projetos de software alimentado por inteligência artificial preditiva. A plataforma fornece análise de risco em tempo real, previsão de entregas, predição de bugs e otimização de carga de trabalho da equipe — todos impulsionados pelo Google Gemini 2.5 Flash integrado nativamente na interface.

O sistema combina um frontend React 18 moderno com Tailwind CSS v4, apresentando um sistema de design dark-first com glassmorphism, animações fluidas via Framer Motion (Motion.dev) e um assistente de IA flutuante disponível em todas as páginas.

**Proposições de valor principais:**

- Prever atrasos em projetos e prazos de entrega antes que aconteçam
- Detectar padrões de bugs e áreas de código de alto risco de forma proativa
- Monitorar carga de trabalho da equipe e gerar recomendações de redistribuição
- Interagir diretamente com um assistente Gemini incorporado para consultas contextuais sobre projetos

---

## Stack Tecnológico

| Camada | Tecnologia | Versão |
|--------|-----------|---------|
| **Linguagem** | TypeScript | 5.x |
| **Framework de UI** | React | 18.3.1 |
| **Ferramenta de Build** | Vite | 6.3.5 |
| **Estilização** | Tailwind CSS | 4.1.12 |
| **Roteamento** | React Router | 7.13.0 |
| **Biblioteca de Componentes** | Radix UI Primitives | Múltiplas |
| **Ícones** | Lucide React | 0.487.0 |
| **Gráficos** | Recharts | 2.15.2 |
| **Animações** | Motion (Framer Motion) | 12.23.24 |
| **Modelo de IA** | Google Gemini 2.5 Flash | API v1beta |
| **Tema** | next-themes | 0.4.6 |
| **Notificações** | Sonner | 2.0.3 |
| **Formulários** | React Hook Form | 7.55.0 |
| **Utilitários de Data** | date-fns | 3.6.0 |
| **Deploy** | Vercel | — |

---

## Funcionalidades

### Dashboard de Inteligência de Projetos
- Rastreamento de progresso em tempo real versus prazos planejados
- Pontuação de risco gerada por IA (Baixo / Médio / Alto) com percentual de probabilidade
- Previsão de data de entrega baseada em velocidade histórica
- Taxa de conclusão de tarefas em todos os projetos ativos

### Análise Preditiva de Bugs
- Visualização de tendência de bugs nos últimos 6 meses
- Identificação e categorização de bugs de alta prioridade
- Reconhecimento de padrões para tipos de defeitos recorrentes
- Estratégias de resolução sugeridas geradas por IA

### Engine de Alertas de IA
- Avisos proativos para membros da equipe sobrecarregados
- Detecção de tarefas subestimadas e risco de scope creep
- Identificação de padrões de memory leak e anti-patterns arquiteturais
- Sugestões práticas renderizadas diretamente no dashboard

### Gerenciamento de Equipe
- Visão geral de carga de trabalho de desenvolvedores e planejamento de capacidade
- Mapeamento de habilidades e recomendações de atribuição de tarefas
- Indicadores de saúde de sprint

### Configurações
- Perfil de usuário persistente (nome, cargo, empresa) armazenado via localStorage
- Gerenciamento chave de API do Gemini com validação de conexão em tempo real
- Toggle de tema claro/escuro com suporte a preferência de sistema
- Seleção de modelo de IA

### Assistente de Chat Gemini Flutuante
- Disponível em todas as páginas através de um botão flutuante persistente
- Integração direta com a API do Google Gemini 2.5 Flash
- Assistente de gestão de projetos contextual
- Suporta chave de API definida pelo usuário na página de Configurações

---

## Arquitetura do Projeto

### Estrutura de Diretórios

```
PredictDev-AI-main/
├── src/
│   ├── main.tsx                    # Ponto de entrada da aplicação
│   ├── app/
│   │   ├── App.tsx                 # Componente raiz com ThemeProvider e RouterProvider
│   │   ├── routes.tsx              # Definições de rotas centralizadas
│   │   ├── components/
│   │   │   ├── layout.tsx          # Shell principal: sidebar, topbar, outlet
│   │   │   ├── login.tsx           # Página de autenticação
│   │   │   ├── dashboard.tsx       # Visão geral com métricas, gráficos, alertas de IA
│   │   │   ├── projetos.tsx        # Listagem e gerenciamento de projetos
│   │   │   ├── previsoes.tsx       # Módulo de previsão de entrega por IA
│   │   │   ├── bugs.tsx            # Rastreamento e predição de bugs
│   │   │   ├── equipe.tsx          # Visualização de gerenciamento de equipe
│   │   │   ├── configuracoes.tsx   # Página de configurações
│   │   │   ├── AiChat.tsx          # Widget flutuante de chat de IA (Gemini)
│   │   │   ├── PageTransition.tsx  # Wrapper de página animada compartilhada
│   │   │   ├── modals/             # Componentes de diálogo e modal
│   │   │   ├── figma/              # Variantes de componentes geradas do Figma
│   │   │   └── ui/                 # Componentes primitivos shadcn/ui (49 arquivos)
│   │   ├── context/
│   │   │   └── ThemeContext.tsx    # Estado de tema global (claro/escuro)
│   │   └── hooks/
│   │       └── useLocalStorage.ts  # Hook para persistência de localStorage
│   ├── styles/
│   │   ├── index.css               # Resets CSS globais e estilos base
│   │   ├── theme.css               # Propriedades CSS customizadas para tokens claro/escuro
│   │   ├── tailwind.css            # Diretivas do Tailwind
│   │   └── fonts.css               # Importação do Google Fonts (Inter)
│   └── imports/                    # Documentação interna e guias
│       ├── README.md               # Documentação completa de features e design
│       ├── FIGMA_GUIDE.md          # Referência do sistema de design do Figma
│       ├── IMPLEMENTATION_GUIDE.md # Guia de implementação de componentes
│       ├── VISUAL_GUIDE.md         # Diretrizes de design visual
│       └── RESUMO_EXECUTIVO.md     # Resumo executivo do projeto
├── index.html                      # Ponto de entrada HTML
├── vite.config.ts                  # Configuração Vite + Tailwind + plugin React
├── postcss.config.mjs              # Configuração PostCSS
├── package.json                    # Dependências e scripts
├── vercel.json                     # Regras de reescrita SPA do Vercel
├── .env.example                    # Template de variáveis de ambiente
├── .gitignore                      # Regras de git ignore
└── iniciar_site.bat                # Script batch do Windows para inicialização local
```

### Estrutura de Rotas

Todas as rotas são definidas em `src/app/routes.tsx` usando React Router 7. O caminho raiz redireciona para `/login`. Páginas autenticadas são renderizadas dentro do componente `Layout` via roteamento aninhado.

```
/                    → redireciona para /login
/login               → Login (não autenticado)
/                    → Layout (shell sidebar + topbar)
  /dashboard         → Dashboard
  /projetos          → Projetos
  /previsoes         → Previsões de IA
  /bugs              → Predição de Bugs
  /equipe            → Gerenciamento de Equipe
  /configuracoes     → Configurações
```

### Arquitetura de Componentes

A aplicação segue uma estrutura de componentes baseada em features:

- **Layout** (`layout.tsx`): O shell persistente renderizado para todas as rotas autenticadas. Contém sidebar desktop, sidebar overlay mobile, barra de navegação superior, toggle de tema, avatar de usuário, botão de notificação e o widget flutuante `AiChat`.

- **Componentes de Página**: Cada rota mapeia para um componente de página autônomo (`dashboard.tsx`, `projetos.tsx`, etc.) envolvido em `PageTransition` para entrada/saída animada.

- **Primitivos de UI** (`components/ui/`): Um conjunto completo de 49 componentes headless construídos em Radix UI e estilizados com Tailwind CSS, seguindo o padrão shadcn/ui. Incluem Accordion, AlertDialog, Avatar, Button, Card, Chart, Command, Dialog, Drawer, DropdownMenu, Form, Input, Select, Sidebar, Skeleton, Sonner, Table, Tabs, Tooltip e mais.

- **AiChat** (`AiChat.tsx`): Um widget de chat flutuante autossuficiente que chama diretamente a API Gemini 2.5 Flash. Lê a chave de API do `localStorage` (definida em Configurações) ou volta para a variável de ambiente `VITE_GEMINI_API_KEY`.

### Gerenciamento de Estado

PredictDev AI não usa uma biblioteca externa de gerenciamento de estado. O estado é manipulado através de:

| Mecanismo | Uso |
|-----------|-----|
| `React.useState` | Estado local de componentes (toggles de UI, valores de formulário) |
| Hook `useLocalStorage` | Perfil de usuário persistente, chave de API, preferências |
| `ThemeContext` | Estado global de tema claro/escuro via React Context |
| `next-themes` | Manipulação de classe DOM e detecção de tema de sistema |

### Sistema de Design

O sistema de design é definido através de propriedades CSS customizadas em `src/styles/theme.css` e consumido pelo Tailwind CSS v4.

**Paleta de Cores**

| Token | Modo Escuro | Modo Claro | Uso |
|-------|-------------|-----------|-----|
| Primary | `#4F46E5` (Indigo 600) | `#4F46E5` | Botões, estados ativos, gradientes |
| Secondary | `#06B6D4` (Cyan 500) | `#06B6D4` | Acentos, linhas de gráfico, gradientes |
| Background | `#030303` | `#F8FAFC` | Fundo da página |
| Surface | `rgba(24,24,27,0.5)` | `#FFFFFF` | Cards e painéis |
| Border | `rgba(255,255,255,0.05)` | `rgba(0,0,0,0.08)` | Bordas de componentes |
| Success | `#10B981` | `#10B981` | Indicadores positivos |
| Warning | `#F59E0B` | `#F59E0B` | Alertas de risco |
| Danger | `#EF4444` | `#EF4444` | Erros críticos |

**Tipografia**

- Família de Fonte: `Inter` (Google Fonts)
- Heading H1: `2.25rem / peso 800`
- Heading H2: `1.25rem / peso 700`
- Body: `0.875rem / peso 500`
- Caption: `0.75rem / peso 500`

**Border Radius**

- Cards: `16px`
- Botões e inputs: `12px`
- Badges e avatares: `9999px`

**Animações**

Todas as animações usam `motion` (Framer Motion) com timing consistente:
- Transições de página: fade + slide-up, 500ms ease-out
- Hover em card: `translateY(-3px)` lift com scale `1.02`
- Items da sidebar: fade-in escalonado com delay de 50ms por item
- Indicador ativo: animação spring com `layoutId` (stiffness 380, damping 30)
- Janela de Chat de IA: entrada com scale + opacity de `0.9` para `1`

---

## Páginas e Módulos

### Dashboard (`/dashboard`)

A página central de visão geral. Renderiza quatro cards de métrica KPI (Risco de Projeto, Previsão de Entrega, Bugs Preditos, Conclusão de Tarefas), gráfico de linha com duplo eixo comparando progresso real contra previsão de IA e deadline, gráfico de área de tendência de bugs para os últimos 6 meses e um grid de alertas de IA com codificação de cor baseada em severidade e sugestões práticas.

### Projetos (`/projetos`)

Visualização de listagem de projetos com indicadores de status, atribuição de equipe, barras de progresso e rastreamento de deadline por projeto.

### Previsões de IA (`/previsoes`)

Módulo dedicado para previsões de entrega geradas por IA. Exibe análise de velocidade, estimativas de conclusão de sprint e distribuições de probabilidade de risco.

### Predição de Bugs (`/bugs`)

Rastreamento de bugs aprimorado com análise preditiva. Categoriza bugs por severidade, mostra dados de tendência histórica e expõe previsões baseadas em padrões para defeitos futuros.

### Gerenciamento de Equipe (`/equipe`)

Cards de membros da equipe com carga de trabalho atual, tarefas atribuídas, tags de habilidades e recomendações de redistribuição geradas por IA para desenvolvedores sobrecarregados.

### Configurações (`/configuracoes`)

Configuração de perfil de usuário (nome, cargo, empresa), input de chave de API Gemini com teste de conexão em tempo real, toggle de preferência de tema e seleção de modelo de IA. Todas as configurações são persistidas em `localStorage`.

---

## Integração com IA

PredictDev AI integra-se diretamente com o modelo **Google Gemini 2.5 Flash** via API REST.

**Endpoint:**
```
POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent
```

**Ordem de resolução de Chave de API:**
1. Valor armazenado em `localStorage` chave `saas-apiKey` (configurado pelo usuário via Configurações)
2. Variável de ambiente `VITE_GEMINI_API_KEY` (arquivo `.env`)

**Por que Gemini 2.5 Flash:**
- Suporte multimodal nativo para respostas contextuais rápidas
- Tier gratuito generoso adequado para desenvolvimento e deployment em pequena escala
- Excelente latência para interações de chat em tempo real
- Sem necessidade de proxy backend — chamadas de API são feitas diretamente do navegador

---

## Primeiros Passos

### Pré-requisitos

- **Node.js** 18 ou superior
- **npm** 9 ou superior (ou gerenciador de pacotes compatível)
- Uma **chave de API Google Gemini** — obtenha em [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/PredictDev-AI.git
cd PredictDev-AI

# 2. Instale as dependências
npm install
```

### Variáveis de Ambiente

Copie o arquivo de exemplo de ambiente e preencha as variáveis necessárias:

```bash
cp .env.example .env
```

Abra `.env` e defina sua chave de API Gemini:

```env
# Chave de API Google Gemini
# Obtenha em: https://aistudio.google.com/app/apikey
VITE_GEMINI_API_KEY=sua_chave_api_aqui
```

> A chave de API também pode ser configurada em tempo de execução através da página de Configurações (`/configuracoes`) sem reiniciar a aplicação.

### Executando o Servidor de Desenvolvimento

```bash
npm run dev
```

A aplicação iniciará em `http://localhost:5173` (ou a próxima porta disponível). A flag `--host` está incluída por padrão, tornando o servidor acessível em sua rede local.

### Build para Produção

```bash
npm run build
```

O bundle de produção é exportado para o diretório `dist/`, pronto para hospedagem estática.

---

## Deploy

PredictDev AI é configurado para deploy em **Vercel** com suporte a roteamento SPA client-side.

O arquivo `vercel.json` reescreve todos os caminhos para `index.html`, garantindo que React Router manipule a navegação corretamente:

```json
{
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Passos de deploy:**

1. Faça push do repositório para GitHub, GitLab ou Bitbucket
2. Importe o projeto em [https://vercel.com/new](https://vercel.com/new)
3. Adicione a variável de ambiente `VITE_GEMINI_API_KEY` nas configurações do projeto Vercel
4. Deploy — Vercel detectará automaticamente a configuração Vite

Alternativamente, use a CLI do Vercel:

```bash
npm install -g vercel
vercel --prod
```

---

## Contribuindo

Contribuições são bem-vindas. Por favor, abra uma issue primeiro para discutir o que gostaria de mudar. Certifique-se de que todo novo código segue os padrões de componentes existentes e o sistema de design estabelecido.

1. Faça fork do repositório
2. Crie uma branch de feature (`git checkout -b feature/nome-da-sua-feature`)
3. Faça commit de suas mudanças (`git commit -m 'feat: adicione sua feature'`)
4. Faça push para a branch (`git push origin feature/nome-da-sua-feature`)
5. Abra um Pull Request

---

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).

---

<div align="center">

Construído com React, TypeScript e Google Gemini AI

</div>