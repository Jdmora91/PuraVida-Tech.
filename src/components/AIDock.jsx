import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Bot, ArrowUp, Menu } from "lucide-react";

export default function AIDock({ openChatbot, language = "es" }) {
  const [open, setOpen] = useState(false);

  const phone = "5067027792";
  const msg =
    language === "es"
      ? encodeURIComponent("¡Hola! Estoy interesado en una página web. 😄")
      : encodeURIComponent("Hi! I'm interested in a website. 😄");

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-40 z-[9999]">

      {/* === BOTÓN PRINCIPAL (ORBE HOVER) === */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.15 }}
        animate={{
          boxShadow: open
            ? "0 0 25px rgba(78,205,196,0.45)"
            : "0 0 15px rgba(78,205,196,0.25)",
        }}
        className="
          w-16 h-16 rounded-2xl
          bg-[#0b0f14]/90
          border border-white/10
          shadow-[0_0_25px_rgba(78,205,196,0.25)]
          backdrop-blur-xl
          flex items-center justify-center
          text-white
        "
      >
        <Menu className="w-7 h-7" />
      </motion.button>

      {/* === MENU FLOTANTE (HOLOGRÁFICO) === */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: -10, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="
              absolute bottom-20 right-1
              bg-[#0a0f14]/95
              rounded-3xl
              border border-white/10
              shadow-[0_0_25px_rgba(0,0,0,0.45)]
              backdrop-blur-2xl
              px-4 py-4
              flex flex-col gap-4
            "
          >
            {/* === ChatBot === */}
            <motion.button
              onClick={() => { openChatbot();
                setOpen(false);
              }}
              whileHover={{ scale: 1.1 }}
              className="
                w-14 h-14 rounded-2xl
                bg-gradient-to-br from-[#4ecdc4] to-[#0ea5e9]
                flex items-center justify-center text-white shadow-lg
              "
            >
              <Bot className="w-7 h-7" />
            </motion.button>

            {/* === WhatsApp === */}
            <motion.a
              href={`https://wa.me/${phone}?text=${msg}`}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="
                w-14 h-14 rounded-2xl
                bg-[#25D366]
                flex items-center justify-center text-white shadow-lg
              "
            >
              <MessageCircle className="w-7 h-7" />
            </motion.a>

            {/* === Scroll to Top === */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.1 }}
              className="
                w-12 h-12 rounded-2xl
                bg-white/10 border border-white/20
                flex items-center justify-center text-white shadow-md
              "
            >
              <ArrowUp className="w-7 h-7" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
