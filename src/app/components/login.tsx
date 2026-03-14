import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Brain, Github, Mail, ArrowRight, Eye, EyeOff, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { ThemeToggle } from "./ui/theme-toggle";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#030303] light:bg-zinc-50">
      {/* Theme Toggle - top right */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      {/* Background Image - dark mode only */}
      <div className="absolute inset-0 z-0 light:hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759771963975-8a4885446f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhcmslMjBwdXJwbGUlMjBuZXR3b3JrfGVufDF8fHx8MTc3MzQyODQ3MXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#030303] via-[#030303]/95 to-[#4F46E5]/15" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4F46E5]/15 via-[#030303] to-[#030303]" />
      </div>

      {/* Light mode background */}
      <div className="absolute inset-0 z-0 hidden light:block">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-cyan-50/30" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/60 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Animated Orbs - dark mode */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4F46E5]/20 rounded-full blur-[120px] pointer-events-none z-0 light:hidden"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#06B6D4]/20 rounded-full blur-[120px] pointer-events-none z-0 light:hidden"
      />

      {/* Dot Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] z-0 light:opacity-0" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[420px] p-4 relative z-10"
      >
        <div className="bg-zinc-950/70 light:bg-white backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(79,70,229,0.12)] light:shadow-[0_25px_50px_rgba(0,0,0,0.08)] p-8 space-y-7 border border-white/8 light:border-zinc-200/80 relative overflow-hidden">
          {/* Top shimmer line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F46E5]/70 to-transparent" />

          {/* Header */}
          <div className="text-center space-y-3">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 20 }}
              className="flex justify-center mb-5"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl" />
                <div className="relative bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] p-4 rounded-2xl border border-white/20 shadow-2xl">
                  <Brain className="w-9 h-9 text-white" />
                </div>
              </div>
            </motion.div>

            <h1 className="text-3xl font-black text-white light:text-zinc-900 tracking-tight">
              PredictDev{" "}
              <span className="text-transparent bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text">AI</span>
            </h1>
            <p className="text-zinc-400 light:text-zinc-500">Predictive Intelligence Platform</p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-2 py-3 px-4 bg-white/3 light:bg-zinc-50 rounded-2xl border border-white/5 light:border-zinc-100">
            {[
              { icon: Zap, value: "98%", label: "Precisão" },
              { icon: Brain, value: "1.2k", label: "Bugs evitados" },
              { icon: ArrowRight, value: "34h", label: "Economizados" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-sm font-black text-transparent bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text">{stat.value}</p>
                <p className="text-[10px] text-zinc-600 light:text-zinc-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-300 light:text-zinc-700 font-semibold ml-0.5">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="nome@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zinc-900/50 light:bg-zinc-50 border-white/10 light:border-zinc-200 text-white light:text-zinc-900 placeholder:text-zinc-600 light:placeholder:text-zinc-400 focus-visible:ring-[#4F46E5] focus-visible:border-[#4F46E5] h-12 rounded-xl"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-0.5">
                <Label htmlFor="password" className="text-zinc-300 light:text-zinc-700 font-semibold">Senha</Label>
                <a href="#" className="text-xs text-[#06B6D4] hover:text-indigo-400 transition-colors font-medium">
                  Esqueceu a senha?
                </a>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-zinc-900/50 light:bg-zinc-50 border-white/10 light:border-zinc-200 text-white light:text-zinc-900 placeholder:text-zinc-600 light:placeholder:text-zinc-400 focus-visible:ring-[#4F46E5] focus-visible:border-[#4F46E5] h-12 rounded-xl pr-11"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 light:hover:text-zinc-700 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] hover:opacity-90 text-white border-0 shadow-lg shadow-indigo-500/25 h-12 rounded-xl font-bold text-base group transition-all"
              >
                Acessar Plataforma
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/8 light:border-zinc-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-zinc-950/70 light:bg-white text-zinc-600 text-xs uppercase font-bold tracking-wider">
                Ou continue com
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/dashboard")}
                className="w-full bg-transparent border-white/10 light:border-zinc-200 hover:bg-white/5 light:hover:bg-zinc-50 text-zinc-300 light:text-zinc-700 hover:text-white light:hover:text-zinc-900 h-11 rounded-xl"
              >
                <Mail className="w-4 h-4 mr-2 text-red-400" />
                Google
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/dashboard")}
                className="w-full bg-transparent border-white/10 light:border-zinc-200 hover:bg-white/5 light:hover:bg-zinc-50 text-zinc-300 light:text-zinc-700 hover:text-white light:hover:text-zinc-900 h-11 rounded-xl"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </motion.div>
          </div>
        </div>

        <p className="text-center text-zinc-600 light:text-zinc-400 text-xs mt-6">
          © 2026 PredictDev AI. Todos os direitos reservados.
        </p>
      </motion.div>
    </div>
  );
}