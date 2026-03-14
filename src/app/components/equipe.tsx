import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Users, Mail, MoreVertical, Briefcase, CheckSquare, UserPlus, Activity } from "lucide-react";
import { motion } from "motion/react";
import { PageTransition } from "./PageTransition";
import { useLocalStorage } from "../hooks/useLocalStorage";

const teamMembers = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Tech Lead",
    email: "ana.silva@email.com",
    projects: 3,
    tasks: 12,
    status: "active",
    workload: 65,
    skills: ["React", "TypeScript", "Node.js"],
  },
  {
    id: 2,
    name: "Bruno Costa",
    role: "Senior Developer",
    email: "bruno.costa@email.com",
    projects: 2,
    tasks: 8,
    status: "active",
    workload: 45,
    skills: ["Python", "Django", "PostgreSQL"],
  },
  {
    id: 3,
    name: "Carla Mendes",
    role: "UX Designer",
    email: "carla.mendes@email.com",
    projects: 4,
    tasks: 15,
    status: "active",
    workload: 75,
    skills: ["Figma", "Tailwind", "Vue.js"],
  },
  {
    id: 4,
    name: "Daniel Oliveira",
    role: "Backend Developer",
    email: "daniel.oliveira@email.com",
    projects: 2,
    tasks: 28,
    status: "busy",
    workload: 95,
    skills: ["Java", "Spring", "AWS"],
  },
];

const getWorkloadColor = (w: number) => {
  if (w >= 90) return { bar: "from-red-500 to-rose-400", text: "text-red-400" };
  if (w >= 70) return { bar: "from-amber-500 to-amber-400", text: "text-amber-400" };
  return { bar: "from-emerald-500 to-emerald-400", text: "text-emerald-400" };
};

const avatarColors = [
  "from-[#4F46E5] to-[#06B6D4]",
  "from-emerald-500 to-cyan-500",
  "from-violet-500 to-purple-600",
  "from-rose-500 to-pink-600",
];

