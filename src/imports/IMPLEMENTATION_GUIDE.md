# 🛠️ Guia Técnico - Implementação das Melhorias

Este documento fornece **instruções prontas para implementar** as funcionalidades que faltam no projeto.

---

## 1️⃣ Implementar Tema Escuro/Claro 🌙☀️

### Opção A: Context API + Local Storage (RECOMENDADO)

#### Passo 1: Criar o Theme Context
Criar arquivo: `nova interface/src/app/context/ThemeContext.tsx`

```tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    // Verificar preferência salva ou usar sistema
    const saved = localStorage.getItem('theme') as ThemeType | null;
    if (saved) return saved;
    
    // Detectar preferência do sistema
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    // Salvar preferência
    localStorage.setItem('theme', theme);
    
    // Atualizar classe no documento
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  }
  return context;
};
```

#### Passo 2: Integrar no App
Editar: `nova interface/src/main.tsx`

```tsx
import { ThemeProvider } from './app/context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
```

#### Passo 3: Criar Componente Toggle
Criar: `nova interface/src/app/components/ui/theme-toggle.tsx`

```tsx
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'motion/react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 border border-white/10 transition-colors"
      aria-label={`Mudar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 text-yellow-400" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
}
```

#### Passo 4: Adicionar na Layout
Editar: `nova interface/src/app/components/layout.tsx`

```tsx
// Adicionar import
import { ThemeToggle } from './ui/theme-toggle';

export function Layout() {
  return (
    <div className="flex h-screen bg-[#030303] dark:bg-[#030303] light:bg-white ...">
      {/* ... resto do código ... */}
      
      {/* Adicionar no navbar, lado direito */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {/* ... mais componentes ... */}
      </div>
    </div>
  );
}
```

#### Passo 5: Configurar Tailwind para Light Mode
Editar: `nova interface/tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Definir cores customizadas
      }
    },
  },
  plugins: [],
} satisfies Config
```

#### Passo 6: Atualizar CSS
Editar: `nova interface/src/styles/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Light mode */
html:not(.dark) {
  @apply bg-white text-zinc-950;
  --background: #ffffff;
  --foreground: #000000;
  --card: #f5f5f5;
  --primary: #4F46E5;
}

/* Dark mode */
html.dark {
  @apply bg-[#030303] text-zinc-100;
  --background: #030303;
  --foreground: #ffffff;
  --card: #18181B;
  --primary: #4F46E5;
}
```

---

## 2️⃣ Implementar Autenticação Real

### Usando NextAuth ou Auth0

#### Opção: Google OAuth + JWT

```bash
npm install @react-oauth/google jsonwebtoken
```

Criar: `nova interface/src/app/services/auth.ts`

```typescript
interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    avatar?: string;
  };
}

export const authService = {
  async loginWithGoogle(googleToken: string): Promise<AuthResponse> {
    const response = await fetch('/api/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: googleToken }),
    });
    
    if (!response.ok) throw new Error('Autenticação falhou');
    return response.json();
  },

  async logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getToken() {
    return localStorage.getItem('token');
  },

  isAuthenticated() {
    return !!this.getToken();
  }
};
```

---

## 3️⃣ Integrar Banco de Dados

### PostgreSQL + SQLAlchemy (Python)

#### Passo 1: Instalar dependências
```bash
pip install sqlalchemy psycopg2-binary flask-sqlalchemy flask-migrate
```

#### Passo 2: Configurar de banco no app.py
```python
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:password@localhost/predictdev'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)
```

#### Passo 3: Criar modelos
Criar: `models.py`

```python
from datetime import datetime
from db import db

class Project(db.Model):
    id = db.Column(db.String(36), primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    progress = db.Column(db.Integer, default=0)
    risk = db.Column(db.String(20), nullable=False)
    deadline = db.Column(db.DateTime, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'progress': self.progress,
            'risk': self.risk,
            'deadline': self.deadline.isoformat(),
            'created_at': self.created_at.isoformat()
        }

class Bug(db.Model):
    id = db.Column(db.String(36), primary_key=True)
    type = db.Column(db.String(100), nullable=False)
    probability = db.Column(db.Integer, nullable=False)
    file = db.Column(db.String(255), nullable=False)
    line = db.Column(db.Integer, nullable=False)
    severity = db.Column(db.String(20), nullable=False)
    project_id = db.Column(db.String(36), db.ForeignKey('project.id'))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
```

---

## 4️⃣ Implementar WebSocket para Updates Real-time

### Usando Flask-SocketIO

```bash
npm install socket.io-client
pip install flask-socketio python-socketio
```

#### Frontend: Criar hook
```typescript
// nova interface/src/app/hooks/useSocket.ts
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

export function useSocket(url: string) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(url);
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [url]);

  return socket;
}
```

#### Backend: Configurar SocketIO
```python
from flask_socketio import SocketIO, emit

socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('connect')
def handle_connect():
    print('Cliente conectado')

@socketio.on('disconnect')
def handle_disconnect():
    print('Cliente desconectado')

