# 🎨 Guia Completo - Implementação de Design no Figma

## 📋 Instruções Específicas para o Figma

### Objetivo
Transformar os mockups estáticos em um sistema de design completo, reutilizável e alinhado com as melhores práticas.

---

## **Seção 1: Setup do Projeto Figma**

### 1.1 Estrutura Recomendada
```
📁 PredictDev AI - Design System
├── 📄 01_Overview & Guidelines
├── 📄 02_Color System
├── 📄 03_Typography & Icons
├── 📄 04_Components Library
├── 📄 05_Layouts - Desktop
├── 📄 06_Layouts - Mobile
├── 📄 07_Interactions & Animations
├── 📄 08_Brand Guidelines
└── 📄 09_Handoff (Dev Specs)
```

### 1.2 Configurações Iniciais
```
Tamanho Canvas: 1920x1080
Escala: 1x (100%)
Grids: 
  - Margins: 24px
  - Columns: 12
  - Gutter: 24px
Pixels: Square grid (8px)
```

---

## **Seção 2: Sistema de Cores**

### 2.1 Palette Principal
Criar frame: "Color Palette - Dark Theme"

```
┌─────────────────────────────────┐
│ PRIMÁRIAS                       │
├─────────────────┬───────────────┤
│ Indigo-600      │ #4F46E5       │
│ Indigo-500      │ #6366F1       │
│ Indigo-400      │ #818CF8       │
│ Indigo-300      │ #A5B4FC       │
├─────────────────┬───────────────┤
│ Cyan-500        │ #06B6D4       │
│ Cyan-400        │ #22D3EE       │
│ Cyan-300        │ #67E8F9       │
├─────────────────┬───────────────┤
│ NEUTRAS (DARK)  │               │
├─────────────────┬───────────────┤
│ Zinc-950        │ #09090B       │
│ Zinc-900        │ #18181B       │
│ Zinc-800        │ #27272A       │
│ Zinc-700        │ #3F3F46       │
│ Zinc-600        │ #52525B       │
│ Zinc-500        │ #71717A       │
│ Zinc-400        │ #A1A1AA       │
│ Zinc-300        │ #D4D4D8       │
├─────────────────┬───────────────┤
│ STATUS          │               │
├─────────────────┬───────────────┤
│ Success         │ #10B981       │
│ Warning         │ #F59E0B       │
│ Danger/Error    │ #EF4444       │
│ Info            │ #3B82F6       │
└─────────────────┴───────────────┘
```

### 2.2 Pallete Light Mode
```
Inverter para:
- Fundo: Zinc-50 (#FAFAFA)
- Texto primário: Zinc-950
- Texto secundário: Zinc-600
- Bordas: Zinc-200
```

### 2.3 Gradientes
Salvar como componentes:
```
Gradient 1 (CTA Button):
- De: #4F46E5 (Indigo-600)
- Para: #06B6D4 (Cyan-500)
- Ângulo: 135°

Gradient 2 (Background):
- De: #4F46E5 (Indigo-600, 10% opacity)
- Para: #06B6D4 (Cyan-500, 5% opacity)
- Ângulo: 45°

Gradient 3 (Glow Effect):
- De: Transparent
- Para: #4F46E5 (Indigo-600, 20% opacity)
```

---

## **Seção 3: Tipografia & Ícones**

### 3.1 Escala Tipográfica
Criar estilos de texto no Figma:

```
┌──────────┬──────────┬─────────┬────────┐
│ Nome     │ Font     │ Size    │ Weight │
├──────────┼──────────┼─────────┼────────┤
│ Display  │ Inter    │ 48px    │ Bold   │
│ H1       │ Inter    │ 36px    │ Bold   │
│ H2       │ Inter    │ 28px    │ Bold   │
│ H3       │ Inter    │ 24px    │ 600    │
│ H4       │ Inter    │ 20px    │ 600    │
│ Body LG  │ Inter    │ 16px    │ 400    │
│ Body     │ Inter    │ 14px    │ 400    │
│ Small    │ Inter    │ 12px    │ 400    │
│ Caption  │ Inter    │ 12px    │ 500    │
└──────────┴──────────┴─────────┴────────┘

Line Heights:
- Display: 120% (57.6px)
- H1: 130% (46.8px)
- H2: 130% (36.4px)
- Body: 150% (24px)
- Small: 140% (16.8px)
```

### 3.2 Ícones
```
Tamanho base: 24x24px
Stroke width: 2px
Arredondar: 2px

Variações:
- Small: 16x16px
- Medium: 24x24px
- Large: 32x32px
- XL: 48x48px
```

