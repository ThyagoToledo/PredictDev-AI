# PDF Genius - Plataforma Inteligente de Gestão de PDFs

## Visão Geral

O **PDF Genius** é uma plataforma web completa para manipulação e análise inteligente de documentos PDF, potencializada por Inteligência Artificial (Google Gemini). O sistema combina **13 ferramentas de edição de PDF** com **4 funcionalidades de IA** em uma interface moderna com design **glassmorphism**, tema escuro/claro adaptativo e animações fluidas.

### Destaques do Projeto
- **IA Multimodal**: Suporta análise de PDFs escaneados/baseados em imagem via Gemini 2.5 Flash
- **Design Profissional**: Glassmorphism + Gradientes animados + Dark/Light mode
- **Performance**: Interface responsiva com React 18 + Vite + Tailwind CSS v4
- **Segurança**: Criptografia de PDFs com pikepdf (R=4 encryption)
- **Chat Conversacional**: Histórico de 10 mensagens com contexto do PDF
- **Análise Inteligente**: Resumos estruturados, extração de insights, tradução para 8 idiomas

---

## Stack Tecnológico

| Camada | Tecnologias |
|--------|------------|
| **Backend** | Python 3.13, Flask 3.0+, PyMuPDF (fitz), pikepdf, ReportLab, Pillow |
| **Frontend Atual** | HTML5, CSS3 (Custom Properties), JavaScript Vanilla (SPA) |
| **Frontend Nova Interface** | React 18, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, Framer Motion, Recharts |
| **IA & Multimodal** | Google Gemini 2.5 Flash (lê PDFs escaneados/binários nativamente) |
| **Ícones** | Phosphor Icons (app atual) / Lucide React (nova interface) |
| **Animações** | Framer Motion (já instalado em nova interface) |
| **Tema/Dark Mode** | CSS Custom Properties + next-themes + Tailwind Dark Mode |

---

## Funcionalidades Completas

### Ferramentas de PDF (13 ferramentas)

| # | Ferramenta | Descricao |
|---|-----------|-----------|
| 1 | **Upload** | Drag-and-drop ou seletor. Suporta múltiplos PDFs até 50MB cada |
| 2 | **Visualizador** | Renderização página por página com zoom (50%-300%) e navegação por teclado |
| 3 | **Informações/Metadados** | Exibe páginas, título, autor, assunto, criador, produtor, datas, criptografia, versão PDF e tamanho |
| 4 | **Extrair Texto** | Extrai todo o texto com contagem de caracteres/palavras e copia para clipboard |
| 5 | **Extrair Imagens** | Extrai todas as imagens embutidas em alta resolução |
| 6 | **Mesclar PDFs** | Combina 2+ PDFs com lista drag-and-drop para reordenação |
| 7 | **Dividir PDF** | Divide por intervalos de páginas (ex: "1-3, 4-6, 7-10") |
| 8 | **Rotacionar** | Rotação de páginas específicas ou todas por 90°, 180° ou 270° |
| 9 | **Marca d'água** | Texto diagonal em todas as páginas com opacidade configurável (5%-80%) |
| 10 | **Criptografar** | Proteção por senha com R=4 encryption (pikepdf) |
| 11 | **Descriptografar** | Remoção de proteção por senha (requer senha correta) |
| 12 | **Comprimir** | Redução de tamanho com relatório de compressão (antes vs depois + %) |
| 13 | **Exportar TXT** | Download de todo o texto extraído como arquivo .txt |

### Funcionalidades de IA (4 recursos)

| # | Recurso IA | Descricao |
|---|-----------|-----------|
| 1 | **Chat com PDF** | Interface conversacional que envia o PDF completo como entrada multimodal. Funciona com PDFs escaneados/baseados em imagem. Mantem historico de 10 mensagens |
| 2 | **Resumo Automatico** | Gera resumos executivos estruturados: Resumo Geral, Objetivo Principal, Topicos-Chave, Conclusao |
| 3 | **Pontos-Chave** | Extrai os 10 principais insights do documento em formato estruturado |
| 4 | **Traducao** | Traduz conteudo do PDF para 8 idiomas: Ingles, Espanhol, Frances, Alemao, Italiano, Japones, Mandarim, Arabe |

### Gestao de Sessao

- **Meus PDFs** - Lista todos os PDFs carregados na sessao atual
- **Seletor de PDF** - Dropdown nas ferramentas de IA para selecionar qual PDF analisar
- **Configuracoes** - Configuracao e persistencia da API Key do Gemini com indicador de status

