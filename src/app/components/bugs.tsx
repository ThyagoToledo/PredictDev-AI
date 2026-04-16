import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Bug, AlertCircle, FileCode, TrendingUp, ShieldAlert, Cpu, ExternalLink, Trash2 } from "lucide-react";
import { motion } from "motion/react";
import { PageTransition } from "./PageTransition";
import { useLocalStorage } from "../hooks/useLocalStorage";

const predictedBugs = [
  {
    id: 1,
    type: "Memory Leak",
    probability: 85,
    file: "auth_service.js",
    line: 142,
    description: "Possível vazamento de memória em listeners de eventos não removidos",
    project: "API Financeira",
    severity: "critical",
    detectedAt: "2026-03-12",
    pattern: "Event listeners criados sem cleanup no useEffect",
  },
  {
    id: 2,
    type: "Null Reference",
    probability: 78,
    file: "user_profile.tsx",
    line: 89,
    description: "Acesso a propriedade sem validação de null/undefined",
    project: "App Mobile",
    severity: "high",
    detectedAt: "2026-03-12",
    pattern: "Acesso direto a user.profile.avatar sem optional chaining",
  },
  {
    id: 3,
    type: "Race Condition",
    probability: 72,
    file: "payment_processor.js",
    line: 234,
    description: "Condição de corrida em processamento assíncrono",
    project: "Sistema de Pagamentos",
    severity: "high",
    detectedAt: "2026-03-11",
    pattern: "Múltiplas promises sem controle de ordem de execução",
  },
  {
    id: 4,
    type: "SQL Injection",
    probability: 68,
    file: "database_query.js",
    line: 56,
    description: "Query construída com concatenação de strings",
    project: "Dashboard Analytics",
    severity: "critical",
    detectedAt: "2026-03-11",
    pattern: "Interpolação de variáveis não sanitizadas em query SQL",
  },
];

const getSeverityConfig = (severity: string) => {
  switch (severity) {
    case "critical":
      return {
        color: "text-rose-400",
        bg: "bg-rose-500/10 light:bg-rose-50",
        border: "border-rose-500/20 light:border-rose-200",
        badge: "bg-rose-500/10 text-rose-400 border-rose-500/20 light:bg-rose-50 light:text-rose-600 light:border-rose-200",
        label: "Crítico",
        indicator: "bg-gradient-to-b from-rose-500 to-rose-600",
      };
    case "high":
      return {
        color: "text-amber-400",
        bg: "bg-amber-500/10 light:bg-amber-50",
        border: "border-amber-500/20 light:border-amber-200",
        badge: "bg-amber-500/10 text-amber-400 border-amber-500/20 light:bg-amber-50 light:text-amber-600 light:border-amber-200",
        label: "Alto",
        indicator: "bg-gradient-to-b from-amber-500 to-amber-600",
      };
    default:
      return {
        color: "text-zinc-400",
        bg: "bg-zinc-500/10",
        border: "border-zinc-500/20",
        badge: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
        label: "Médio",
        indicator: "bg-zinc-500",
      };
  }
};

const getProbabilityColor = (p: number) => {
  if (p >= 80) return { text: "text-rose-400", stroke: "#f43f5e" };
  if (p >= 60) return { text: "text-amber-400", stroke: "#f59e0b" };
  return { text: "text-yellow-400", stroke: "#eab308" };
};

