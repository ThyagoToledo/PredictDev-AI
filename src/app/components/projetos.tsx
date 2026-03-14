import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Plus, Search, Filter, MoreHorizontal, FolderKanban, TrendingUp } from "lucide-react";
import { Input } from "./ui/input";
import { motion, AnimatePresence } from "motion/react";
import { ProjectModal } from "./modals/ProjectModal";
import { PageTransition } from "./PageTransition";

const initialProjects = [
  { id: 1, name: "App Mobile", progress: 60, risk: "Médio", deadline: "15 dias", tasks: 24, completedTasks: 14, team: 4 },
  { id: 2, name: "API Financeira", progress: 30, risk: "Alto", deadline: "20 dias", tasks: 32, completedTasks: 10, team: 3 },
  { id: 3, name: "Website SaaS", progress: 80, risk: "Baixo", deadline: "5 dias", tasks: 18, completedTasks: 14, team: 5 },
  { id: 4, name: "Dashboard Analytics", progress: 45, risk: "Médio", deadline: "18 dias", tasks: 28, completedTasks: 13, team: 4 },
  { id: 5, name: "Sistema de Pagamentos", progress: 25, risk: "Alto", deadline: "25 dias", tasks: 40, completedTasks: 10, team: 6 },
];

const getRiskStyle = (risk: string) => {
  switch (risk) {
    case "Baixo": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 light:bg-emerald-50 light:text-emerald-600 light:border-emerald-200";
    case "Médio": return "bg-amber-500/10 text-amber-400 border-amber-500/20 light:bg-amber-50 light:text-amber-600 light:border-amber-200";
    case "Alto": return "bg-red-500/10 text-red-400 border-red-500/20 light:bg-red-50 light:text-red-600 light:border-red-200";
    default: return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
  }
};

const getProgressColor = (progress: number) => {
  if (progress >= 70) return "from-emerald-500 to-emerald-400";
  if (progress >= 40) return "from-amber-500 to-amber-400";
  return "from-red-500 to-red-400";
};

interface ProjectData {
  name: string;
  description: string;
  deadline: string;
  teamSize: number;
  risk: string;
}