---

## **Seção 4: Componentes Principais**

### 4.1 Botões
Estrutura de componentes com variantes:

**Componente: Button**
```
Argumentos:
├── Size: sm | md | lg
├── Variant: primary | secondary | outline | ghost
├── State: default | hover | active | disabled
└── Icon: left | right | none

Estilos para cada combinação:
├── Primary / md / default
│  ├── Background: Gradient (Indigo → Cyan)
│  ├── Text: White
│  ├── Padding: 8px 16px
│  ├── Border Radius: 8px
│  └── Shadow: 0 4px 12px rgba(79,70,229,0.2)
│
├── Primary / md / hover
│  └── Opacity: 90%
│  └── Shadow: 0 6px 16px rgba(79,70,229,0.3)
│
└── Disabled
   └── Opacity: 50%
   └── Cursor: not-allowed
```

### 4.2 Cards
```
Componente: Card
├── Padding: 16px | 20px | 24px
├── Border Radius: 12px
├── Background: Zinc-900 / Zinc-800
├── Border: 1px solid Zinc-800
└── Shadow: 0 4px 6px rgba(0,0,0,0.1)

States:
├── Default
├── Hover (scale 1.02, shadow +)
└── Selected (border: 2px Indigo-600)
```

### 4.3 Inputs & Forms
```
Componente: Input Field
├── Height: 40px
├── Padding: 8px 12px
├── Border: 1px solid Zinc-700
├── Border Radius: 8px
├── Focus: Border Indigo-600, shadow blue

Componente: Select Dropdown
├── Similar ao input
├── Icon dropdown: ChevronDown
└── Menu items com hover state

Componente: Toggle/Checkbox
├── Size: 20x20px
├── Checked: Background Indigo-600
├── Border Radius: 4px
└── Icon: ✓ (branca)

Componente: Toggle Switch
├── Width: 44px
├── Height: 24px
├── Border Radius: 12px (full)
├── Knob: 20x20px, offset 2px
└── States: on (Indigo-600) | off (Zinc-700)
```

### 4.4 Navigation
```
Componente: Sidebar Item
├── Height: 40px
├── Padding: 8px 12px
├── Icon + Label
├── Border Radius: 8px
├── Default: Zinc-700 text
├── Hover: Zinc-300 text, Zinc-800 bg
└── Active: Indigo-600 text, Indigo-500/10 bg

Componente: Nav Badge
├── Height: 20px
├── Padding: 2px 6px
├── Border Radius: 10px
├── Background: Indigo-600
├── Text: 12px, bold, white
└── Position: top-right (offset -4px)
```

### 4.5 Alert/Toast
```
Componente: Alert
├── Tipos: info | success | warning | error
├── Height: 48px + padding
├── Padding: 12px 16px
├── Border Radius: 8px
├── Icons (à esquerda)
├── Close button (à direita)

Colors por tipo:
├── Info: Blue bg 10%, Blue text
├── Success: Green bg 10%, Green text
├── Warning: Amber bg 10%, Amber text
└── Error: Red bg 10%, Red text

Componente: Toast (floating)
├── Position: bottom-right
├── Width: 320px
├── Animation: slide-in from right
├── Auto-dismiss: 4s
└── Stacking: 16px distance
```

### 4.6 Modais/Dialogs
```
Componente: Modal
├── Width: 480px (ou 90vw mobile)
├── Max Height: 90vh
├── Border Radius: 12px
├── Background: Zinc-900
├── Border: 1px Zinc-800
├── Shadow: 0 20px 25px -5px rgba(0,0,0,0.3)

Componente: Backdrop
├── Background: rgba(0,0,0,0.5)
├── Blur: 4px
└── Animation: fade in 200ms
```

### 4.7 Badges/Labels
```
Componente: Badge
├── Padding: 2px 8px
├── Height: 20px
├── Border Radius: 4px
├── Font Size: 12px
├── Font Weight: 500
├── Espaçamento entre linhas: 0

Variantes por risco:
├── Baixo: Green bg 10%, Green text
├── Médio: Amber bg 10%, Amber text
└── Alto: Red bg 10%, Red text
```

---

## **Seção 5: Layouts & Screens**

### 5.1 Layout Base (com grids)
```
Artboard: 1920x1080
├── Sidebar: 280px (fixed, esquerda)
├── Main Content: 1640px
│  ├── Top Navbar: 64px (sticky)
│  ├── Content Area: padding 32px
│  └── Max Width: 1200px (centralizado)
└── Responsive: 1024px (ocultar sidebar colateral)
```

