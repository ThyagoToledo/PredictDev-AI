import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FolderKanban, Calendar, Users, AlignLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface ProjectData {
  name: string;
  description: string;
  deadline: string;
  teamSize: number;
  risk: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ProjectData) => void;
}

export function ProjectModal({ isOpen, onClose, onSubmit }: ProjectModalProps) {
  const [formData, setFormData] = useState<ProjectData>({
    name: '',
    description: '',
    deadline: '',
    teamSize: 1,
    risk: 'Baixo',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', description: '', deadline: '', teamSize: 1, risk: 'Baixo' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full max-w-lg z-10"
          >
            <div className="bg-zinc-950 light:bg-white border border-white/10 light:border-zinc-200 rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Top gradient line */}
              <div className="h-1 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4]" />

              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5 light:border-zinc-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                    <FolderKanban className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white light:text-zinc-900">Novo Projeto</h2>
                    <p className="text-xs text-zinc-500 light:text-zinc-400">Preencha os dados do projeto</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-zinc-500 hover:text-white light:hover:text-zinc-900 hover:bg-white/5 light:hover:bg-zinc-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Nome */}
                <div className="space-y-2">
                  <Label className="text-zinc-300 light:text-zinc-700 flex items-center space-x-2">
                    <FolderKanban className="w-4 h-4 text-indigo-400" />
                    <span>Nome do Projeto</span>
                  </Label>
                  <Input
                    placeholder="Ex: App Mobile v2.0"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-zinc-900/50 light:bg-zinc-50 border-white/10 light:border-zinc-200 text-white light:text-zinc-900 placeholder:text-zinc-600 light:placeholder:text-zinc-400 focus-visible:ring-[#4F46E5] h-11 rounded-xl"
                    required
                  />
                </div>

                {/* Descrição */}
                <div className="space-y-2">
                  <Label className="text-zinc-300 light:text-zinc-700 flex items-center space-x-2">
                    <AlignLeft className="w-4 h-4 text-indigo-400" />
                    <span>Descrição</span>
                  </Label>
                  <textarea
                    placeholder="Descreva o objetivo do projeto..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2.5 bg-zinc-900/50 light:bg-zinc-50 border border-white/10 light:border-zinc-200 text-white light:text-zinc-900 placeholder:text-zinc-600 light:placeholder:text-zinc-400 rounded-xl focus:ring-2 focus:ring-[#4F46E5] outline-none resize-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Deadline */}
                  <div className="space-y-2">
                    <Label className="text-zinc-300 light:text-zinc-700 flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>Prazo</span>
                    </Label>
                    <Input
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="bg-zinc-900/50 light:bg-zinc-50 border-white/10 light:border-zinc-200 text-white light:text-zinc-900 focus-visible:ring-[#4F46E5] h-11 rounded-xl"
                      required
                    />
                  </div>

                  {/* Team Size */}
                  <div className="space-y-2">
                    <Label className="text-zinc-300 light:text-zinc-700 flex items-center space-x-2">
                      <Users className="w-4 h-4 text-cyan-400" />
                      <span>Equipe</span>
                    </Label>
                    <Input
                      type="number"
                      min="1"
                      max="50"
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: parseInt(e.target.value) || 1 })}
                      className="bg-zinc-900/50 light:bg-zinc-50 border-white/10 light:border-zinc-200 text-white light:text-zinc-900 focus-visible:ring-[#4F46E5] h-11 rounded-xl"
                    />
                  </div>
                </div>

                {/* Risco Inicial */}
                <div className="space-y-2">
                  <Label className="text-zinc-300 light:text-zinc-700">Risco Estimado</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Baixo', 'Médio', 'Alto'].map((risk) => (
                      <button
                        key={risk}
                        type="button"
                        onClick={() => setFormData({ ...formData, risk })}
                        className={`py-2.5 px-4 rounded-xl border text-sm font-medium transition-all ${
                          formData.risk === risk
                            ? risk === 'Baixo'
                              ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                              : risk === 'Médio'
                              ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                              : 'bg-red-500/20 border-red-500/50 text-red-400'
                            : 'bg-zinc-900/30 light:bg-zinc-50 border-white/10 light:border-zinc-200 text-zinc-500 light:text-zinc-500 hover:border-white/20 light:hover:border-zinc-300'
                        }`}
                      >
                        {risk}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1 bg-transparent border-white/10 light:border-zinc-200 hover:bg-white/5 light:hover:bg-zinc-50 text-zinc-300 light:text-zinc-700 hover:text-white light:hover:text-zinc-900 h-11 rounded-xl"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] hover:opacity-90 text-white border-0 shadow-lg shadow-indigo-500/20 h-11 rounded-xl font-bold"
                  >
                    Criar Projeto
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