export function Projetos() {
  const [projects, setProjects] = useLocalStorage("saas-projetos", initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreateProject = (data: ProjectData) => {
    const newProject = {
      id: projects.length + 1,
      name: data.name,
      progress: 0,
      risk: data.risk,
      deadline: data.deadline || "—",
      tasks: 0,
      completedTasks: 0,
      team: data.teamSize,
    };
    setProjects(prev => [newProject, ...prev]);
  };

  return (
    <PageTransition>
      <div className="p-5 md:p-8 space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-1 h-6 bg-gradient-to-b from-[#4F46E5] to-[#06B6D4] rounded-full" />
              <h1 className="text-3xl font-extrabold text-white light:text-zinc-900 tracking-tight">Projetos</h1>
            </div>
            <p className="text-zinc-400 light:text-zinc-500 ml-3">
              <span className="font-semibold text-white light:text-zinc-900">{projects.length}</span> projetos — {projects.filter(p => p.risk === "Alto").length} em risco
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] hover:opacity-90 text-white border-0 shadow-lg shadow-indigo-500/20 rounded-xl"
            >
              <Plus className="w-4 h-4 mr-2" />
              Novo Projeto
            </Button>
          </motion.div>
        </div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-2 bg-zinc-900/50 light:bg-white backdrop-blur-xl border border-white/5 light:border-zinc-200 shadow-xl light:shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 light:text-zinc-400 w-4 h-4" />
                <Input
                  placeholder="Buscar projetos..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 bg-transparent border-none text-white light:text-zinc-900 focus-visible:ring-0 placeholder:text-zinc-500 light:placeholder:text-zinc-400 h-10 text-sm"
                />
              </div>
              <div className="w-px h-6 bg-white/10 light:bg-zinc-200 mx-1" />
              <Button variant="ghost" className="text-zinc-400 light:text-zinc-500 hover:text-white light:hover:text-zinc-900 hover:bg-white/5 light:hover:bg-zinc-50 text-sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Em Andamento", value: projects.filter(p => p.progress < 100 && p.progress > 0).length, color: "text-indigo-400", bg: "bg-indigo-500/10 light:bg-indigo-50", border: "border-indigo-500/20 light:border-indigo-200" },
            { label: "Risco Alto", value: projects.filter(p => p.risk === "Alto").length, color: "text-red-400", bg: "bg-red-500/10 light:bg-red-50", border: "border-red-500/20 light:border-red-200" },
            { label: "Bom Progresso", value: projects.filter(p => p.progress >= 60).length, color: "text-emerald-400", bg: "bg-emerald-500/10 light:bg-emerald-50", border: "border-emerald-500/20 light:border-emerald-200" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06 }}
            >
              <Card className={`p-4 bg-zinc-900/50 light:bg-white backdrop-blur-xl border ${stat.border} shadow-lg light:shadow-sm text-center`}>
                <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-zinc-500 light:text-zinc-400 font-medium mt-0.5">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Projects Table */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="overflow-hidden bg-zinc-900/50 light:bg-white backdrop-blur-xl border border-white/5 light:border-zinc-200 shadow-xl light:shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 light:border-zinc-100 bg-zinc-950/40 light:bg-zinc-50/80">
                    <th className="px-5 py-4 text-xs font-semibold text-zinc-500 light:text-zinc-400 uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <FolderKanban className="w-3.5 h-3.5" />
                        <span>Projeto</span>
                      </div>
                    </th>
                    <th className="px-5 py-4 text-xs font-semibold text-zinc-500 light:text-zinc-400 uppercase tracking-wider">Progresso</th>
                    <th className="px-5 py-4 text-xs font-semibold text-zinc-500 light:text-zinc-400 uppercase tracking-wider">Risco IA</th>
                    <th className="px-5 py-4 text-xs font-semibold text-zinc-500 light:text-zinc-400 uppercase tracking-wider">Prazo</th>
                    <th className="px-5 py-4 text-xs font-semibold text-zinc-500 light:text-zinc-400 uppercase tracking-wider">Tarefas</th>
                    <th className="px-5 py-4 text-xs font-semibold text-zinc-500 light:text-zinc-400 uppercase tracking-wider">Equipe</th>
                    <th className="px-5 py-4 text-xs font-semibold text-zinc-500 light:text-zinc-400 text-right uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04] light:divide-zinc-100">
                  <AnimatePresence>
                    {filteredProjects.map((project, idx) => (
                      <motion.tr
                        key={project.id}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ delay: 0.05 * idx + 0.25 }}
                        className="group hover:bg-white/[0.025] light:hover:bg-zinc-50/80 transition-colors"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#4F46E5]/20 to-[#06B6D4]/20 light:from-indigo-100 light:to-cyan-100 rounded-xl flex items-center justify-center border border-white/5 light:border-indigo-200/60">
                              <TrendingUp className="w-3.5 h-3.5 text-indigo-400 light:text-indigo-500" />
                            </div>
                            <span className="font-semibold text-zinc-100 light:text-zinc-800 group-hover:text-indigo-400 light:group-hover:text-indigo-600 transition-colors text-sm">
                              {project.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center space-x-3 w-40">
                            <div className="flex-1 bg-zinc-800/60 light:bg-zinc-100 rounded-full h-1.5 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${project.progress}%` }}
                                transition={{ duration: 1, delay: 0.5 + idx * 0.05, ease: "easeOut" }}
                                className={`bg-gradient-to-r ${getProgressColor(project.progress)} h-full rounded-full`}
                              />
                            </div>
                            <span className="text-xs font-semibold text-zinc-400 light:text-zinc-500 w-8">
                              {project.progress}%
                            </span>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <Badge variant="outline" className={`${getRiskStyle(project.risk)} text-xs font-medium`}>
                            {project.risk}
                          </Badge>
                        </td>
                        <td className="px-5 py-4">
                          <span className="text-sm text-zinc-300 light:text-zinc-600">{project.deadline}</span>
                        </td>
                        <td className="px-5 py-4">
                          <span className="text-sm text-zinc-300 light:text-zinc-600">
                            <span className="text-white light:text-zinc-800 font-semibold">{project.completedTasks}</span>
                            <span className="text-zinc-600 light:text-zinc-300 mx-1">/</span>
                            {project.tasks}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex -space-x-1.5">
                            {Array.from({ length: Math.min(project.team, 4) }).map((_, i) => (
                              <div
                                key={i}
                                className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] border-2 border-zinc-900 light:border-white flex items-center justify-center text-white text-[9px] font-bold shadow-sm"
                              >
                                {String.fromCharCode(65 + i)}
                              </div>
                            ))}
                            {project.team > 4 && (
                              <div className="w-6 h-6 rounded-full bg-zinc-700 light:bg-zinc-200 border-2 border-zinc-900 light:border-white flex items-center justify-center text-zinc-300 light:text-zinc-600 text-[9px] font-bold shadow-sm">
                                +{project.team - 4}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-5 py-4 text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-zinc-600 hover:text-white light:hover:text-zinc-900 hover:bg-white/10 light:hover:bg-zinc-100 opacity-0 group-hover:opacity-100 transition-all w-8 h-8 rounded-lg"
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>

              {filteredProjects.length === 0 && (
                <div className="py-16 text-center">
                  <FolderKanban className="w-12 h-12 text-zinc-700 light:text-zinc-300 mx-auto mb-3" />
                  <p className="text-zinc-500 light:text-zinc-400">Nenhum projeto encontrado</p>
                </div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateProject}
      />
    </PageTransition>
  );
}