# Emitir updates quando projeto muda
@app.route('/api/projects/<project_id>', methods=['PUT'])
def update_project(project_id):
    # ... atualizar no banco ...
    socketio.emit('project_updated', {'project_id': project_id})
    return jsonify({'success': True})
```

---

## 5️⃣ Criar Modais Faltando

### Modal de Criar/Editar Projeto

```tsx
// nova interface/src/app/components/modals/ProjectModal.tsx
import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ProjectData) => void;
}

interface ProjectData {
  name: string;
  description: string;
  deadline: string;
  team_size: number;
}

export function ProjectModal({ isOpen, onClose, onSubmit }: ProjectModalProps) {
  const [formData, setFormData] = useState<ProjectData>({
    name: '',
    description: '',
    deadline: '',
    team_size: 1,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="w-full max-w-md p-6 bg-zinc-900 border-zinc-800">
          <h2 className="text-2xl font-bold text-white mb-4">Novo Projeto</h2>
          
          <div className="space-y-4">
            <Input
              label="Nome do Projeto"
              placeholder="Ex: App Mobile"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            
            <Input
              label="Descrição"
              placeholder="Descrição breve"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            
            <Input
              label="Deadline"
              type="date"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
            />
            
            <Input
              label="Tamanho da Equipe"
              type="number"
              min="1"
              value={formData.team_size}
              onChange={(e) => setFormData({ ...formData, team_size: parseInt(e.target.value) })}
            />
          </div>

          <div className="flex gap-3 mt-6">
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              className="flex-1"
              onClick={() => {
                onSubmit(formData);
                onClose();
              }}
            >
              Criar Projeto
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
```

---

## 6️⃣ Adicionar Animações Avançadas

### Page Transitions
```tsx
// nova interface/src/app/components/PageTransition.tsx
import { motion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
      }}
    >
      {children}
    </motion.div>
  );
}
```

### Skeleton Loader
```tsx
// nova interface/src/app/components/ui/skeleton.tsx
import { motion } from 'motion/react';

export function Skeleton() {
  return (
    <motion.div
      animate={{
        backgroundColor: ['rgba(255,255,255,0.05)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)'],
      }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="h-4 w-full rounded bg-zinc-800"
    />
  );
}
```

---

## 7️⃣ Melhorar Responsividade Mobile

### Breakpoints Recomendados
```typescript
// nova interface/src/app/hooks/useBreakpoint.ts
import { useEffect, useState } from 'react';

type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setBreakpoint('mobile');
      else if (window.innerWidth < 1024) setBreakpoint('tablet');
      else setBreakpoint('desktop');
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
}
```

### Exemplo de Layout Responsivo
```tsx
export function ResponsiveLayout() {
  const breakpoint = useBreakpoint();

  return (
    <div className={breakpoint === 'mobile' ? 'flex flex-col' : 'grid grid-cols-3 gap-4'}>
      {/* Conteúdo */}
    </div>
  );
}
```

---

## 8️⃣ Relatórios em PDF

### Usar ReportLab ou html2pdf

```bash
npm install html2pdf.js
```

```typescript
import html2pdf from 'html2pdf.js';

export async function exportProjectReport(projectId: string) {
  const element = document.getElementById(`report-${projectId}`);
  
  const options = {
    margin: 10,
    filename: `relatorio-${projectId}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
  };

  html2pdf().set(options).from(element).save();
}
```

---

## 9️⃣ Testes Automatizados

### Setup Jest + React Testing Library
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

Exemplo de teste:
```typescript
// nova interface/src/app/components/__tests__/ThemeToggle.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeToggle } from '../ui/theme-toggle';

describe('ThemeToggle', () => {
  it('toggle tema ao clicar', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(document.documentElement).toHaveClass('dark');
  });
});
```

---

## 🔟 Deploy

### Opção 1: Vercel (Frontend)
```bash
npm install -g vercel
vercel
```

### Opção 2: Railway/Heroku (Backend)
```bash
# Railway
railway link
railway up

# Heroku
heroku create seu-app
git push heroku main
```

---

## ✅ Checklista de Implementação

- [ ] Theme dark/light completo
- [ ] Autenticação implementada
- [ ] Banco de dados rodando
- [ ] WebSocket para tempo real
- [ ] Modais de criação/edição
- [ ] Animações adicionadas
- [ ] Mobile responsivo
- [ ] Testes com cobertura >80%
- [ ] Documentação completa
- [ ] Deploy em staging
- [ ] Code review
- [ ] Release para produção

---

## 🚀 Próximos Passos

1. **Hoje**: Implementar theme escuro/claro
2. **Amanhã**: Integrar autenticação
3. **Semana que vem**: Setup do banco de dados
4. **Semana 2**: WebSocket e updates realtime
5. **Semana 3-4**: Testes, animações e polish
6. **Semana 5**: Deploy

---

<div align="center">

**Precisa de ajuda? Use este guia como referência! 💪**

Para dúvidas, consulte a documentação oficial das bibliotecas ou abra uma issue.

</div>