---

## API Endpoints

| Metodo | Rota | Funcao |
|--------|------|--------|
| `GET` | `/` | Serve a SPA principal |
| `GET` | `/api/files` | Lista arquivos carregados |
| `DELETE` | `/api/files/<id>` | Remove arquivo |
| `POST` | `/api/upload` | Upload de PDF(s) |
| `GET` | `/api/preview/<id>/<page>` | Renderiza pagina como imagem base64 |
| `POST` | `/api/info` | Metadados do PDF |
| `POST` | `/api/extract-text` | Extrai texto |
| `POST` | `/api/to-txt` | Exporta como .txt |
| `POST` | `/api/extract-images` | Extrai imagens como .zip |
| `POST` | `/api/merge` | Mescla PDFs |
| `POST` | `/api/split` | Divide PDF |
| `POST` | `/api/rotate` | Rotaciona paginas |
| `POST` | `/api/watermark` | Adiciona marca d'agua |
| `POST` | `/api/encrypt` | Criptografa PDF |
| `POST` | `/api/decrypt` | Descriptografa PDF |
| `POST` | `/api/compress` | Comprime PDF |
| `POST` | `/api/chat` | Chat com IA |
| `POST` | `/api/summarize` | Resumo por IA |
| `POST` | `/api/keypoints` | Pontos-chave por IA |
| `POST` | `/api/translate` | Traducao por IA |
| `GET` | `/api/settings` | Status da API Key |
| `POST` | `/api/settings` | Salva API Key |

---

## Como Rodar

### Backend (Flask)

```bash
# 1. Clonar e entrar no diretorio
cd pdf-genius

# 2. Criar e ativar ambiente virtual
python -m venv .venv
.venv\Scripts\activate    # Windows
# source .venv/bin/activate  # Linux/Mac

# 3. Instalar dependencias
pip install -r requirements.txt

# 4. Configurar API Key
cp .env.example .env
# Editar .env e adicionar sua GEMINI_API_KEY
# Obtenha gratuitamente em: https://aistudio.google.com/app/apikey

# 5. Rodar
python app.py
# Acesse: http://localhost:5000
```

### Nova Interface (React/Vite)

```bash
cd "nova interface"
npm install
npm run dev
```

---

## Recomendacao de Modelo de IA

### Modelo Recomendado: Gemini 2.5 Flash (Ja implementado)

Baseado na analise da imagem com as opcoes disponiveis:

| Modelo | Velocidade | Custo | Multimodal PDF | Recomendacao |
|--------|-----------|-------|----------------|-------------|
| **Padrao (Gemini 2.5 Flash)** | Muito rapida | Gratuito/Baixo | Sim (nativo) | **RECOMENDADO** - Melhor custo-beneficio |
| Claude Sonnet 4.6 | Rapida | Medio | Sim (via text) | Boa opcao para chat, mas API paga |
| Gemini 3 Flash | Muito rapida | Baixo | Sim | Alternativa futura quando estiver estavel |
| Gemini 3.1 Pro | Media | Alto | Sim | Overkill para a maioria das operacoes |

**Por que Gemini 2.5 Flash e ideal:**
- Aceita PDF como entrada multimodal binaria (le PDFs escaneados sem OCR)
- Velocidade excelente para interacoes em tempo real
- Tier gratuito generoso para desenvolvimento
- Ja esta integrado e funcionando no projeto

---

## Instrucoes para Redesign no Figma

### Design System - Tokens de Design

