import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({ language = "es" }) {
  const phone = "5067027792"; 
  const message =
    language === "es"
      ? encodeURIComponent("¡Hola! Estoy interesado en una página web. 😄")
      : encodeURIComponent("Hi! I'm interested in a website. 😄");

  const label =
    language === "es" ? "¡Chatea con nosotros!" : "Chat with us!";

  return (
    <>
      {/* 🌟 DESKTOP VERSION (MD and above) */}
      <div className="hidden md:flex fixed bottom-20 right-9 z-50 flex-col items-center space-y-2">

        {/* Texto flotante */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [1, 0.6, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="px-4 py-2 rounded-full bg-[#25D366] text-white text-sm shadow-lg font-medium w-40 text-center"
        >
          {label}
        </motion.div>

        {/* Botón grande */}
        <motion.a
          href={`https://wa.me/${phone}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.15, boxShadow: "0 0 20px #25D366" }}
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 blur-xl"></span>
          <MessageCircle className="w-8 h-8 text-white relative z-10" />
        </motion.a>
      </div>

      {/* 📱 MOBILE VERSION (Below MD) */}
      <div className="flex md:hidden fixed bottom-6 right-6 z-50">

        <motion.a
          href={`https://wa.me/${phone}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-2xl shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          {/* Glow suave */}
          <span className="absolute inset-0 rounded-2xl bg-[#25D366] opacity-30 blur-xl"></span>

          {/* Icono */}
          <MessageCircle className="w-7 h-7 text-white relative z-10" />
        </motion.a>
      </div>
    </>
  );
}
