import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { AlertCircle, TrendingUp, Clock, Bug, AlertTriangle, Sparkles, Activity, CheckCircle2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { motion } from "motion/react";
import { PageTransition } from "./PageTransition";

const progressData = [
  { day: "Seg", progresso: 15, previsao: 14, prazo: 16 },
  { day: "Ter", progresso: 28, previsao: 28, prazo: 32 },
  { day: "Qua", progresso: 42, previsao: 42, prazo: 48 },
  { day: "Qui", progresso: 55, previsao: 56, prazo: 64 },
  { day: "Sex", progresso: 65, previsao: 70, prazo: 80 },
  { day: "Sáb", progresso: 65, previsao: 84, prazo: 96 },
  { day: "Dom", progresso: 65, previsao: 98, prazo: 100 },
];

const bugTrendData = [
  { month: "Out", bugs: 12 },
  { month: "Nov", bugs: 8 },
  { month: "Dez", bugs: 15 },
  { month: "Jan", bugs: 7 },
  { month: "Fev", bugs: 10 },
  { month: "Mar", bugs: 8 },
];

const aiAlerts = [
  {
    id: 1,
    type: "warning",
    title: "Alto risco de atraso",
    description: "3 tarefas subestimadas no módulo de autenticação",
    suggestion: "Dividir tarefas em subtarefas menores",
  },
  {
    id: 2,
    type: "danger",
    title: "Equipe sobrecarregada",
    description: "Dev backend com 8h extras esta semana",
    suggestion: "Redistribuir 2 tarefas para outro desenvolvedor",
  },
  {
    id: 3,
    type: "info",
    title: "Possível bug detectado",
    description: "Padrão similar a memory leak em auth_service.js",
    suggestion: "Revisar gerenciamento de memória no módulo",
  },
];

const metricCards = [
  {
    title: "Risco do Projeto",
    value: "Médio",
    sub: "67% de probabilidade",
    icon: AlertCircle,
    color: "text-amber-500",
    bg: "bg-amber-500/10 light:bg-amber-50",
    border: "border-amber-500/20 light:border-amber-200",
    badgeClass: "bg-amber-500/15 text-amber-400 border-amber-500/20 light:bg-amber-50 light:text-amber-600 light:border-amber-200",
    glow: "shadow-amber-500/5",
  },
  {
    title: "Previsão de Entrega",
    value: "12 dias",
    sub: "25/03/2026",
    icon: Clock,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 light:bg-cyan-50",
    border: "border-cyan-500/20 light:border-cyan-200",
    badgeClass: "",
    glow: "shadow-cyan-500/5",
  },
  {
    title: "Bugs Previstos",
    value: "8",
    sub: "3 de alta prioridade",
    icon: Bug,
    color: "text-red-400",
    bg: "bg-red-500/10 light:bg-red-50",
    border: "border-red-500/20 light:border-red-200",
    badgeClass: "",
    glow: "shadow-red-500/5",
  },
  {
    title: "Tarefas Completas",
    value: "67%",
    sub: "47 de 70 tarefas",
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 light:bg-emerald-50",
    border: "border-emerald-500/20 light:border-emerald-200",
    badgeClass: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20 light:bg-emerald-50 light:text-emerald-600 light:border-emerald-200",
    glow: "shadow-emerald-500/5",
  },
];

export function Dashboard() {
  return (
    <PageTransition>
      <div className="p-5 md:p-8 space-y-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-1 h-6 bg-gradient-to-b from-[#4F46E5] to-[#06B6D4] rounded-full" />
              <h1 className="text-3xl font-extrabold text-white light:text-zinc-900 tracking-tight">Dashboard</h1>
            </div>
            <p className="text-zinc-400 light:text-zinc-500 ml-3">Visão geral dos seus projetos e previsões da IA</p>
          </div>
          <div className="flex items-center space-x-2 bg-zinc-900/50 light:bg-white px-4 py-2 rounded-xl border border-white/8 light:border-zinc-200">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-zinc-300 light:text-zinc-600">
              <span className="font-semibold text-emerald-400">5</span> projetos ativos
            </span>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metricCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <Card className={`relative overflow-hidden p-5 bg-zinc-900/50 light:bg-white backdrop-blur-xl border border-white/5 light:border-zinc-200 shadow-xl light:shadow-sm hover:shadow-lg transition-all group ${card.glow}`}>
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${card.bg} rounded-r-full`} />
                <div className="flex items-start justify-between relative z-10 pl-2">
                  <div>
                    <p className="text-xs font-medium text-zinc-500 light:text-zinc-400 mb-2 uppercase tracking-wide">{card.title}</p>
                    <h3 className="text-2xl font-bold text-white light:text-zinc-900">{card.value}</h3>
                  </div>
                  <div className={`${card.bg} p-2.5 rounded-xl border ${card.border} group-hover:scale-110 transition-transform`}>
                    <card.icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                </div>
                {card.badgeClass ? (
                  <Badge variant="outline" className={`mt-3 ml-2 text-xs ${card.badgeClass}`}>
                    {card.sub}
                  </Badge>
                ) : (
                  <p className="text-xs text-zinc-500 light:text-zinc-400 mt-3 ml-2 font-medium">{card.sub}</p>
                )}
                {/* Subtle glow blob */}
                <div className={`absolute -right-4 -bottom-4 w-20 h-20 ${card.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Main Progress Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 bg-zinc-900/50 light:bg-white backdrop-blur-xl border border-white/5 light:border-zinc-200 shadow-xl light:shadow-sm h-full">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-bold text-white light:text-zinc-900 mb-0.5">Progresso vs Prazo</h2>
                  <p className="text-xs text-zinc-500 light:text-zinc-400">Acompanhamento em tempo real</p>
                </div>
                <div className="flex items-center space-x-4 text-xs">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-zinc-400 light:text-zinc-500">Real</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#4F46E5]"></div>
                    <span className="text-zinc-400 light:text-zinc-500">IA</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#06B6D4]"></div>
                    <span className="text-zinc-400 light:text-zinc-500">Prazo</span>
                  </div>
                </div>
              </div>
              <div className="h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressData} margin={{ top: 5, right: 10, bottom: 5, left: -20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                    <XAxis dataKey="day" stroke="#52525b" tick={{ fill: '#71717a', fontSize: 11 }} tickLine={false} axisLine={false} />
                    <YAxis stroke="#52525b" tick={{ fill: '#71717a', fontSize: 11 }} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(9, 9, 11, 0.95)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "10px",
                        color: "#fff",
                        backdropFilter: "blur(12px)",
                        fontSize: "12px",
                      }}
                    />
                    <Line type="monotone" dataKey="progresso" stroke="#10b981" strokeWidth={2.5} name="Progresso Real" dot={{ fill: "#10b981", r: 3, strokeWidth: 0 }} activeDot={{ r: 5, strokeWidth: 0 }} />
                    <Line type="monotone" dataKey="previsao" stroke="#4F46E5" strokeWidth={2.5} name="Previsão IA" dot={{ fill: "#4F46E5", r: 3, strokeWidth: 0 }} activeDot={{ r: 5 }} strokeDasharray="5 4" />
                    <Line type="monotone" dataKey="prazo" stroke="#06B6D4" strokeWidth={2.5} name="Prazo" dot={{ fill: "#06B6D4", r: 3, strokeWidth: 0 }} activeDot={{ r: 5, strokeWidth: 0 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>

          {/* Bug Trend Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <Card className="p-6 bg-zinc-900/50 light:bg-white backdrop-blur-xl border border-white/5 light:border-zinc-200 shadow-xl light:shadow-sm h-full">
              <div className="mb-6">
                <h2 className="font-bold text-white light:text-zinc-900 mb-0.5">Tendência de Bugs</h2>
                <p className="text-xs text-zinc-500 light:text-zinc-400">Últimos 6 meses</p>
              </div>
              <div className="h-[120px] mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={bugTrendData} margin={{ top: 5, right: 0, bottom: 0, left: -30 }}>
                    <defs>
                      <linearGradient id="bugGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                    <XAxis dataKey="month" stroke="#52525b" tick={{ fill: '#71717a', fontSize: 10 }} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(9, 9, 11, 0.95)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "12px",
                      }}
                    />
                    <Area type="monotone" dataKey="bugs" stroke="#4F46E5" strokeWidth={2} fill="url(#bugGradient)" name="Bugs" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-400 light:text-zinc-500">Este mês</span>
                  <span className="font-bold text-white light:text-zinc-900">8 bugs</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-400 light:text-zinc-500">Redução vs. anterior</span>
                  <span className="text-emerald-400 font-bold">↓ 20%</span>
                </div>
                <div className="mt-3 pt-3 border-t border-white/5 light:border-zinc-100">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-zinc-400 light:text-zinc-500">Tendência de melhora</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* AI Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          <div className="flex items-center space-x-3 mb-5">
            <div className="p-2 bg-indigo-500/10 light:bg-indigo-50 rounded-xl border border-indigo-500/20 light:border-indigo-200">
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>
            <h2 className="font-bold text-white light:text-zinc-900">Alertas da IA</h2>
            <span className="text-xs bg-indigo-500/10 light:bg-indigo-50 text-indigo-400 light:text-indigo-600 border border-indigo-500/20 light:border-indigo-200 px-2 py-0.5 rounded-full font-medium">3 ativos</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {aiAlerts.map((alert, idx) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 + 0.6 }}
                whileHover={{ y: -4 }}
              >
                <Card
                  className={`h-full overflow-hidden bg-zinc-900/50 light:bg-white backdrop-blur-xl border border-white/5 light:border-zinc-200 shadow-xl light:shadow-sm relative group transition-all duration-300
                    ${alert.type === "danger" ? "hover:border-red-500/40 light:hover:border-red-300"
                      : alert.type === "warning" ? "hover:border-amber-500/40 light:hover:border-amber-300"
                      : "hover:border-cyan-500/40 light:hover:border-cyan-300"}
                  `}
                >
                  <div className={`absolute top-0 left-0 w-full h-0.5 
                    ${alert.type === "danger" ? "bg-gradient-to-r from-red-600 to-red-400"
                      : alert.type === "warning" ? "bg-gradient-to-r from-amber-500 to-amber-400"
                      : "bg-gradient-to-r from-cyan-600 to-cyan-400"}
                  `} />
                  <div className="p-5">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className={`p-2 rounded-xl shrink-0 mt-0.5
                        ${alert.type === "danger" ? "bg-red-500/10 light:bg-red-50"
                          : alert.type === "warning" ? "bg-amber-500/10 light:bg-amber-50"
                          : "bg-cyan-500/10 light:bg-cyan-50"
                        }
                      `}>
                        <AlertCircle className={`w-4 h-4
                          ${alert.type === "danger" ? "text-red-400"
                            : alert.type === "warning" ? "text-amber-400"
                            : "text-cyan-400"
                          }
                        `} />
                      </div>
                      <h3 className="font-bold text-white light:text-zinc-900 text-sm group-hover:text-indigo-400 light:group-hover:text-indigo-600 transition-colors leading-tight">
                        {alert.title}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 light:text-zinc-500 mb-4 leading-relaxed">{alert.description}</p>
                    <div className="bg-zinc-950/40 light:bg-zinc-50 p-3 rounded-xl border border-white/5 light:border-zinc-100">
                      <p className="text-[10px] uppercase tracking-wider font-bold text-indigo-400 light:text-indigo-600 mb-1">Sugestão da IA</p>
                      <p className="text-xs text-zinc-300 light:text-zinc-600">{alert.suggestion}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
