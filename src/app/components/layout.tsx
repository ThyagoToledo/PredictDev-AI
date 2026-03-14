import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Brain, Home, FolderKanban, Sparkles, Bug, Users, Settings, LogOut, Menu, X, ChevronRight, Bell } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "./ui/theme-toggle";
import { useTheme } from "../context/ThemeContext";
import { AiChat } from "./AiChat";
import { useLocalStorage } from "../hooks/useLocalStorage";

const menuGroups = [
// ... (rest remains the same until the end of the file, I will just do a multi-replace)
  {
    label: "VISÃO GERAL",
    items: [
      { icon: Home, label: "Dashboard", path: "/dashboard" },
      { icon: FolderKanban, label: "Projetos", path: "/projetos" },
    ],
  },
  {
    label: "INTELIGÊNCIA ARTIFICIAL",
    items: [
      { icon: Sparkles, label: "Previsões IA", path: "/previsoes" },
      { icon: Bug, label: "Bugs Previstos", path: "/bugs" },
    ],
  },
  {
    label: "GESTÃO",
    items: [
      { icon: Users, label: "Equipe", path: "/equipe" },
      { icon: Settings, label: "Configurações", path: "/configuracoes" },
    ],
  },
];

const allMenuItems = menuGroups.flatMap(g => g.items);

export function Layout() {
  const location = useLocation();
  const { theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const currentPage = allMenuItems.find(item => item.path === location.pathname);

  // Lê as informações do usuário
  const [profileName] = useLocalStorage("saas-profileName", "John Doe");
  const [profileRole] = useLocalStorage("saas-profileRole", "CTO");
  const [profileCompany] = useLocalStorage("saas-profileCompany", "TechCorp Inc.");

  const avatarInitials = profileName ? profileName.substring(0, 2).toUpperCase() : "JD";

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="p-6 pb-4 border-b border-white/5 light:border-zinc-100">
        <Link to="/dashboard" className="flex items-center space-x-3 group" onClick={() => setSidebarOpen(false)}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] blur-md opacity-50 group-hover:opacity-100 transition-opacity rounded-xl" />
            <div className="relative bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] p-2.5 rounded-xl border border-white/10">
              <Brain className="w-5 h-5 text-white" />
            </div>
          </div>
          <div>
            <h1 className="font-black text-lg tracking-tight text-white light:text-zinc-900">
              PredictDev <span className="text-transparent bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text">AI</span>
            </h1>
            <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">Predictive Intelligence</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto custom-scrollbar">
        {menuGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="mb-6">
            <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-600 light:text-zinc-400">
              {group.label}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item, i) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                const delay = groupIdx * 0.05 + i * 0.05;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block outline-none"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay, duration: 0.3 }}
                      whileHover={{ x: 2 }}
                      className={`
                        relative flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200
                        ${active
                          ? "text-white light:text-zinc-900 bg-white/8 light:bg-indigo-50 border border-white/10 light:border-indigo-200/60"
                          : "text-zinc-500 light:text-zinc-500 hover:text-zinc-200 light:hover:text-zinc-700 hover:bg-white/5 light:hover:bg-zinc-50 border border-transparent"
                        }
                      `}
                    >
                      {active && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 w-0.5 h-6 bg-gradient-to-b from-[#4F46E5] to-[#06B6D4] rounded-r-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-4 h-4 ${active ? "text-[#06B6D4]" : ""}`} />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      {active && <ChevronRight className="w-3.5 h-3.5 text-zinc-500 light:text-zinc-400" />}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Status Badge */}
      <div className="px-4 py-3 mx-3 mb-3 rounded-xl bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 light:border-indigo-200">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <p className="text-xs font-medium text-zinc-300 light:text-zinc-600">IA Ativa — Monitorando</p>
        </div>
        <p className="text-[10px] text-zinc-600 light:text-zinc-400 mt-1">Última análise: 2 min atrás</p>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-white/5 light:border-zinc-100">
        <Link
          to="/login"
          className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 light:hover:bg-zinc-50 transition-colors border border-transparent hover:border-white/5 light:hover:border-zinc-100 cursor-pointer group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg ring-2 ring-white/10">
              {avatarInitials}
            </div>
            <div>
              <p className="text-sm font-semibold text-white light:text-zinc-900 group-hover:text-[#06B6D4] transition-colors">{profileName}</p>
              <p className="text-xs text-zinc-500">{profileRole} · {profileCompany}</p>
            </div>
          </div>
          <LogOut className="w-4 h-4 text-zinc-600 group-hover:text-red-400 transition-colors" />
        </Link>
      </div>
    </>
  );

  return (
    <div className="flex h-screen bg-[#030303] light:bg-zinc-50 text-zinc-100 light:text-zinc-900 overflow-hidden font-sans selection:bg-[#4F46E5] selection:text-white">
      {/* Background Glows - dark mode only */}
      <div className="absolute top-[-10%] left-[-5%] w-[35%] h-[35%] rounded-full bg-[#4F46E5]/8 blur-[120px] pointer-events-none light:opacity-0 transition-opacity" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-[#06B6D4]/8 blur-[120px] pointer-events-none light:opacity-0 transition-opacity" />

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex relative z-10 w-64 bg-zinc-950/60 light:bg-white backdrop-blur-xl border-r border-white/5 light:border-zinc-200 flex-col shadow-xl flex-shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 bottom-0 w-64 bg-zinc-950 light:bg-white border-r border-white/5 light:border-zinc-200 flex flex-col z-50 md:hidden shadow-2xl"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Bar */}
        <header className="sticky top-0 z-20 flex items-center justify-between px-4 md:px-6 h-16 bg-zinc-950/50 light:bg-white/80 backdrop-blur-xl border-b border-white/5 light:border-zinc-200 flex-shrink-0">
          <div className="flex items-center space-x-3">
            {/* Mobile hamburger */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white light:hover:text-zinc-900 hover:bg-white/5 light:hover:bg-zinc-100 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Page title breadcrumb */}
            <div className="flex items-center space-x-2">
              <span className="text-zinc-600 light:text-zinc-400 text-sm hidden md:block">PredictDev AI</span>
              <span className="text-zinc-700 light:text-zinc-300 hidden md:block">/</span>
              <span className="font-semibold text-white light:text-zinc-900 text-sm">
                {currentPage?.label ?? 'Dashboard'}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Notification bell */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 rounded-xl bg-zinc-900/50 light:bg-zinc-100 hover:bg-zinc-800 light:hover:bg-zinc-200 border border-white/10 light:border-zinc-200 transition-colors"
            >
              <Bell className="w-4 h-4 text-zinc-400 light:text-zinc-500" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#4F46E5] rounded-full shadow-[0_0_6px_rgba(79,70,229,0.8)]" />
            </motion.button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User avatar - desktop */}
            <div className="hidden md:flex w-9 h-9 bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] rounded-full items-center justify-center text-white text-xs font-bold shadow-lg ring-2 ring-white/10 light:ring-zinc-200">
              {avatarInitials}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          <Outlet />
        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.15);
        }
        .light .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.1);
        }
        .light .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(0, 0, 0, 0.18);
        }
      `}</style>
      <AiChat />
    </div>
  );
}
