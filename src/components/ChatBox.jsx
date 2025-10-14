import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content }),
      });
      const data = await res.json();

      const aiMessage = {
        role: "assistant",
        content: data.choices?.[0]?.message?.content || "⚠️ Error al obtener respuesta.",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "assistant", content: "⚠️ Error en la conexión." }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Botón flotante */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-6 right-6 bg-[#4ecdc4] p-4 rounded-full shadow-xl hover:bg-[#3fb3ab] transition"
        >
          <MessageCircle className="w-6 h-6 text-[#0e141b]" />
        </motion.button>
      )}

      {/* Ventana de chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-6 right-6 w-80 bg-[#0e141b]/80 backdrop-blur-md border border-[#4ecdc4]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-[#4ecdc4]/30 bg-[#0e141b]/60">
              <h2 className="text-[#4ecdc4] font-semibold flex items-center gap-2">
                🤖 Asistente Pura Vida
              </h2>
              <button onClick={() => setOpen(false)}>
                <X className="w-5 h-5 text-gray-400 hover:text-white transition" />
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 max-h-96 text-sm">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-2 rounded-xl w-fit max-w-[80%] ${
                    msg.role === "user"
                      ? "ml-auto bg-[#4ecdc4]/30 text-[#4ecdc4]"
                      : "bg-gray-800 text-gray-200"
                  }`}
                >
                  {msg.content}
                </motion.div>
              ))}
              {loading && (
                <p className="text-gray-400 text-xs animate-pulse text-center">
                  Escribiendo...
                </p>
              )}
            </div>

            {/* Input */}
            <div className="flex items-center border-t border-[#4ecdc4]/30 bg-[#0e141b]/70">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-transparent text-white px-3 py-2 text-sm focus:outline-none"
              />
              <button
                onClick={sendMessage}
                className="px-3 py-2 hover:bg-[#4ecdc4]/20 transition"
              >
                <Send className="w-5 h-5 text-[#4ecdc4]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