```
CORES PRINCIPAIS:
- Primary:     #4F46E5 (Indigo)
- Secondary:   #06B6D4 (Cyan)
- AI Accent:   #A78BFA (Lavender)
- Gradient:    linear-gradient(135deg, #4F46E5, #A78BFA, #06B6D4)

BACKGROUNDS (Dark Mode):
- Base:        #030303
- Surface 1:   rgba(24, 24, 27, 0.5)  (zinc-900/50)
- Surface 2:   rgba(9, 9, 11, 0.5)    (zinc-950/50)
- Hover:       rgba(255, 255, 255, 0.05)
- Border:      rgba(255, 255, 255, 0.05)

BACKGROUNDS (Light Mode):
- Base:        #F8FAFC
- Surface 1:   #FFFFFF
- Surface 2:   #F1F5F9
- Hover:       rgba(0, 0, 0, 0.03)
- Border:      rgba(0, 0, 0, 0.08)

TEXTO (Dark):
- Heading:     #FFFFFF
- Body:        #A1A1AA (zinc-400)
- Muted:       #71717A (zinc-500)

TEXTO (Light):
- Heading:     #09090B (zinc-950)
- Body:        #52525B (zinc-600)
- Muted:       #A1A1AA (zinc-400)

ESTADOS:
- Success:     #10B981 (emerald)
- Warning:     #F59E0B (amber)
- Danger:      #EF4444 (red)
- Info:        #06B6D4 (cyan)

TIPOGRAFIA:
- Familia:     Inter
- Heading H1:  2.25rem / 800 (extrabold)
- Heading H2:  1.25rem / 700 (bold)
- Body:        0.875rem / 500 (medium)
- Caption:     0.75rem / 500

RAIOS DE BORDA:
- Card:        16px (rounded-2xl)
- Button:      12px (rounded-xl)
- Input:       12px (rounded-xl)
- Badge:       9999px (full)
- Avatar:      9999px (full)

SOMBRAS:
- Card:        0 25px 50px rgba(0,0,0,0.25)
- Glow:        0 0 15px rgba(79,70,229,0.1)
- Backdrop:    blur(12px) - glassmorphism

ESPACAMENTO:
- Page Padding:    32px (p-8)
- Card Padding:    24px (p-6)
- Gap Cards:       24px (gap-6)
- Gap Sections:    32px (space-y-8)
```

---

### Estrutura de Paginas para o Figma

Criar as seguintes telas/frames:

#### 1. LOGIN / ONBOARDING
```
+------------------------------------------+
|                                          |
|         [Logo PDF Genius + Icone]        |
|        "Plataforma Inteligente de        |
|          Gestao de PDFs com IA"          |
|                                          |
|  +------------------------------------+  |
|  |  Email                             |  |
|  |  ________________________________  |  |
|  |  Senha                             |  |
|  |  ________________________________  |  |
|  |                                    |  |
|  |  [      Entrar      ]             |  |
|  |                                    |  |
|  |  -- ou conectar com --            |  |
|  |  [Google]    [GitHub]             |  |
|  +------------------------------------+  |
|                                          |
|     ANIMACAO: Particulas flutuantes      |
|     + Glow radial pulsante no fundo      |
|                                          |
+------------------------------------------+
```

#### 2. LAYOUT PRINCIPAL (Sidebar + Conteudo)
```
+---------+--------------------------------+
| SIDEBAR |  TOP BAR                       |
|         |  [Titulo] [API Status] [D/L]   |
| [Logo]  +--------------------------------+
|         |                                |
| ------- |  CONTEUDO DA PAGINA            |
| Geral   |                                |
| - Home  |  (varia por secao)             |
| - Upload|                                |
| - Viewer|                                |
| - Info  |                                |
| - Meus  |                                |
|  PDFs   |                                |
| ------- |                                |
| IA      |                                |
| - Chat  |                                |
| - Resumo|                                |
| - Pontos|                                |
| - Trad. |                                |
| ------- |                                |
| Ferramen|                                |
| - Mescl.|                                |
| - Divid.|                                |
| - Rotar |                                |
| - Marca |                                |
| - Cript.|                                |
| - Compr.|                                |
| ------- |                                |
| [Config]|                                |
+---------+--------------------------------+
```

#### 3. HOME / DASHBOARD
```
+------------------------------------------+
|  "Bem-vindo ao PDF Genius"               |
|  "Sua plataforma inteligente de PDFs"    |
|                                          |
|  +---------+ +---------+ +---------+    |
|  | PDFs    | | Chat IA | | Ferramen|    |
|  | Carregad| | Ativo   | | Usadas  |    |
|  |   3     | |   12msg | |   7     |    |
|  +---------+ +---------+ +---------+    |
|                                          |
|  +----------------------------------+    |
|  |   ACOES RAPIDAS (Cards animados) |    |
|  |                                  |    |
|  |  [Upload]  [Chat IA]            |    |
|  |  [Resumir] [Mesclar]            |    |
|  |  [Dividir] [Criptografar]       |    |
|  +----------------------------------+    |
|                                          |
|  ANIMACAO: Cards com hover lift (y: -5)  |
|  + fade-in sequencial (delay: i * 0.1)  |
|  + glow pulsante nos icones             |
+------------------------------------------+
```