### 5.2 Telas Prioritárias

#### 5.2.1 Login Page
```
Artboard: "Login"
├── Fundo: Gradient dark
├── Card central: 420px width
│  ├── Logo + Title
│  ├── Email input
│  ├── Password input
│  ├── "Remember me" checkbox
│  ├── Primary button "Enter"
│  ├── Divider
│  └── Social buttons (GitHub, Google)
├── Footer: copyright
└── Ilustração/glow ao fundo (opcional)
```

#### 5.2.2 Dashboard
```
Artboard: "Dashboard"
├── Header
│  ├── Title "Dashboard"
│  ├── Subtitle
│  └── Theme toggle (☀️/🌙) - TOP RIGHT
├── Metric Cards (4 colunas)
│  ├── Card 1: "Risco do Projeto"
│  ├── Card 2: "Tarefas Completadas"
│  ├── Card 3: "Equipe"
│  └── Card 4: "Próximo Deadline"
├── Chart Section (2 colunas)
│  ├── Line chart (Progress)
│  └── (outro chart)
└── AI Alerts Section
   ├── Alert card 1
   ├── Alert card 2
   └── Alert card 3
```

#### 5.2.3 Projects List
```
Artboard: "Projects"
├── Header + "New Project" button
├── Search bar + Filters
├── Project Cards Grid (3 colunas)
│  cada:
│  ├── Thumbnail/Icon
│  ├── Title
│  ├── Progress bar (visual)
│  ├── Risk badge
│  ├── Deadline
│  ├── Info (tasks, team)
│  └── Hover state: expandir, shadow +, menu ⋯
└── Pagination (bottom)
```

#### 5.2.4 Bugs Detection
```
Artboard: "Bugs"
├── Header
├── Severity filters
├── Bug List (cards)
│  cada:
│  ├── Type badge
│  ├── Probability circle (SVG)
│  ├── Arquivo + line
│  ├── Description
│  ├── Severity level
│  ├── Detected date
│  └── Action buttons
└── Empty state (se sem bugs)
```

### 5.3 Mobile Layouts (375px)
```
Artboard: "Dashboard - Mobile"
├── Adaptações:
│  ├── Sidebar → Bottom navigation (60px)
│  ├── Cards → 1 coluna
│  ├── Charts → responsivo (reduzir tamanho)
│  ├── Menu → Hamburger icon
│  └── Padding → 16px
```

---

## **Seção 6: Animações & Micro-Interações**

### 6.1 Transições de Página
```
Tipo: Fade + Slide
Duração: 0.5s
Easing: ease-out
Direction: Y (20px)

Sequence:
1. Fade out current page (0.3s)
2. Fade in new page (0.5s)
3. Slide up (0.5s)
```

### 6.2 Hover States
```
Botão:
- Scale: 1.02
- Shadow: +10px
- Duration: 200ms

Card:
- Scale: 1.02
- Shadow: +15px
- Duration: 300ms

Link:
- Underline appear
- Color change
- Duration: 150ms
```

### 6.3 Loading States
```
Skeleton Loader:
- Width: 100%
- Height: 12px
- Border Radius: 4px
- Animation: Pulse (opacity 0.5 → 1 → 0.5)
- Duration: 1.5s

Spinner:
- Size: 24px
- Rotation: 360° continuous
- Duration: 1s
- Color: Indigo-600

Progress:
- Height: 4px
- Fill animation: ease-in-out
- Duration: 2s
```

### 6.4 Success States
```
Checkmark animation:
- Appear: scale 0 → 1 (0.3s)
- Color: Green
- Background: Green bg 10%

Confetti (opcional):
- Duração: 2s
- Queda: Y axis
- Fade out ao final
```

---

## **Seção 7: Design Tokens (Export)**

### 7.1 Estrutura JSON para Dev
```json
{
  "colors": {
    "primary": {
      "600": "#4F46E5",
      "500": "#6366F1",
      "400": "#818CF8"
    },
    "secondary": {
      "500": "#06B6D4",
      "400": "#22D3EE"
    },
    "neutral": {
      "950": "#09090B",
      "900": "#18181B",
      "800": "#27272A",
      "700": "#3F3F46"
    },
    "status": {
      "success": "#10B981",
      "warning": "#F59E0B",
      "error": "#EF4444",
      "info": "#3B82F6"
    }
  },
  "typography": {
    "display": { "size": 48, "weight": 700, "lineHeight": 1.2 },
    "heading1": { "size": 36, "weight": 700, "lineHeight": 1.3 },
    "body": { "size": 16, "weight": 400, "lineHeight": 1.5 }
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
    "xl": "16px"
  },
  "shadows": {
    "sm": "0 1px 2px rgba(0,0,0,0.05)",
    "md": "0 4px 6px rgba(0,0,0,0.1)",
    "lg": "0 10px 15px rgba(0,0,0,0.1)"
  }
}
```

