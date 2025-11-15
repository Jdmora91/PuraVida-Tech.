import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Menu } from "lucide-react";
import whatsappIcon from "../assets/icon/whatsapp.svg";

export default function AIDock({ openChatbot, isChatOpen, language = "es" }) {
  const [open, setOpen] = useState(false);

  const phone = "5067027792";
  const msg =
    language === "es"
      ? encodeURIComponent("¡Hola! Estoy interesado en una página web. 😄")
      : encodeURIComponent("Hi! I'm interested in a website. 😄");

  const badgeText =
    language === "es" ? "¿Necesitas ayuda? 🔽" : "Need help? 🔽";

  return (
    <div
      className="
        fixed z-[9999] select-none
        
        /* MOBILE POSITION */
        bottom-5 right-22
        
        /* DESKTOP POSITION */
        md:bottom-22 md:right-8
      "
    >
      {/* === BADGE flotante (solo cuando está cerrado) === */}
      {!open && !isChatOpen && (
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={{
            opacity: 1,
            y: [0, -12, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="
            absolute

            /* MOBILE BADGE SIZE */
            -top-10 right-2 px-3 py-2 text-xs min-w-[110px]

            /* DESKTOP BADGE SIZE */
            md:-top-19 md:right-0
            md:px-8 md:py-4
            md:text-sm
            md:min-w-[150px]

            bg-[#4ecdc4] text-white font-semibold
            rounded-full shadow-lg
            text-center whitespace-nowrap
          "
        >
          {badgeText}
        </motion.div>
      )}

      {/* === BOTÓN PRINCIPAL === */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.13 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: open
            ? "0 0 35px rgba(78,205,196,0.55)"
            : "0 0 20px rgba(78,205,196,0.28)",
        }}
        className="
          /* MOBILE SIZE */
          w-14 h-13 rounded-2xl

          /* DESKTOP SIZE */
          md:w-20 md:h-18

          bg-[#0b0f14]/90
          border border-white/10
          shadow-[0_0_25px_rgba(78,205,196,0.25)]
          backdrop-blur-xl
          flex items-center justify-center
          text-white
        "
      >
        <Menu className="w-7 h-7 md:w-8 md:h-8" />
      </motion.button>

      {/* === MENÚ FLOTANTE === */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: -10, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="
              absolute

              /* MOBILE MENU */
              bottom-14 right-0 px-2 py-3 gap-4

              /* DESKTOP MENU */
              md:bottom-24 md:right-0
              md:px-5 md:py-5
              md:gap-6

              bg-[#0a0f14]/95
              rounded-3xl
              border border-white/10
              shadow-[0_0_35px_rgba(0,0,0,0.55)]
              backdrop-blur-2xl
              flex flex-col
            "
          >
            {/* === ChatBot === */}
            <motion.button
              onClick={() => {
                openChatbot();
                setOpen(false);
              }}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="
                /* MOBILE SIZE */
                w-12 h-12

                /* DESKTOP SIZE */
                md:w-16 md:h-16

                rounded-2xl
                bg-gradient-to-br from-[#4ecdc4] to-[#0ea5e9]
                flex items-center justify-center text-white shadow-xl
                hover:shadow-[0_0_25px_rgba(78,205,196,0.45)]
              "
            >
              <Bot className="w-7 h-7 md:w-8 md:h-8" />
            </motion.button>

            {/* === WhatsApp === */}
            <motion.a
              href={`https://wa.me/${phone}?text=${msg}`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="
                /* MOBILE SIZE */
                w-12 h-12

                /* DESKTOP SIZE */
                md:w-16 md:h-16

                rounded-2xl
                bg-[#25D366]
                flex items-center justify-center shadow-xl
                hover:shadow-[0_0_25px_rgba(37,211,102,0.45)]
              "
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7 md:w-10 md:h-10" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