#### 4. CHAT COM PDF (Pagina mais importante)
```
+------------------------------------------+
|  "Chat com PDF"                          |
|  [Seletor de PDF: dropdown v]            |
|                                          |
|  +----------------------------------+    |
|  |                                  |    |
|  |  IA: Ola! Envie sua pergunta     |    |
|  |  sobre o documento carregado.    |    |
|  |                                  |    |
|  |        Voce: Resuma o documento  |    |
|  |                                  |    |
|  |  IA: O documento trata de...     |    |
|  |  (markdown renderizado)          |    |
|  |                                  |    |
|  |  ... (typing indicator animado)  |    |
|  |                                  |    |
|  +----------------------------------+    |
|  |  [____________________] [Enviar] |    |
|  +----------------------------------+    |
|                                          |
|  ANIMACAO: Mensagens entram com slide-up |
|  + typing dots pulsantes                 |
|  + scroll automatico para ultima msg     |
+------------------------------------------+
```

#### 5. VISUALIZADOR DE PDF
```
+------------------------------------------+
|  "Visualizador"  [PDF: nome.pdf v]       |
|                                          |
|  +----------------------------------+    |
|  |  +----------------------------+  |    |
|  |  |                            |  |    |
|  |  |    PREVIEW DA PAGINA       |  |    |
|  |  |    (imagem renderizada)    |  |    |
|  |  |                            |  |    |
|  |  +----------------------------+  |    |
|  |                                  |    |
|  |  [< Anterior] Pag 1/12 [> Prox] |    |
|  |                                  |    |
|  |  Zoom: [-] [100%] [+]           |    |
|  +----------------------------------+    |
|                                          |
|  ANIMACAO: Transicao fade entre paginas  |
|  + zoom suave com transform scale        |
+------------------------------------------+
```

#### 6. FERRAMENTAS DE PDF (Padrao para Mesclar, Dividir, etc.)
```
+------------------------------------------+
|  "Mesclar PDFs"                          |
|                                          |
|  +----------------------------------+    |
|  |  AREA DE DRAG AND DROP           |    |
|  |                                  |    |
|  |  documento1.pdf  [x] [reorder]   |    |
|  |  documento2.pdf  [x] [reorder]   |    |
|  |  documento3.pdf  [x] [reorder]   |    |
|  |                                  |    |
|  |  + Adicionar mais PDFs           |    |
|  +----------------------------------+    |
|                                          |
|  [        Mesclar PDFs        ]          |
|                                          |
|  ANIMACAO: Lista com reorder animado     |
|  + progress bar durante processamento    |
|  + confetti no sucesso                   |
+------------------------------------------+
```

#### 7. CONFIGURACOES
```
+------------------------------------------+
|  "Configuracoes"         [Salvar]        |
|                                          |
|  +--------+-------------------------+    |
|  | Menu   |  API Key do Gemini      |    |
|  |        |                         |    |
|  | - API  |  [__________] [Testar]  |    |
|  | - Tema |  Status: Conectado      |    |
|  | - Sobre|                         |    |
|  |        |  -----------------------|    |
|  |        |                         |    |
|  |        |  Tema da Interface      |    |
|  |        |  [Escuro] [Claro]       |    |
|  |        |                         |    |
|  |        |  -----------------------|    |
|  |        |                         |    |
|  |        |  Modelo de IA           |    |
|  |        |  [Gemini 2.5 Flash v]   |    |
|  +--------+-------------------------+    |
+------------------------------------------+
```

---

### O Que Falta na Nova Interface

A nova interface React atualmente e um dashboard generico ("PredictDev AI"). Para acomodar todas as funcionalidades do PDF Genius, e necessario criar:

#### Componentes Que Precisam Ser Criados

