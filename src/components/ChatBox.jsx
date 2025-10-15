import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";

export default function ChatBox({ language = "es" }) {
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
        body: JSON.stringify({
          message: userMessage.content,
          language: language, 
        }),
      });
      const data = await res.json();

      const aiMessage = {
        role: "assistant",
        content:
          data.choices?.[0]?.message?.content ||
          (language === "es"
            ? "⚠️ Error al obtener respuesta."
            : "⚠️ Error getting response."),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            language === "es"
              ? "⚠️ Error en la conexión."
              : "⚠️ Connection error.",
        },
      ]);
    }
    setLoading(false);
  };

  return (
    <>
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed top-1/2 right-4 transform -translate-y-1/2 bg-[#4ecdc4] p-4 rounded-full shadow-xl hover:bg-[#3fb3ab] transition z-40"
        >
          <MessageCircle className="w-6 h-6 text-[#0e141b]" />
        </motion.button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            className="fixed top-1/2 right-4 transform -translate-y-1/2 w-[90%] sm:w-72 md:w-80 bg-[#0e141b]/90 backdrop-blur-md border border-[#4ecdc4]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
          >
            <div className="flex justify-between items-center px-4 py-3 border-b border-[#4ecdc4]/30 bg-[#0e141b]/60">
              <h2 className="text-[#4ecdc4] font-semibold flex items-center gap-2">
                🤖 {language === "es" ? "Asistente Pura Vida" : "Pura Vida Assistant"}
              </h2>
              <button onClick={() => setOpen(false)}>
                <X className="w-5 h-5 text-gray-400 hover:text-white transition" />
              </button>
            </div>

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
                  {language === "es" ? "Escribiendo..." : "Typing..."}
                </p>
              )}
            </div>

            <div className="flex items-center border-t border-[#4ecdc4]/30 bg-[#0e141b]/70">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder={
                  language === "es"
                    ? "Escribe tu mensaje..."
                    : "Type your message..."
                }
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
