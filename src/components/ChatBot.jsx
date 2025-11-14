import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";

export default function ChatBot({ language = "es" }) {
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const bottomRef = useRef(null);

  // Detectar Mobile/Desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoscroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // === RESPUESTAS AUTOMÁTICAS ===
  const handleSmartResponses = (text) => {
    const t = text.toLowerCase();

    // Paquetes
    if (
      t.includes("paquete") ||
      t.includes("precio") ||
      t.includes("oferta") ||
      t.includes("package") ||
      t.includes("price") ||
      t.includes("offer")
    ) {
      return language === "es"
        ? `¡Pura vida! 😊  
Tenemos dos paquetes estrella:

• **Paquete Básico: ₡180.000 (US $400)** — Contado o sistema de pagos.  
• **Paquete Premium: ₡350.000 (US $700)** — Contado o sistema de pagos.

¿Querés que te muestre las demos o los detalles completos?`
        : `Pura vida! 😊  
We offer two main packages:

• **Basic Package: US $400 (₡180.000)** — One-time or payment plan.  
• **Premium Package: US $700 (₡350.000)** — One-time or payment plan.

Would you like the demos or full details?`;
    }

    // Demos / trabajos
    if (
      t.includes("demo") ||
      t.includes("demos") ||
      t.includes("projects") ||
      t.includes("portfolio") ||
      t.includes("work")
    ) {
      window.location.href = "#trabajos";
      return language === "es"
        ? `¡De una! Te llevo a “Nuestros Trabajos”. 😉`
        : `Sure! Taking you to “Our Work”. 👍`;
    }

    // Servicios
    if (
      t.includes("servicio") ||
      t.includes("services") ||
      t.includes("web") ||
      t.includes("website") ||
      t.includes("design")
    ) {
      window.location.href = "#services";
      return language === "es"
        ? `Hoy quien no tiene web pierde clientes todos los días. ¿Querés ver qué paquete te funciona mejor?`
        : `A business without a website loses customers daily. Want to see which package fits you best?`;
    }

    // Contacto
    if (
      t.includes("contacto") ||
      t.includes("whatsapp") ||
      t.includes("telefono") ||
      t.includes("contact")
    ) {
      window.location.href = "#contacto";
      return language === "es"
        ? `¡Con gusto! Te llevo a la sección de contacto o podés escribirme al WhatsApp. ¡Pura vida!`
        : `Of course! Redirecting you to contact — or you can message me on WhatsApp. Pura vida!`;
    }

    // Saludo
    if (
      t.includes("como estas") ||
      t.includes("how are you") ||
      t.includes("pura vida") ||
      t.includes("?")
    ) {
      return language === "es"
        ? `¡Pura vida! ¿Cómo puedo ayudarte hoy?`
        : `Pura vida! How can I help you today?`;
    }

    // Nosotros
    if (t.includes("nosotros") || t.includes("about") || t.includes("who")) {
      window.location.href = "#nosotros";
      return language === "es"
        ? `Soy un emprendedor tico ayudando a negocios a crecer con internet. Tu web es tu nueva vitrina. ¡Pura vida!`
        : `I’m a Costa Rican creator helping businesses grow online. Your website is your new storefront. Pura vida!`;
    }

    // Despedida
    if (t.includes("gracias") || t.includes("thanks") || t.includes("bye")) {
      return language === "es"
        ? `Con mucho gusto mae. Recordá: cada día sin web es una venta que se pierde. ¡Pura vida! 🌺`
        : `My pleasure! Remember: every day without a website is a sale lost. Pura vida! 🌺`;
    }

    // Respuesta general
    return language === "es"
      ? `Hola! Pura vida 😊 Podés preguntarme por Precios, Quienes Somos, Servicios, Nuestros Trabajos o Contacto.`
      : `Hi! Pura vida 😊 You can ask me about Pricing, About Us, Services, Our Work or Contact.`;
  };

  // === ENVIAR MENSAJE ===
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const replyMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: handleSmartResponses(input),
    };

    setMessages((prev) => [...prev, replyMessage]);
    setInput("");
  };

  return (
    <>
      {/* === BOTÓN FLOATING CHAT === */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`fixed ${
            isMobile ? "bottom-28 right-4 p-4" : "bottom-60 right-18 p-5"
          } rounded-full bg-[#0ea5e9] shadow-2xl hover:scale-110 transition z-50`}
        >
          <span className="absolute inset-0 rounded-full bg-[#0ea5e9] opacity-40 blur-xl"></span>
          <span className="relative z-10 text-white text-3xl">🤖</span>
        </motion.button>
      )}

      {/* === CHAT WINDOW === */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            className={`fixed transform ${
              isMobile
                ? "bottom-4 right-4 w-[88%]"
                : "top-[72%] right-6 w-80 -translate-y-1/2"
            } bg-[#0A0A0A]/95 backdrop-blur-lg border border-[#4ecdc4]/40 rounded-2xl shadow-2xl flex flex-col z-50`}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-[#0ea5e9]/30">
              <h2 className="text-[#4ecdc4] font-semibold">
                🤖 {language === "es" ? "Asistente Pura Vida" : "Pura Vida Assistant"}
              </h2>
              <button onClick={() => setOpen(false)}>
                <X className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 max-h-96 text-sm">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-2 rounded-xl w-fit max-w-[80%] ${
                    msg.role === "user"
                      ? "ml-auto bg-[#4ecdc4]/30 text-[#0B1220]"
                      : "bg-gray-800 text-gray-200"
                  }`}
                >
                  {msg.content}
                </motion.div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center border-t border-[#4ecdc4]/30 bg-[#0e141b]/70">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder={
                  language === "es"
                    ? "Escribí tu mensaje..."
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