| Prioridade | Componente | Descricao |
|-----------|-----------|-----------|
| **ALTA** | `PDFUploader` | Area de drag-and-drop com progress bar e preview de thumbnail |
| **ALTA** | `PDFViewer` | Visualizador com zoom, navegacao de paginas e renderizacao de imagem |
| **ALTA** | `ChatInterface` | Interface de chat com bolhas de mensagem, markdown renderizado e typing indicator |
| **ALTA** | `PDFSelector` | Dropdown reutilizavel para selecionar PDF carregado |
| **ALTA** | `ThemeToggle` | Botao de alternancia Dark/Light com animacao de transicao |
| **MEDIA** | `FileManager` | Lista de PDFs carregados com acoes (ver, deletar, selecionar) |
| **MEDIA** | `TextExtractor` | Painel de exibicao de texto com contagem e botao copiar |
| **MEDIA** | `MergePanel` | Lista drag-and-drop de PDFs para merge com reordenacao |
| **MEDIA** | `SplitPanel` | Input de intervalos de paginas com validacao visual |
| **MEDIA** | `RotatePanel` | Seletor de paginas + dropdown de angulo |
| **MEDIA** | `WatermarkPanel` | Input de texto + slider de opacidade com preview |
| **MEDIA** | `EncryptPanel` | Input de senha com toggle de visibilidade |
| **MEDIA** | `CompressPanel` | Botao de acao + exibicao de resultado com barra comparativa |
| **BAIXA** | `AIResultPanel` | Card reutilizavel para exibir resultados de IA (resumo, pontos-chave) |
| **BAIXA** | `TranslatePanel` | Seletor de idioma + painel de resultado |
| **BAIXA** | `MetadataPanel` | Tabela de metadados do PDF |

#### Botao de Tema Escuro/Claro

```
Implementacao recomendada:

1. Usar next-themes (ja esta no package.json)
2. Componente ThemeToggle no top bar
3. Animacao: icone Sun/Moon com rotate + scale transition
4. Variaveis CSS em theme.css para ambos os temas
5. Persistencia via localStorage

Comportamento:
- Clique alterna entre Dark e Light
- Icone: Moon no dark, Sun no light
- Transicao suave de 300ms em todas as cores
- Respeitar preferencia do sistema (prefers-color-scheme)
```

---

### Animacoes e Elementos Visuais para Profissionalismo

#### Animacoes Recomendadas (Framer Motion - ja instalado)

```
1. PAGE TRANSITIONS
   - Fade + slide up ao entrar (opacity: 0 para 1, y: 20 para 0)
   - Duration: 500ms, ease: easeOut

2. CARD HOVER
   - Lift effect: translateY(-5px)
   - Border glow: border-color com transicao
   - Scale sutil: 1.02x

3. SIDEBAR MENU
   - Active indicator: layoutId animation (spring)
   - Items: stagger fade-in (delay: i * 50ms)

4. LOADING STATES
   - Skeleton screens (ja tem skeleton component)
   - Shimmer effect com gradient animado
   - Pulse nas areas de conteudo

5. UPLOAD
   - Dropzone com border dashed animada (dash-offset)
   - Progress ring circular durante upload
   - Check mark animado no sucesso (path stroke animation)

6. CHAT
   - Mensagens: slide-in da direita (user) / esquerda (IA)
   - Typing indicator: 3 dots com pulse staggered
   - Scroll-to-bottom suave

7. RESULTADOS DE IA
   - Typewriter effect no texto gerado
   - Counter animation nos numeros/estatisticas
   - Collapse/expand com height animation

8. TOAST NOTIFICATIONS
   - Slide-in da direita + fade
   - Auto-dismiss com progress bar
   - Sonner (ja instalado)

9. BACKGROUND
   - Gradient blobs flutuantes (CSS animation)
   - Glow radial com pulse sutil (opacity oscillation)

10. MICRO-INTERACTIONS
    - Botoes: scale(0.95) on press
    - Switches: spring animation
    - Inputs: focus ring expand
```

#### Imagens e Assets Necessarios

```
HERO / ILUSTRACOES:
- Hero illustration para a Home (PDF com particulas de IA)
- Empty state illustrations (nenhum PDF carregado, etc.)
- Onboarding illustrations (3 steps)

ICONES:
- Lucide React (ja instalado) - usar consistentemente
- Icones customizados para cada ferramenta de PDF (opcional)

BACKGROUNDS:
- Gradient mesh ou noise texture sutil para depth
- Dot grid pattern para areas vazias

LOGOS:
- Logo principal: icone de documento + cerebro/IA
- Variantes: dark, light, icon-only, full

SCREENSHOTS / MOCKUPS:
- Device mockups mostrando o app em uso
- Screenshots de cada funcionalidade para marketing
```

---

### Paleta de Cores para o Figma