export function Bugs() {
  const [bugs, setBugs] = useLocalStorage("saas-bugs", predictedBugs);

  const handleIgnore = (id: number) => {
    setBugs(prev => prev.filter(b => b.id !== id));
  };

  return (
    <PageTransition>
      <div className="p-5 md:p-8 space-y-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-0 bg-rose-500/20 blur-xl rounded-2xl" />
            <div className="relative p-3 bg-rose-500/10 light:bg-rose-50 rounded-2xl border border-rose-500/20 light:border-rose-200">
              <ShieldAlert className="w-7 h-7 text-rose-400 light:text-rose-500" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-0.5">
              <div className="w-1 h-6 bg-gradient-to-b from-rose-500 to-[#4F46E5] rounded-full" />
              <h1 className="text-3xl font-extrabold text-white light:text-zinc-900 tracking-tight">Bugs Previstos</h1>
            </div>
            <p className="text-zinc-400 light:text-zinc-500 ml-3">IA analisando código e histórico para prever vulnerabilidades</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Bugs Críticos", value: "2", icon: AlertCircle, color: "text-rose-400", bg: "bg-rose-500/10 light:bg-rose-50", border: "border-rose-500/20 light:border-rose-200" },
            { label: "Alta Severidade", value: "2", icon: Bug, color: "text-amber-400", bg: "bg-amber-500/10 light:bg-amber-50", border: "border-amber-500/20 light:border-amber-200" },
            { label: "Linhas Analisadas", value: "1.2k", icon: FileCode, color: "text-cyan-400", bg: "bg-cyan-500/10 light:bg-cyan-50", border: "border-cyan-500/20 light:border-cyan-200" },
            { label: "Prob. Média", value: "76%", icon: TrendingUp, color: "text-indigo-400", bg: "bg-indigo-500/10 light:bg-indigo-50", border: "border-indigo-500/20 light:border-indigo-200" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className={`p-5 bg-zinc-900/50 light:bg-white backdrop-blur-xl border ${stat.border} shadow-lg light:shadow-sm group relative overflow-hidden`}>
                <div className={`absolute -right-4 -top-4 w-20 h-20 ${stat.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <p className="text-xs font-medium text-zinc-500 light:text-zinc-400 mb-1">{stat.label}</p>
                    <h3 className="text-2xl font-bold text-white light:text-zinc-900">{stat.value}</h3>
                  </div>
                  <div className={`p-2.5 rounded-xl ${stat.bg} border ${stat.border}`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bug Cards */}
        <div className="space-y-5">
          {bugs.map((bug, idx) => {
            const config = getSeverityConfig(bug.severity);
            const probColors = getProbabilityColor(bug.probability);
            const circumference = 2 * Math.PI * 34;

            return (
              <motion.div
                key={bug.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 + 0.2 }}
              >
                <Card className="overflow-hidden bg-zinc-900/60 light:bg-white backdrop-blur-xl border border-white/5 light:border-zinc-200 hover:border-white/10 light:hover:border-zinc-300 shadow-xl light:shadow-sm transition-all group relative">
                  <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${config.indicator} rounded-r-full`} />

                  <div className="p-6 pl-7">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-5">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] p-3 rounded-xl shadow-lg shrink-0">
                          <Cpu className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="font-bold text-white light:text-zinc-900 tracking-tight">{bug.type}</h3>
                            <Badge variant="outline" className={`text-xs ${config.badge}`}>
                              {config.label}
                            </Badge>
                            <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 light:bg-cyan-50 light:text-cyan-700 light:border-cyan-200 text-xs">
                              {bug.project}
                            </Badge>
                          </div>
                          <p className="text-zinc-300 light:text-zinc-600 font-medium text-sm mb-4">{bug.description}</p>
                          <div className="inline-flex flex-wrap items-center gap-4 text-xs text-zinc-400 bg-zinc-950/40 light:bg-zinc-50 p-3 rounded-xl border border-white/5 light:border-zinc-200">
                            <div className="flex items-center space-x-2">
                              <FileCode className="w-3.5 h-3.5 text-indigo-400" />
                              <span className="font-mono text-zinc-300 light:text-zinc-700">{bug.file}</span>
                              <span className="text-zinc-600">:</span>
                              <span className="font-mono text-cyan-400 light:text-cyan-600">{bug.line}</span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                              <span className="w-1 h-1 rounded-full bg-zinc-600" />
                              <span className="text-zinc-500 light:text-zinc-400">
                                Detectado: {new Date(bug.detectedAt).toLocaleDateString('pt-BR')}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Probability Circle */}
                      <div className="flex flex-col items-center shrink-0 bg-zinc-950/30 light:bg-zinc-50 p-4 rounded-xl border border-white/5 light:border-zinc-200">
                        <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-2">Probabilidade</p>
                        <div className="relative w-20 h-20">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle cx="40" cy="40" r="34" stroke="rgba(255,255,255,0.06)" strokeWidth="5" fill="none" />
                            <motion.circle
                              initial={{ strokeDasharray: `0 ${circumference}` }}
                              whileInView={{ strokeDasharray: `${(bug.probability / 100) * circumference} ${circumference}` }}
                              transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.1 }}
                              cx="40" cy="40" r="34"
                              stroke={probColors.stroke}
                              strokeWidth="5"
                              fill="none"
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className={`text-lg font-black ${probColors.text}`}>
                              {bug.probability}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pattern */}
                    <div className="bg-zinc-950/40 light:bg-zinc-50 p-4 rounded-xl border border-white/5 light:border-zinc-200 mb-5">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="w-4 h-4 text-zinc-500 light:text-zinc-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-zinc-300 light:text-zinc-700 mb-1.5">Padrão de Código Detectado</p>
                          <code className="text-xs text-zinc-400 light:text-zinc-600 bg-zinc-900/50 light:bg-white px-3 py-1.5 rounded-lg border border-white/5 light:border-zinc-200 block font-mono">
                            {bug.pattern}
                          </code>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center justify-end gap-2 pt-4 border-t border-white/5 light:border-zinc-100">
                      <Button variant="ghost" className="text-zinc-400 light:text-zinc-500 hover:text-white light:hover:text-zinc-900 hover:bg-white/5 light:hover:bg-zinc-50 text-sm h-9">
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        Ver Código
                      </Button>
                      <Button variant="ghost" onClick={() => handleIgnore(bug.id)} className="text-zinc-400 hover:text-rose-400 hover:bg-rose-500/10 light:hover:bg-rose-50 text-sm h-9">
                        <Trash2 className="w-3.5 h-3.5 mr-1.5" />
                        Ignorar
                      </Button>
                      <Button onClick={() => handleIgnore(bug.id)} className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] hover:opacity-90 text-white border-0 text-sm h-9 shadow-lg shadow-indigo-500/20 rounded-xl">
                        Criar Issue
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}
