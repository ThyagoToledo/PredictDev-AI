# 📊 PredictDev AI - Sistema Inteligente de Gestão de Projetos

> Uma plataforma moderna de gestão de projetos com **previsões de IA**, detecção de bugs em tempo real e análise inteligente de riscos para equipes de desenvolvimento.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Python](https://img.shields.io/badge/Python-3.8+-blue?logo=python)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript)
![React](https://img.shields.io/badge/React-18+-blue?logo=react)

---

## 🎯 Visão Geral

**PredictDev AI** é uma solução inteligente que combina:
- 🤖 **IA Generativa** (Google Gemini) para análises avançadas
- 📈 **Dashboard Analítico** com gráficos e métricas em tempo real
- 🐛 **Detecção Automática de Bugs** com padrões de código
- ⚠️ **Previsão de Riscos** e atrasos em projetos
- 👥 **Gestão de Equipe** com distribuição de tarefas
- 📄 **Manipulação Avançada de PDFs** com IA integrada

---

## ✨ Funcionalidades Principais

### 🏠 Dashboard
- Visão geral dos projetos em tempo real
- Gráficos de progresso vs. previsão vs. prazo
- Alertas contínuos da IA com sugestões automáticas
- Métricas de risco do projeto
- Status de carga de trabalho da equipe

### 📁 Gerenciamento de Projetos
- Criar e gerenciar múltiplos projetos
- Visualizar progresso com barras percentuais
- Categorizar risco (Baixo/Médio/Alto)
- Definir deadlines e acompanhar tarefas
- Visualizar membros da equipe por projeto

### 🔮 Previsões da IA
- Predições automáticas de atrasos
- Análise de complexidade de tarefas
- Sugestões de redistribuição de equipe
- Indicadores de confiança (0-100%)
- Identificação de bloqueadores

### 🐛 Detecção de Bugs
- Análise de padrões de código suspeitos
- Classificação de severidade (Critical/High/Medium/Low)
- Probabilidade de ocorrência
- Localização exata (arquivo, linha, projeto)
- Sugestões de correção automáticas

### 👥 Gestão de Equipe
- Visualizar perfis da equipe
- Monitorar distribuição de tarefas
- Alertas de sobrecarga de trabalho
- Habilidades e especialidades
- Histórico de desempenho

### ⚙️ Configurações & Integrações
- Configuração de API Key (Google Gemini)
- Preferências de notificações
- Tema escuro/claro 🌙☀️
- Perfil and account settings
- Integração com PDF Genius

### 📄 Manipulação de PDFs (Integrado)
- Upload seguro de PDFs
- Visualização com paginação
- Extração de texto inteligente
- Extração de imagens
- Compressão otimizada
- Encriptação/Desencriptação
- Marca d'água customizável
- Chat com IA sobre conteúdo do PDF
- Resumo automático com Gemini
- Extração de key points
- Split/divisão de PDFs

---

## 🛠️ Stack Tecnológico

### Frontend
```
React 18+ + TypeScript
Vite (Build tool)
Tailwind CSS (Styling)
Framer Motion (Animações)
Recharts (Gráficos)
Lucide React (Ícones)
React Router v7 (Navegação)
shadcn/ui (Componentes UI)
```

### Backend
```
Flask 3.0+ (Python 3.8+)
Google Gemini AI (IA Generativa)
PyMuPDF/fitz (Manipulação PDF)
PikePDF (Compressão/Encriptação)
ReportLab (Marca d'água)
Pillow (Processamento de imagem)
```

---

## 📋 Funcionalidades Faltantes para Completude

### 🔴 Prioridade Alta (MVP)
- [ ] **Tema Escuro/Claro** - Implementar toggle com persistência
- [ ] **Autenticação Real** - OAuth2 (GitHub, Google)
- [ ] **Banco de Dados** - Persistência de projetos (PostgreSQL/MongoDB)
- [ ] **WebSocket** - Atualizações em tempo real
- [ ] **Página de Modal de Projeto** - Detalhes expandidos do projeto

### 🟠 Prioridade Média
- [ ] **Integração Slack** - Notificações
- [ ] **Relatórios PDF** - Exportar análises como PDF
- [ ] **Gráficos Avançados** - Burndown chart, velocity tracking
- [ ] **Busca e Filtros** - Busca global de projetos
- [ ] **Responsividade Mobile** - Otimizar para celulares
- [ ] **Histórico de Alterações** - Timeline de mudanças

### 🟡 Prioridade Baixa (Nice-to-have)
- [ ] **Analytics Avançado** - Previsões de tendências
- [ ] **Share de Projetos** - Links públicos compartilháveis
- [ ] **Integração GitHub** - Sync com repositórios
- [ ] **Multidioma** - i18n (PT-BR, EN, ES)
- [ ] **Modo Offline** - PWA support

---

## 🎨 Melhorias de UI/UX Propostas

### 1. **Tema Escuro/Claro** 🌙☀️
#### Implementação:
```typescript
// Adicionar ao contexto global
interface ThemeContext {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Cores recomendadas:
Light Mode:
- Fundo: #FFFFFF
- Primário: #4F46E5
- Secundário: #06B6D4
- Texto: #1F2937

Dark Mode (atual):
- Fundo: #030303
- Primário: #4F46E5
- Secundário: #06B6D4
- Texto: #E5E7EB
```

### 2. **Animações Aprimoradas** ✨
Adicionar ao projeto:
- [ ] Transições suaves de página (page transitions)
- [ ] Skeleton loaders para dados carregando
- [ ] Toast notifications animadas
- [ ] Hover effects em cards
- [ ] Blur backgrounds em modals
- [ ] Confetti animation ao completar projeto
- [ ] Bounce animation em números que atualizam

### 3. **Imagens & Ícones** 🖼️
Implementar:
- [ ] Logo profissional com favicon
- [ ] Ilustrações para empty states
- [ ] Screenshots dos recursos
- [ ] Avatares dos membros
- [ ] Gradientes de fundo dinâmicos
- [ ] Ícones customizados para tipos de bug

### 4. **Componentes Faltando**
- [ ] Modal de criação de projeto
- [ ] Modal de edição de tarefas
- [ ] Sidebar expansível
- [ ] Notificação toast
- [ ] Loading spinner
- [ ] Empty state screens
- [ ] 404 page
- [ ] Error boundary

### 5. **Design System Melhorias**
- [ ] Documentação de componentes (Storybook)
- [ ] Guia de cores e tipografia
- [ ] Espaçamento consistente (design tokens)
- [ ] Acessibilidade (WCAG 2.1 AA)
- [ ] Tipografia melhorada

---

## 🎯 Instruções para Figma

### Preparação do Arquivo Figma

#### **Passo 1: Setup Inicial**
1. Criar novo arquivo: "PredictDev AI - Design System"
2. Páginas do arquivo:
   - 📋 Overview
   - 🎨 Color Palette
   - 🔤 Typography
   - 🧩 Components Library
   - 📱 Layouts (Desktop + Mobile)
   - 🖼️ Mockups

#### **Passo 2: Define Color Palette**
```
Cores Primárias:
- Indigo-600: #4F46E5 (Principal)
- Cyan-500: #06B6D4 (Secundário)

Cores Neutras:
- Zinc-950: #09090B (Fundo escuro)
- Zinc-900: #18181B
- Zinc-800: #27272A
- Zinc-700: #3F3F46
- Zinc-400: #A1A1AA (Cinza claro)
- Zinc-300: #D4D4D8
- Zinc-100: #F4F4F5
- White: #FFFFFF

Cores Funcionais:
- Success: #10B981
- Warning: #F59E0B
- Error: #EF4444
- Info: #3B82F6
```

#### **Passo 3: Create Typography Scale**
```
Display:
- Font: Inter Bold, 48px, line-height 1.2

Heading 1:
- Font: Inter Bold, 36px, line-height 1.3

Heading 2:
- Font: Inter Semibold, 28px, line-height 1.3

Body:
- Font: Inter Regular, 16px, line-height 1.5

Small:
- Font: Inter Regular, 14px, line-height 1.4

Caption:
- Font: Inter Regular, 12px, line-height 1.3
```

#### **Passo 4: Component Library**
Criar componentes principais:
1. **Buttons**
   - Primary (filled)
   - Secondary (outline)
   - Tertiary (ghost)
   - Sizes: sm, md, lg
   - States: default, hover, active, disabled

2. **Cards**
   - Standard card
   - Project card
   - Bug card
   - Metric card

3. **Forms**
   - Input field
   - Select dropdown
   - Checkbox
   - Radio button
   - Toggle switch
   - Text area

4. **Navigation**
   - Top navbar
   - Sidebar menu
   - Breadcrumb
   - Tabs

5. **Data Display**
   - Table
   - Badge
   - Progress bar
   - Chart container
   - Alert/Alert-dialog

6. **Overlays**
   - Modal/Dialog
   - Popover
   - Dropdown menu
   - Toast notification

#### **Passo 5: Layout Screens**
Criar mockups para:
- [ ] Login page
- [ ] Dashboard (completo)
- [ ] Projetos list
- [ ] Projeto detail modal
- [ ] Previsões page
- [ ] Bugs page
- [ ] Equipe page
- [ ] Configurações page
- [ ] Mobile responsive (320px, 768px, 1024px)

#### **Passo 6: Design Tokens Export**
```json
{
  "colors": {
    "primary": "#4F46E5",
    "secondary": "#06B6D4",
    "background": "#030303"
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px"
  },
  "borderRadius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px",
    "xl": "16px",
    "full": "9999px"
  },
  "shadows": {
    "sm": "0 1px 2px rgba(0,0,0,0.1)",
    "md": "0 4px 6px rgba(0,0,0,0.1)",
    "lg": "0 10px 15px rgba(0,0,0,0.1)"
  }
}
```

---

## 🎬 Animações Recomendadas

### Transições de Página
```tsx
// Usar Framer Motion
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo
</motion.div>
```

### Loader Animado
```tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
>
  ⚡
</motion.div>
```

### Skeleton Loading
```tsx
<motion.div
  animate={{ 
    backgroundColor: ["#f3f4f6", "#e5e7eb", "#f3f4f6"]
  }}
  transition={{ duration: 1.5, repeat: Infinity }}
  className="h-4 w-full rounded"
/>
```

### Card Hover Effect
```tsx
<motion.div
  whileHover={{ 
    scale: 1.02,
    boxShadow: "0 10px 40px rgba(79, 70, 229, 0.2)"
  }}
  whileTap={{ scale: 0.98 }}
>
  Conteúdo do Card
</motion.div>
```

---

## 📸 Assets & Recursos Visuais Necessários

### Illustrations (recomendado Figma + assets externos)
- [ ] Empty state (nenhum projeto)
- [ ] No data illustration
- [ ] Error 404 page
- [ ] Loading illustration
- [ ] Success illustration

### Fontes (importar no Figma)
- **Inter** - Typography principal (gratuita no Google Fonts)
- **Monaspace** - Código/monospace (alternativa)

### Recursos Online
- **Unsplash/Pexels** - Para backgrounds
- **Heroicons/Lucide** - Ícones (já integrado)
- **Phosphor Icons** - Alternativa de ícones

---

## 🚀 Próximos Passos

### Fase 1: Design (Semana 1)
- [ ] Finalizar design system no Figma
- [ ] Criar mockups de todas as telas
- [ ] Definir micro-interactions
- [ ] Review com stakeholders

### Fase 2: Implementação Frontend (Semana 2-3)
- [ ] Implementar tema dark/light
- [ ] Criar modais faltando
- [ ] Adicionar animações
- [ ] Melhorar responsividade

### Fase 3: Backend & Dados (Semana 4)
- [ ] Integrar banco de dados
- [ ] Implementar autenticação real
- [ ] Setup WebSocket para updates
- [ ] Testes e QA

### Fase 4: Polish (Semana 5)
- [ ] Otimizações de performance
- [ ] Testes end-to-end
- [ ] Deploy em staging
- [ ] Feedback e ajustes

---

## 🔗 Como Usar Este Projeto

### Instalação

#### Backend
```bash
# Clonar repositório
cd pdf-genius

# Criar venv
python -m venv venv
source venv/Scripts/activate  # Windows: venv\Scripts\activate

# Instalar dependências
pip install -r requirements.txt

# Setup .env
echo "GOOGLE_API_KEY=sua_chave_aqui" > .env

# Rodar servidor
python app.py
# Acessa em http://localhost:5000
```

#### Frontend
```bash
cd "nova interface"

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
# Acessa em http://localhost:5173
```

### Variáveis de Ambiente
```env
# Backend (.env)
GOOGLE_API_KEY=seu_api_key_google_gemini
FLASK_ENV=development
FLASK_PORT=5000

# Frontend (.env)
VITE_API_URL=http://localhost:5000
```

---

## 📊 Estrutura de Dados Esperada

### Projeto
```json
{
  "id": "uuid",
  "name": "App Mobile",
  "progress": 60,
  "risk": "Médio",
  "deadline": "2026-03-15",
  "tasks": 24,
  "completedTasks": 14,
  "team": 4,
  "members": ["user_id_1", "user_id_2"],
  "createdAt": "2026-03-01"
}
```

### Bug Detectado
```json
{
  "id": "uuid",
  "type": "Memory Leak",
  "probability": 85,
  "file": "auth_service.js",
  "line": 142,
  "description": "Possível vazamento de memória...",
  "severity": "critical",
  "detectedAt": "2026-03-12",
  "project_id": "uuid"
}
```

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch `feature/sua-feature` (git checkout -b feature/AmazingFeature)
3. Commit suas mudanças (git commit -m 'Add some AmazingFeature')
4. Push para a branch (git push origin feature/AmazingFeature)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Autor

**Seu Nome / Seu Time**
- 💼 [LinkedIn](https://linkedin.com)
- 🐙 [GitHub](https://github.com)
- 🔗 [Website](https://seu-site.com)

---

## 🆘 Suporte

Encontrou um bug ou tem uma sugestão?
- 📧 Email: support@predictdev.ai
- 💬 Discord: [Servidor Discord]
- 📄 Issues: [GitHub Issues](https://github.com/seu-repo/issues)

---

<div align="center">

### ⭐ Se esse projeto foi útil, deixe uma estrela no GitHub!

**PredictDev AI** © 2026 - Desenvolvido com ❤️ para equipes de desenvolvimento

</div>

---

## 📚 Referências & Recursos

- [Google Gemini API Docs](https://ai.google.dev/)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