export function Equipe() {
  const [team, setTeam] = useLocalStorage("saas-equipe", teamMembers);

  const handleAddMember = () => {
    const newMember = {
      id: Date.now(),
      name: "Novo Colaborador",
      role: "Desenvolvedor",
      email: `novo.membro${team.length + 1}@email.com`,
      projects: 0,
      tasks: 0,
      status: "active",
      workload: 10,
      skills: ["React", "JavaScript"],
    };
    setTeam(prev => [newMember, ...prev]);
  };

  const handleRemoveMember = (id: number) => {
    setTeam(prev => prev.filter(m => m.id !== id));
  };

  return (
    <PageTransition>
      <div className="p-5 md:p-8 space-y-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-1 h-6 bg-gradient-to-b from-[#4F46E5] to-[#06B6D4] rounded-full" />
              <h1 className="text-3xl font-extrabold text-white light:text-zinc-900 tracking-tight">Equipe</h1>
            </div>
            <p className="text-zinc-400 light:text-zinc-500 ml-3">Gerencie sua equipe e distribua a carga de trabalho</p>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button onClick={handleAddMember} className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] hover:opacity-90 text-white border-0 shadow-lg shadow-indigo-500/20 rounded-xl">
              <UserPlus className="w-4 h-4 mr-2" />
              Adicionar Membro
            </Button>
          </motion.div>
        </div>

        {/* Team Summary */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Total de Membros", value: team.length, icon: Users, color: "text-indigo-400", bg: "bg-indigo-500/10 light:bg-indigo-50", border: "border-indigo-500/20 light:border-indigo-200" },
            { label: "Disponíveis", value: team.filter(m => m.status === "active").length, icon: Activity, color: "text-emerald-400", bg: "bg-emerald-500/10 light:bg-emerald-50", border: "border-emerald-500/20 light:border-emerald-200" },
            { label: "Sobrecarregados", value: team.filter(m => m.workload >= 90).length, icon: CheckSquare, color: "text-rose-400", bg: "bg-rose-500/10 light:bg-rose-50", border: "border-rose-500/20 light:border-rose-200" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className={`p-4 bg-zinc-900/50 light:bg-white backdrop-blur-xl border ${stat.border} shadow-lg light:shadow-sm text-center`}>
                <div className={`w-10 h-10 ${stat.bg} rounded-xl border ${stat.border} flex items-center justify-center mx-auto mb-2`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-zinc-500 light:text-zinc-400 font-medium mt-0.5">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, idx) => {
            const workloadColors = getWorkloadColor(member.workload);
            const avatarGradient = avatarColors[idx % avatarColors.length];

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08 + 0.2 }}
                whileHover={{ y: -4 }}
              >
                <Card className="p-5 bg-zinc-900/50 light:bg-white backdrop-blur-xl border border-white/5 light:border-zinc-200 hover:border-white/10 light:hover:border-zinc-300 hover:bg-zinc-800/40 light:hover:bg-zinc-50 transition-all group relative overflow-hidden h-full flex flex-col shadow-xl light:shadow-sm">
                  {/* Hover accent line */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#4F46E5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Avatar + Menu */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${avatarGradient} blur-lg opacity-30 group-hover:opacity-60 transition-opacity rounded-full`} />
                      <div className={`w-14 h-14 bg-gradient-to-br ${avatarGradient} rounded-2xl flex items-center justify-center text-white text-xl font-black relative z-10 shadow-lg`}>
                        {member.name.charAt(0)}
                      </div>
                    </div>
                    <button onClick={() => handleRemoveMember(member.id)} className="text-zinc-600 hover:text-white light:hover:text-zinc-900 transition-colors p-1 rounded-lg hover:bg-white/5 light:hover:bg-zinc-100">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-bold text-white light:text-zinc-900 mb-0.5 group-hover:text-indigo-400 light:group-hover:text-indigo-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-zinc-500 light:text-zinc-400 font-medium mb-3">{member.role}</p>

                    {/* Email */}
                    <div className="flex items-center space-x-2 text-xs text-zinc-500 light:text-zinc-400 mb-4 bg-zinc-950/40 light:bg-zinc-50 p-2 rounded-xl border border-white/5 light:border-zinc-100">
                      <Mail className="w-3.5 h-3.5 shrink-0 text-indigo-400" />
                      <span className="truncate">{member.email}</span>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-zinc-950/30 light:bg-zinc-50 p-2.5 rounded-xl border border-white/5 light:border-zinc-100 text-center">
                        <div className="flex items-center justify-center space-x-1 text-zinc-500 light:text-zinc-400 mb-1">
                          <Briefcase className="w-3 h-3" />
                          <span className="text-[10px]">Projetos</span>
                        </div>
                        <p className="font-black text-white light:text-zinc-900">{member.projects}</p>
                      </div>
                      <div className="bg-zinc-950/30 light:bg-zinc-50 p-2.5 rounded-xl border border-white/5 light:border-zinc-100 text-center">
                        <div className="flex items-center justify-center space-x-1 text-zinc-500 light:text-zinc-400 mb-1">
                          <CheckSquare className="w-3 h-3" />
                          <span className="text-[10px]">Tarefas</span>
                        </div>
                        <p className="font-black text-white light:text-zinc-900">{member.tasks}</p>
                      </div>
                    </div>

                    {/* Workload */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[10px] text-zinc-500 light:text-zinc-400 uppercase font-semibold tracking-wide">Carga de trabalho</span>
                        <span className={`text-xs font-bold ${workloadColors.text}`}>{member.workload}%</span>
                      </div>
                      <div className="h-1.5 bg-zinc-800/60 light:bg-zinc-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${member.workload}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 + 0.5 }}
                          className={`h-full bg-gradient-to-r ${workloadColors.bar} rounded-full`}
                        />
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {member.skills.slice(0, 3).map((skill) => (
                        <span key={skill} className="text-[10px] px-2 py-0.5 bg-zinc-800/60 light:bg-zinc-100 text-zinc-400 light:text-zinc-600 rounded-full border border-white/5 light:border-zinc-200 font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <Badge
                    variant="outline"
                    className={`self-start text-xs font-medium py-1 ${
                      member.status === "active"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 light:bg-emerald-50 light:text-emerald-600 light:border-emerald-200"
                        : "bg-rose-500/10 text-rose-400 border-rose-500/20 light:bg-rose-50 light:text-rose-600 light:border-rose-200"
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                      member.status === "active"
                        ? "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]"
                        : "bg-rose-400 shadow-[0_0_6px_rgba(251,113,133,0.8)]"
                    }`} />
                    {member.status === "active" ? "Disponível" : "Sobrecarregado"}
                  </Badge>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}
