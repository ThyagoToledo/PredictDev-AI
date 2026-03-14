import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AlertTriangle, TrendingUp, Clock, CheckCircle, XCircle, ArrowRight, BrainCircuit, Zap } from "lucide-react";
import { motion } from "motion/react";
import { PageTransition } from "./PageTransition";
import { useLocalStorage } from "../hooks/useLocalStorage";

const insights = [
  {
    id: 1,
    severity: "high",
    title: "Alto risco de atraso - Projeto API Financeira",
    impact: "Projeto pode atrasar 5 dias",
    reasons: [
      "3 tarefas subestimadas em complexidade",
      "Tempo médio de conclusão 40% acima do esperado",
      "Dependências externas não resolvidas",
    ],
    suggestions: [
      "Adicionar 1 desenvolvedor backend",
      "Dividir tarefa 'Integração Gateway' em 3 subtarefas",
      "Priorizar resolução de dependências bloqueadoras",
    ],
    confidence: 87,
  },
  {
    id: 2,
    severity: "medium",
    title: "Equipe sobrecarregada - App Mobile",
    impact: "Risco de burnout e queda de produtividade",
    reasons: [
      "Dev backend com 8h extras esta semana",
      "2 desenvolvedores trabalhando em 3+ tarefas simultâneas",
      "Reuniões ocupando 35% do tempo produtivo",
    ],
    suggestions: [
      "Redistribuir 2 tarefas para desenvolvedor disponível",
      "Limitar reuniões a 20% do tempo semanal",
      "Considerar contratar desenvolvedor temporário",
    ],
    confidence: 78,
  },
  {
    id: 3,
    severity: "low",
    title: "Boa performance - Website SaaS",
    impact: "Projeto dentro do prazo e qualidade",
    reasons: [
      "Velocidade de entrega 15% acima da média",
      "Baixa taxa de bugs (2% dos commits)",
      "Equipe trabalhando de forma balanceada",
    ],
    suggestions: [
      "Manter o ritmo atual",
      "Documentar boas práticas para outros projetos",
      "Considerar alocar 1 membro para projeto crítico",
    ],
    confidence: 92,
  },
  {
    id: 4,
    severity: "high",
    title: "Débito técnico crescente - Dashboard Analytics",
    impact: "Aumento de 40% no tempo de manutenção",
    reasons: [
      "Código duplicado em 12 módulos",
      "Testes unitários cobrindo apenas 45% do código",
      "4 bibliotecas desatualizadas com vulnerabilidades",
    ],
    suggestions: [
      "Dedicar 1 sprint para refatoração",
      "Aumentar cobertura de testes para 80%",
      "Atualizar dependências críticas imediatamente",
    ],
    confidence: 85,
  },
];

const getSeverityConfig = (severity: string) => {
  switch (severity) {
    case "high":
      return {
        icon: XCircle,
        color: "text-red-500",
        border: "hover:border-red-500/40 light:hover:border-red-300",
        badge: "bg-red-500/10 text-red-400 border-red-500/20 light:bg-red-50 light:text-red-600 light:border-red-200",
        indicator: "bg-gradient-to-b from-red-500 to-red-600",
        glow: "shadow-[0_0_20px_rgba(239,68,68,0.08)]",
        topBar: "bg-gradient-to-r from-red-600 to-red-400",
      };
    case "medium":
      return {
        icon: AlertTriangle,
        color: "text-amber-500",
        border: "hover:border-amber-500/40 light:hover:border-amber-300",
        badge: "bg-amber-500/10 text-amber-400 border-amber-500/20 light:bg-amber-50 light:text-amber-600 light:border-amber-200",
        indicator: "bg-gradient-to-b from-amber-500 to-amber-600",
        glow: "shadow-[0_0_20px_rgba(245,158,11,0.08)]",
        topBar: "bg-gradient-to-r from-amber-500 to-amber-400",
      };
    case "low":
      return {
        icon: CheckCircle,
        color: "text-emerald-500",
        border: "hover:border-emerald-500/40 light:hover:border-emerald-300",
        badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 light:bg-emerald-50 light:text-emerald-600 light:border-emerald-200",
        indicator: "bg-gradient-to-b from-emerald-500 to-emerald-600",
        glow: "shadow-[0_0_20px_rgba(16,185,129,0.08)]",
        topBar: "bg-gradient-to-r from-emerald-500 to-emerald-400",
      };
    default:
      return {
        icon: AlertTriangle,
        color: "text-zinc-500",
        border: "hover:border-zinc-500/40",
        badge: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
        indicator: "bg-zinc-500",
        glow: "",
        topBar: "bg-zinc-500",
      };
  }
};

const getSeverityLabel = (severity: string) => {
  switch (severity) {
    case "high": return "Crítico";
    case "medium": return "Atenção";
    case "low": return "Informativo";
    default: return "Desconhecido";
  }
};

