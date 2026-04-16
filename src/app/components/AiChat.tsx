import { useState, useRef, useEffect } from "react";
import { Brain, X, Send, Sparkles, Loader2, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// API Key do Gemini carregado da variável de ambiente VITE_GEMINI_API_KEY
// NUNCA insira a chave diretamente no código - configure no Vercel ou .env
const ENV_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

export function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Olá! Sou seu assistente de IA integrado com Gemini. Como posso ajudar com sua gestão hoje?' }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput("");
    setIsLoading(true);

    try {
      const storedKeyData = localStorage.getItem("saas-apiKey");
      const userApiKey = storedKeyData ? JSON.parse(storedKeyData) : "";
      const currentApiKey = userApiKey || ENV_API_KEY;

      if (!currentApiKey || currentApiKey === "COLOQUE_SUA_API_KEY_AQUI") {
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'ai', text: 'Erro: API KEY do Gemini não configurada. Configure nas Configurações, no arquivo AiChat.tsx ou no .env.' }]);
          setIsLoading(false);
        }, 1000);
        return;
      }

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${currentApiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userMsg }] }],
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || "Erro na API Gemini");
      }

      const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Desculpe, não consegui processar essa resposta.";
      setMessages(prev => [...prev, { role: 'ai', text: replyText }]);

    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: 'Ocorreu um erro ao conectar com o Gemini. Verifique a API Key e sua conexão.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg border outline-none
          bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] opacity-90 border-white/20 hover:opacity-100 hover:scale-110 transition-all duration-300
          ${isOpen ? 'hidden' : 'flex'} items-center justify-center`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Sparkles className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-80 md:w-96 h-[500px] flex flex-col bg-zinc-950/95 light:bg-white backdrop-blur-xl border border-white/10 light:border-zinc-200 shadow-2xl rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 light:border-zinc-100 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#06B6D4]">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white light:text-zinc-900 text-sm">Gemini Assistant</h3>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    <span className="text-[10px] text-zinc-400 font-medium">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white light:hover:text-zinc-800 hover:bg-white/10 light:hover:bg-zinc-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-3 w-full ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`p-2 rounded-xl shrink-0 ${msg.role === 'user' ? 'bg-indigo-500' : 'bg-zinc-800 light:bg-zinc-100'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white light:text-zinc-700" />}
                  </div>
                  <div className={`max-w-[75%] p-3 rounded-2xl text-sm ${msg.role === 'user' 
                    ? 'bg-indigo-500 text-white rounded-tr-sm' 
                    : 'bg-zinc-900 light:bg-zinc-50 border border-white/5 light:border-zinc-200 text-zinc-300 light:text-zinc-700 rounded-tl-sm'}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3 w-full">
                  <div className="p-2 rounded-xl bg-zinc-800 light:bg-zinc-100 shrink-0">
                    <Bot className="w-4 h-4 text-white light:text-zinc-700" />
                  </div>
                  <div className="p-3 rounded-2xl bg-zinc-900 light:bg-zinc-50 border border-white/5 light:border-zinc-200 rounded-tl-sm flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 text-indigo-400 animate-spin" />
                    <span className="text-xs text-zinc-400">Gemini está pensando...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="p-4 border-t border-white/10 light:border-zinc-100 bg-zinc-950/50 light:bg-white">
              <div className="flex items-center space-x-2 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Pergunte ao Gemini..."
                  className="flex-1 bg-zinc-900 light:bg-zinc-100 border border-white/10 light:border-zinc-300 text-white light:text-zinc-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-indigo-500/50 transition-colors placeholder:text-zinc-500"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-1.5 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50 disabled:hover:bg-indigo-500 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-center text-[10px] text-zinc-500 mt-2">
                Powered by Google Gemini
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
