import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Separator } from "./ui/separator";
import { User, Bell, Shield, Sparkles, Save, BrainCircuit, Key, Globe, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { PageTransition } from "./PageTransition";
import { ThemeToggle } from "./ui/theme-toggle";
import { useTheme } from "../context/ThemeContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

const menuItems = [
  { icon: User, label: "Perfil" },
  { icon: Bell, label: "Notificações" },
  { icon: Shield, label: "Segurança" },
  { icon: Sparkles, label: "Motor de IA" },
];

export function Configuracoes() {
  const { theme } = useTheme();
  const [activeMenu, setActiveMenu] = useState(0);
  const [emailNotifications, setEmailNotifications] = useLocalStorage("saas-emailNotifications", true);
  const [aiSuggestions, setAiSuggestions] = useLocalStorage("saas-aiSuggestions", true);
  const [weeklyReports, setWeeklyReports] = useLocalStorage("saas-weeklyReports", false);
  const [criticalAlerts, setCriticalAlerts] = useLocalStorage("saas-criticalAlerts", true);
  
  const [profileName, setProfileName] = useLocalStorage("saas-profileName", "John Doe");
  const [profileEmail, setProfileEmail] = useLocalStorage("saas-profileEmail", "john.doe@empresa.com");
  const [profileRole, setProfileRole] = useLocalStorage("saas-profileRole", "CTO");
  const [profileCompany, setProfileCompany] = useLocalStorage("saas-profileCompany", "TechCorp Inc.");
  
  const [apiKey, setApiKey] = useLocalStorage("saas-apiKey", "AIzaSyDk4jaiGeLtDGHhCMSF6GsQVSUPEjHTHMA");

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <PageTransition>
      <div className="p-5 md:p-8 space-y-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-1 h-6 bg-gradient-to-b from-[#4F46E5] to-[#06B6D4] rounded-full" />
              <h1 className="text-3xl font-extrabold text-white light:text-zinc-900 tracking-tight">Configurações</h1>
            </div>
            <p className="text-zinc-400 light:text-zinc-500 ml-3">Gerencie suas preferências e o comportamento da IA</p>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={handleSave}
              className={`h-10 rounded-xl font-bold border-0 transition-all ${
                saved
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-white light:bg-zinc-900 text-zinc-950 light:text-white hover:bg-zinc-200 light:hover:bg-zinc-800 shadow-lg"
              }`}
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Salvo!
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Alterações
                </>
              )}
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Menu */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <Card className="p-2 bg-zinc-900/50 light:bg-white backdrop-blur-xl border border-white/5 light:border-zinc-200 shadow-xl light:shadow-sm sticky top-24">
              <nav className="space-y-1">
                {menuItems.map((item, i) => {
                  const Icon = item.icon;
                  const active = activeMenu === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveMenu(i)}
                      className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all text-left ${
                        active
                          ? "bg-white/8 light:bg-indigo-50 text-white light:text-indigo-700 border border-white/10 light:border-indigo-200"
                          : "text-zinc-400 light:text-zinc-500 hover:bg-white/5 light:hover:bg-zinc-50 hover:text-white light:hover:text-zinc-900 border border-transparent"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${active ? "text-[#06B6D4] light:text-indigo-500" : ""}`} />
                      <span className="text-sm font-medium">{item.label}</span>
                      {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />}
                    </button>
                  );
                })}
              </nav>
            </Card>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <Card className="p-6 bg-zinc-900/50 light:bg-white backdrop-blur-xl border border-white/5 light:border-zinc-200 shadow-xl light:shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-indigo-500/10 light:bg-indigo-50 rounded-xl border border-indigo-500/20 light:border-indigo-200">
                    <User className="w-4 h-4 text-indigo-400 light:text-indigo-500" />
                  </div>
                  <h2 className="font-bold text-white light:text-zinc-900">Informações do Perfil</h2>
                </div>

                <div className="space-y-6">
                  {/* Avatar */}
                  <div className="flex items-center space-x-5">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] blur-lg opacity-40 group-hover:opacity-70 transition-opacity rounded-full" />
                      <div className="w-20 h-20 bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] rounded-2xl flex items-center justify-center text-white text-3xl font-black relative z-10 shadow-xl">
                        JD
                      </div>
                    </div>
                    <div>
                      <Button variant="outline" className="bg-transparent border-white/10 light:border-zinc-200 hover:bg-white/5 light:hover:bg-zinc-50 text-zinc-300 light:text-zinc-700 hover:text-white light:hover:text-zinc-900 h-9 text-sm rounded-xl mb-2">
                        Alterar Avatar
                      </Button>
                      <p className="text-xs text-zinc-600 light:text-zinc-400">JPG, PNG ou GIF (max. 2MB)</p>
                    </div>
                  </div>

                  <Separator className="bg-white/5 light:bg-zinc-100" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-zinc-400 light:text-zinc-600 text-xs uppercase font-semibold tracking-wide">Nome Completo</Label>
                      <Input id="name" type="text" value={profileName} onChange={(e) => setProfileName(e.target.value)} className="bg-zinc-950/40 light:bg-zinc-50 border-white/8 light:border-zinc-200 text-white light:text-zinc-900 focus-visible:ring-indigo-500 h-10 rounded-xl text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-zinc-400 light:text-zinc-600 text-xs uppercase font-semibold tracking-wide">Email Corporativo</Label>
                      <Input id="email" type="email" value={profileEmail} onChange={(e) => setProfileEmail(e.target.value)} className="bg-zinc-950/40 light:bg-zinc-50 border-white/8 light:border-zinc-200 text-white light:text-zinc-900 focus-visible:ring-indigo-500 h-10 rounded-xl text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-zinc-400 light:text-zinc-600 text-xs uppercase font-semibold tracking-wide">Cargo</Label>
                      <Input id="role" type="text" value={profileRole} onChange={(e) => setProfileRole(e.target.value)} className="bg-zinc-950/40 light:bg-zinc-50 border-white/8 light:border-zinc-200 text-white light:text-zinc-900 focus-visible:ring-indigo-500 h-10 rounded-xl text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-zinc-400 light:text-zinc-600 text-xs uppercase font-semibold tracking-wide">Empresa</Label>
                      <Input id="company" type="text" value={profileCompany} onChange={(e) => setProfileCompany(e.target.value)} className="bg-zinc-950/40 light:bg-zinc-50 border-white/8 light:border-zinc-200 text-white light:text-zinc-900 focus-visible:ring-indigo-500 h-10 rounded-xl text-sm" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Theme Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Card className="p-6 bg-zinc-900/50 light:bg-white backdrop-blur-xl border border-white/5 light:border-zinc-200 shadow-xl light:shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-amber-500/10 light:bg-amber-50 rounded-xl border border-amber-500/20 light:border-amber-200">
                    <Globe className="w-4 h-4 text-amber-400 light:text-amber-500" />
                  </div>
                  <h2 className="font-bold text-white light:text-zinc-900">Aparência</h2>
                </div>

                <div className="flex items-center justify-between bg-zinc-950/30 light:bg-zinc-50 p-4 rounded-xl border border-white/5 light:border-zinc-200">
                  <div>
                    <p className="font-semibold text-white light:text-zinc-900 text-sm mb-0.5">Tema da Interface</p>
                    <p className="text-xs text-zinc-500 light:text-zinc-400">
                      Atualmente: <span className="text-indigo-400 light:text-indigo-600 font-semibold">{theme === 'dark' ? 'Escuro' : 'Claro'}</span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-zinc-500 light:text-zinc-400">{theme === 'dark' ? '🌙 Escuro' : '☀️ Claro'}</span>
                    <ThemeToggle />
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* AI Engine Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6 bg-zinc-900/50 light:bg-white backdrop-blur-xl border border-white/5 light:border-zinc-200 shadow-xl light:shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

                <div className="flex items-center space-x-3 mb-6 relative z-10">
                  <div className="p-2 bg-cyan-500/10 light:bg-cyan-50 rounded-xl border border-cyan-500/20 light:border-cyan-200">
                    <BrainCircuit className="w-4 h-4 text-cyan-400 light:text-cyan-500" />
                  </div>
                  <h2 className="font-bold text-white light:text-zinc-900">Motor de Inteligência Artificial</h2>
                </div>

                <div className="space-y-4 relative z-10">
                  {/* API Key */}
                  <div className="space-y-2">
                    <Label className="text-zinc-400 light:text-zinc-600 text-xs uppercase font-semibold tracking-wide flex items-center space-x-2">
                      <Key className="w-3.5 h-3.5" />
                      <span>API Key do Gemini</span>
                    </Label>
                    <div className="flex space-x-2">
                      <Input
                        type="password"
                        placeholder="AIzaSy..."
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        className="bg-zinc-950/40 light:bg-zinc-50 border-white/8 light:border-zinc-200 text-white light:text-zinc-900 focus-visible:ring-cyan-500 h-10 rounded-xl text-sm flex-1"
                      />
                      <Button variant="outline" className="bg-transparent border-white/10 light:border-zinc-200 hover:bg-white/5 light:hover:bg-zinc-50 text-zinc-300 light:text-zinc-700 h-10 rounded-xl text-sm shrink-0">
                        Testar
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                      <span className="text-emerald-400 font-medium">Conectado — Gemini 2.5 Flash</span>
                    </div>
                  </div>

                  {/* AI Suggestions Toggle */}
                  <div className="flex items-center justify-between bg-zinc-950/30 light:bg-zinc-50 p-4 rounded-xl border border-white/5 light:border-zinc-200">
                    <div>
                      <p className="font-semibold text-white light:text-zinc-900 text-sm mb-0.5">Sugestões Preditivas Ativas</p>
                      <p className="text-xs text-zinc-500 light:text-zinc-400">Análise contínua do repositório para prever atrasos</p>
                    </div>
                    <Switch
                      checked={aiSuggestions}
                      onCheckedChange={setAiSuggestions}
                      className="data-[state=checked]:bg-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-zinc-400 light:text-zinc-600 text-xs uppercase font-semibold tracking-wide">Sensibilidade</Label>
                      <select className="w-full px-3 py-2.5 bg-zinc-950/40 light:bg-zinc-50 border border-white/8 light:border-zinc-200 text-white light:text-zinc-900 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none appearance-none text-sm">
                        <option className="bg-zinc-900">Baixa (Apenas críticos)</option>
                        <option className="bg-zinc-900" defaultValue="true">Média (Recomendado)</option>
                        <option className="bg-zinc-900">Alta (Modo paranoico)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-zinc-400 light:text-zinc-600 text-xs uppercase font-semibold tracking-wide">Frequência</Label>
                      <select className="w-full px-3 py-2.5 bg-zinc-950/40 light:bg-zinc-50 border border-white/8 light:border-zinc-200 text-white light:text-zinc-900 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none appearance-none text-sm">
                        <option className="bg-zinc-900">A cada Push</option>
                        <option className="bg-zinc-900" defaultValue="true">A cada 12 horas</option>
                        <option className="bg-zinc-900">Diariamente</option>
                      </select>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Notifications Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <Card className="p-6 bg-zinc-900/50 light:bg-white backdrop-blur-xl border border-white/5 light:border-zinc-200 shadow-xl light:shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-amber-500/10 light:bg-amber-50 rounded-xl border border-amber-500/20 light:border-amber-200">
                    <Bell className="w-4 h-4 text-amber-400 light:text-amber-500" />
                  </div>
                  <h2 className="font-bold text-white light:text-zinc-900">Alertas e Notificações</h2>
                </div>

                <div className="space-y-1">
                  {[
                    {
                      label: "Notificações por Email",
                      description: "Receba resumos e alertas importantes",
                      checked: emailNotifications,
                      onChange: setEmailNotifications,
                      switchClass: "",
                    },
                    {
                      label: "Alertas Críticos de Bugs",
                      description: "Push notifications para falhas graves",
                      checked: criticalAlerts,
                      onChange: setCriticalAlerts,
                      switchClass: "data-[state=checked]:bg-rose-500",
                    },
                    {
                      label: "Relatórios de IA Semanais",
                      description: "Resumo preditivo toda segunda-feira",
                      checked: weeklyReports,
                      onChange: setWeeklyReports,
                      switchClass: "",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 hover:bg-white/[0.02] light:hover:bg-zinc-50 rounded-xl transition-colors">
                      <div>
                        <p className="font-semibold text-white light:text-zinc-900 text-sm">{item.label}</p>
                        <p className="text-xs text-zinc-500 light:text-zinc-400 mt-0.5">{item.description}</p>
                      </div>
                      <Switch
                        checked={item.checked}
                        onCheckedChange={item.onChange}
                        className={item.switchClass}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