export function Previsoes() {
  const [dataInsights, setDataInsights] = useLocalStorage("saas-insights", insights);

  const handleIgnore = (id: number) => {
    setDataInsights(prev => prev.filter(i => i.id !== id));
  };

  return (
    <PageTransition>
      <div className="p-5 md:p-8 space-y-8 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-2xl" />
            <div className="relative p-3 bg-indigo-500/10 light:bg-indigo-50 rounded-2xl border border-indigo-500/20 light:border-indigo-200">
              <BrainCircuit className="w-7 h-7 text-indigo-400 light:text-indigo-500" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-0.5">
              <div className="w-1 h-6 bg-gradient-to-b from-[#4F46E5] to-[#06B6D4] rounded-full" />
              <h1 className="text-3xl font-extrabold text-white light:text-zinc-900 tracking-tight">Previsões da IA</h1>
            </div>
            <p className="text-zinc-400 light:text-zinc-500 ml-3">Insights inteligentes para otimizar seus projetos</p>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Alertas Críticos", value: "2", icon: XCircle, color: "text-red-400", bg: "bg-red-500/10 light:bg-red-50", border: "border-red-500/20 light:border-red-200" },
            { label: "Requer Atenção", value: "1", icon: AlertTriangle, color: "text-amber-400", bg: "bg-amber-500/10 light:bg-amber-50", border: "border-amber-500/20 light:border-amber-200" },
            { label: "Bom Desempenho", value: "1", icon: CheckCircle, color: "text-emerald-400", bg: "bg-emerald-500/10 light:bg-emerald-50", border: "border-emerald-500/20 light:border-emerald-200" },
            { label: "Confiança Média", value: "85%", icon: Zap, color: "text-indigo-400", bg: "bg-indigo-500/10 light:bg-indigo-50", border: "border-indigo-500/20 light:border-indigo-200" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
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

        {/* Insights List */}
        <div className="space-y-5">
          {dataInsights.map((insight, idx) => {
            const config = getSeverityConfig(insight.severity);
            const Icon = config.icon;

            return (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 + 0.3 }}
              >
                <Card className={`relative overflow-hidden bg-zinc-900/60 light:bg-white backdrop-blur-xl border border-white/5 light:border-zinc-200 ${config.border} shadow-xl light:shadow-sm transition-all duration-300 ${config.glow}`}>
                  {/* Left indicator */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${config.indicator} rounded-r-full`} />

                  <div className="p-6 pl-7">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2.5 rounded-xl bg-zinc-950/40 light:bg-zinc-50 border border-white/5 light:border-zinc-200 shrink-0">
                          <Icon className={`w-5 h-5 ${config.color}`} />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="font-bold text-white light:text-zinc-900 tracking-tight">{insight.title}</h3>
                            <Badge variant="outline" className={`text-xs ${config.badge}`}>
                              {getSeverityLabel(insight.severity)}
                            </Badge>
                          </div>
                          <p className="text-zinc-300 light:text-zinc-600 font-medium">{insight.impact}</p>
                        </div>
                      </div>
                      <div className="text-left sm:text-right shrink-0 bg-zinc-950/40 light:bg-zinc-50 px-4 py-2.5 rounded-xl border border-white/5 light:border-zinc-200">
                        <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider mb-1">Confiança da IA</p>
                        <p className="text-2xl font-black text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text">
                          {insight.confidence}%
                        </p>
                        {/* Mini confidence bar */}
                        <div className="mt-1.5 h-1 bg-zinc-800 light:bg-zinc-200 rounded-full overflow-hidden w-20">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${insight.confidence}%` }}
                            transition={{ duration: 1, delay: idx * 0.1 + 0.5 }}
                            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
                      {/* Reasons */}
                      <div className="bg-zinc-950/30 light:bg-zinc-50 rounded-xl p-4 border border-white/5 light:border-zinc-200">
                        <div className="flex items-center space-x-2 mb-3">
                          <AlertTriangle className="w-4 h-4 text-zinc-500" />
                          <h4 className="font-bold text-white light:text-zinc-800 text-sm">Fatores de Risco</h4>
                        </div>
                        <ul className="space-y-2">
                          {insight.reasons.map((reason, index) => (
                            <li key={index} className="flex items-start space-x-2.5 group">
                              <span className="w-1 h-1 rounded-full bg-zinc-600 light:bg-zinc-300 mt-2 shrink-0 group-hover:bg-zinc-400 transition-colors" />
                              <span className="text-xs text-zinc-400 light:text-zinc-600 group-hover:text-zinc-200 light:group-hover:text-zinc-800 transition-colors">{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Suggestions */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 light:from-indigo-50 light:to-cyan-50 rounded-xl p-4 border border-indigo-500/20 light:border-indigo-200">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-3xl rounded-full" />
                        <div className="flex items-center space-x-2 mb-3 relative z-10">
                          <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 p-1.5 rounded-lg">
                            <TrendingUp className="w-3 h-3 text-white" />
                          </div>
                          <h4 className="font-bold text-white light:text-zinc-800 text-sm">Plano de Ação</h4>
                        </div>
                        <ul className="space-y-2 relative z-10">
                          {insight.suggestions.map((suggestion, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <ArrowRight className="w-3.5 h-3.5 text-cyan-400 light:text-cyan-500 mt-0.5 shrink-0" />
                              <span className="text-xs text-indigo-100/80 light:text-indigo-800 font-medium">{suggestion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/5 light:border-zinc-100">
                      <Button onClick={() => handleIgnore(insight.id)} variant="ghost" className="text-zinc-500 hover:text-zinc-300 light:hover:text-zinc-700 hover:bg-white/5 light:hover:bg-zinc-50 text-sm h-9">
                        <Clock className="w-3.5 h-3.5 mr-2" />
                        Adiar
                      </Button>
                      <Button onClick={() => handleIgnore(insight.id)} variant="ghost" className="text-zinc-400 hover:text-white light:hover:text-zinc-900 hover:bg-white/5 light:hover:bg-zinc-50 text-sm h-9">
                        Ignorar Alerta
                      </Button>
                      <Button onClick={() => handleIgnore(insight.id)} className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] hover:opacity-90 text-white border-0 text-sm h-9 shadow-lg shadow-indigo-500/20 rounded-xl">
                        Aplicar Sugestões
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