---

## **Seção 8: Specifications para Dev (Handoff)**

### 8.1 Naming Conventions
```
Components:
- {ComponentType}/{Variant}-{State}
- Button/Primary-Default
- Card/Project-Hover

Artboards:
- [Device] {PageName} - {Scenario}
- [Desktop] Dashboard - Default
- [Mobile] Dashboard - Logged Out

Layers:
- Use nomes descritivos
- Use grupos (/)
- Ex: "Form/Input/Label", "Button/Icon-Right"
```

### 8.2 Export Settings
```
Buttons:
- SVG format
- 2x (para retina displays)
- Nome: button-{variant}-{size}.svg

Icons:
- SVG format
- 1x, 2x, 3x
- Nome: icon-{name}-{size}.svg

Illustrations:
- PNG + SVG
- Nome: illustration-{name}.png/svg
```

---

## **Seção 9: Checklista de Implementação**

### ✅ Estrutura
- [ ] Arquivo Figma criado com páginas
- [ ] Grids e guides configurados
- [ ] Nomes de artboards padronizados

### ✅ Cores
- [ ] Palette dark mode definida
- [ ] Palette light mode definida
- [ ] Gradientes criados e salvos
- [ ] Estilos de cor exportados

### ✅ Tipografia
- [ ] Fonte Inter importada
- [ ] Escala tipográfica criada
- [ ] Estilos de texto salvos
- [ ] Tamanhos e weights testados

### ✅ Componentes
- [ ] Button (todas variantes)
- [ ] Card (variações)
- [ ] Input/Select/Checkbox
- [ ] Navigation sidebar
- [ ] Alert/Toast
- [ ] Modal/Dialog
- [ ] Badge/Label
- [ ] Icon library

### ✅ Layouts
- [ ] Login screen
- [ ] Dashboard (desktop + mobile)
- [ ] Projects list
- [ ] Bugs detection
- [ ] Predictions
- [ ] Team page
- [ ] Settings page

### ✅ Animações
- [ ] Page transitions documentadas
- [ ] Hover states especificados
- [ ] Loading states definidos
- [ ] Success animations

### ✅ Handoff
- [ ] Design tokens exportados
- [ ] Specs documentadas
- [ ] Assets prontos para download
- [ ] Componentes linkados ao código

---

## **Seção 10: Recursos & Links Úteis**

### Importar no Figma
- **Typography**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Icons**: [Lucide Icons - Figma Plugin](https://www.figma.com/community/plugin/739895976498318058)
- **Illustrations**: [Blush.design](https://blush.design/)

### Ferramentas de Design
- **Figma**: [figma.com](https://figma.com)
- **Scale**: [Figma Plugins > Scale](https://www.figma.com/community)
- **Export**: [Figma to Code](https://www.figma.com/community/plugins)

### Aprender
- [Figma Design Systems Course](https://www.figma.com/design-systems/)
- [Design Tokens Specification](https://design-tokens.github.io/community-group/format/)
- [Accessibility Guide](https://www.figma.com/community/file/1090217152101796280)

---

## **Seção 11: Entrega Final**

### Arquivo Figma
- [ ] Compartilhado com time de dev
- [ ] Acesso de "view" para stakeholders
- [ ] Comentários habilitados
- [ ] Design token doc anexado

### Documentação
- [ ] Este guia revisado
- [ ] Specs exportadas em PDF
- [ ] Assets compactados em .zip
- [ ] Link para projeto compartilhado

### Próximas Etapas
1. Dev implementa componentes em React/TypeScript
2. Design revisa implementação
3. Testes de usabilidade
4. Iterações e refinamento

---

## 💡 Dicas Finais

1. **Comece simples**: Crie componentes básicos primeiro, depois complexos
2. **Use variants**: Componentes no Figma com variants = menos arquivos
3. **Documente tudo**: Comentários e notas ajudam a equipe
4. **Test files**: Crie um arquivo separado para testes antes de marcar como final
5. **Versionamento**: Mantenha histórico de versões importantes

---

<div align="center">

**Pronto para começar no Figma? 🚀**

Copie este guia, compartilhe com seu designer, e mãos à obra!

</div>