```
Criar no Figma como Color Styles:

Primary/
  primary-50:    #EEF2FF
  primary-100:   #E0E7FF
  primary-200:   #C7D2FE
  primary-300:   #A5B4FC
  primary-400:   #818CF8
  primary-500:   #6366F1
  primary-600:   #4F46E5  <- Main
  primary-700:   #4338CA
  primary-800:   #3730A3
  primary-900:   #312E81

Cyan/
  cyan-50:       #ECFEFF
  cyan-100:      #CFFAFE
  cyan-200:      #A5F3FC
  cyan-300:      #67E8F9
  cyan-400:      #22D3EE
  cyan-500:      #06B6D4  <- Main
  cyan-600:      #0891B2
  cyan-700:      #0E7490
  cyan-800:      #155E75
  cyan-900:      #164E63

Neutral/ (Zinc)
  zinc-50:       #FAFAFA
  zinc-100:      #F4F4F5
  zinc-200:      #E4E4E7
  zinc-300:      #D4D4D8
  zinc-400:      #A1A1AA
  zinc-500:      #71717A
  zinc-600:      #52525B
  zinc-700:      #3F3F46
  zinc-800:      #27272A
  zinc-900:      #18181B
  zinc-950:      #09090B

Semantic/
  success:       #10B981
  warning:       #F59E0B
  danger:        #EF4444
  info:          #06B6D4
```

---

### Estrutura de Navegacao (Sidebar) - Redesign

```
SIDEBAR (w-72 / 288px):

+-------------------------+
|  [Logo] PDF Genius      |
|         Powered by AI   |
|                         |
|  =====================  |
|                         |
|  Upload Rapido          |
|  [Arraste seu PDF aqui] |
|                         |
|  =====================  |
|                         |
|  GERAL                  |
|  * Home                 |
|  * Meus PDFs            |
|  * Visualizador         |
|  * Informacoes          |
|                         |
|  INTELIGENCIA ARTIFICIAL|
|  * Chat com PDF         |
|  * Resumo Automatico    |
|  * Pontos-Chave         |
|  * Traducao             |
|                         |
|  FERRAMENTAS            |
|  * Extrair Texto        |
|  * Extrair Imagens      |
|  * Mesclar              |
|  * Dividir              |
|  * Rotacionar           |
|  * Marca d'agua         |
|  * Criptografar         |
|  * Descriptografar      |
|  * Comprimir            |
|  * Exportar TXT         |
|                         |
|  =====================  |
|                         |
|  PDF Atual:             |
|  documento.pdf          |
|                         |
|  =====================  |
|  [Config] Configuracoes |
|  [Avatar] Usuario       |
+-------------------------+
```

---

### Checklist de Implementacao para o Figma

- [ ] **Tela 1** - Login/Onboarding com animacao de fundo
- [ ] **Tela 2** - Home/Dashboard com cards de acoes rapidas
- [ ] **Tela 3** - Upload com drag-and-drop area
- [ ] **Tela 4** - Meus PDFs (file manager)
- [ ] **Tela 5** - Visualizador de PDF com controles de zoom
- [ ] **Tela 6** - Informacoes/Metadados do PDF
- [ ] **Tela 7** - Chat com PDF (interface completa)
- [ ] **Tela 8** - Resumo Automatico (resultado IA)
- [ ] **Tela 9** - Pontos-Chave (resultado IA)
- [ ] **Tela 10** - Traducao (seletor de idioma + resultado)
- [ ] **Tela 11** - Extrair Texto (painel de texto)
- [ ] **Tela 12** - Extrair Imagens (grid de preview)
- [ ] **Tela 13** - Mesclar PDFs (drag-and-drop list)
- [ ] **Tela 14** - Dividir PDF (input de ranges)
- [ ] **Tela 15** - Rotacionar (seletor de paginas)
- [ ] **Tela 16** - Marca d'agua (config + preview)
- [ ] **Tela 17** - Criptografar/Descriptografar
- [ ] **Tela 18** - Comprimir (resultado comparativo)
- [ ] **Tela 19** - Configuracoes (API, Tema, Modelo)
- [ ] **Componentes** - Design system com todos os tokens
- [ ] **Dark Mode** - Variante de todas as telas
- [ ] **Light Mode** - Variante de todas as telas
- [ ] **Mobile** - Versao responsiva (menor que 768px)
- [ ] **Loading States** - Skeleton screens para cada tela
- [ ] **Empty States** - Ilustracoes para estados vazios
- [ ] **Animacoes** - Prototipo com Smart Animate

---

## Licenca

MIT License

---

> **Nota:** Este README serve como documentacao tecnica e como guia de design para reconstrucao da interface no Figma. Os wireframes ASCII devem ser recriados como high-fidelity mockups seguindo o Design System documentado acima.
