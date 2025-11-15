import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";

/* === TYPING INDICATOR (premium minimal) === */
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 ml-2 mb-1">
      <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce [animation-delay:0ms]"></span>
      <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce [animation-delay:150ms]"></span>
      <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce [animation-delay:300ms]"></span>
    </div>
  );
}

export default function ChatBot({ language = "es", open, setOpen }) {
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  // MOBILE CHECK
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // AUTOSCROLL
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // INTELIGENCIA DEL BOT 
  const handleSmartResponses = (text) => {
    const t = text.toLowerCase();

    /* ======== PRECIOS ======== */
    if (
      t.includes("precio") ||
      t.includes("paquete") ||
      t.includes("coste") ||
      t.includes("cuanto cuesta") ||
      t.includes("price") ||
      t.includes("cost") ||
      t.includes("offer")
    ) {
      return language === "es"
        ? `¡Con gusto! Tenemos 2 paquetes principales:

• **Paquete Básico: ₡180.000 (US $400)** – Página moderna, 100% responsive, WhatsApp integrado, SEO inicial.  
• **Paquete Premium: ₡350.000 (US $700)** – Todo lo anterior + diseño avanzado, animaciones, más secciones, branding, sistema multilenguaje.

¿Querés que te recomiende uno según tu negocio?`
        : `Sure! We have 2 main packages:

• **Basic: $400** – Modern site, responsive, WhatsApp, basic SEO  
• **Premium: $700** – Advanced design, animations, branding, multi-language

Want me to recommend the best option for you?`;
    }

    /* ======== DEMOS ======== */
    if (
      t.includes("demo") ||
      t.includes("demos") ||
      t.includes("portfolio") ||
      t.includes("projects") ||
      t.includes("trabajos") ||
      t.includes("ejemplos")
    ) {
      window.location.href = "#trabajos";
      return language === "es"
        ? `¡Aquí están nuestros demos! 👇`
        : `Here are our demos! 👇`;
    }

    /* ======== TIEMPO DE ENTREGA ======== */
    if (
      t.includes("tiempo") ||
      t.includes("tarda") ||
      t.includes("entrega") ||
      t.includes("cuanto dura") ||
      t.includes("days") ||
      t.includes("how long")
    ) {
      return language === "es"
        ? `Desarrollamos tu página en **5 a 7 días hábiles** dependiendo del paquete.  
Si necesitás algo urgente, también hacemos entregas rápidas.`
        : `We deliver your website in **5 to 7 business days**, depending on the package. Rush delivery is also available.`;
    }

    /* ======== SEO / GOOGLE ======== */
    if (
      t.includes("seo") ||
      t.includes("google") ||
      t.includes("buscar") ||
      t.includes("posicionamiento")
    ) {
      return language === "es"
        ? `Todas nuestras páginas incluyen **SEO básico**, velocidad optimizada y estructura para posicionar en Google.`
        : `All our websites include **basic SEO**, speed optimization and structure ready for Google ranking.`;
    }

    /* ======== ECOMMERCE ======== */
    if (
      t.includes("tienda") ||
      t.includes("ecommerce") ||
      t.includes("pago") ||
      t.includes("carrito") ||
      t.includes("shop")
    ) {
      return language === "es"
        ? `¡Claro! Podemos integrar tienda online con carrito, pagos, inventario y notificaciones.`
        : `Absolutely! We can integrate a full online shop with payments, inventory and more.`;
    }

    /* ======== RESERVAS / CITAS ======== */
    if (
      t.includes("cita") ||
      t.includes("reservar") ||
      t.includes("booking") ||
      t.includes("appointment")
    ) {
      return language === "es"
        ? `Podemos agregar un sistema de **reservas o citas** con calendario, horarios y WhatsApp automático.`
        : `We can add a **booking/appointment system** with calendar and WhatsApp confirmations.`;
    }

    /* ======== CONTACTO ======== */
    if (
      t.includes("contacto") ||
      t.includes("contact") ||
      t.includes("whatsapp") ||
      t.includes("telefono") ||
      t.includes("number")
    ) {
      window.location.href = "#contacto";
      return language === "es"
        ? `Te dejo la sección de contacto. O si preferís, escribime directo al WhatsApp.`
        : `Here is the contact section. Or feel free to text me on WhatsApp.`;
    }

    /* ======== SERVICIOS ======== */
    if (
      t.includes("servicios") ||
      t.includes("service") ||
      t.includes("web") ||
      t.includes("design") ||
      t.includes("diseño")
    ) {
      window.location.href = "#services";
      return language === "es"
        ? `Aquí están nuestros servicios detallados 👇`
        : `Here are our detailed services 👇`;
    }

    /* ======== PREGUNTAS GENERALES ======== */
    if (
      t.includes("hola") ||
      t.includes("hello") ||
      t.includes("hey") ||
      t.includes("buenas") ||
      t.includes("pura vida")
    ) {
      return language === "es"
        ? `¡Pura vida! ¿Qué te gustaría saber sobre nuestros precios, Trabajos, WhatsApp, Tiempo de Entrega o servicios?`
        : `Pura vida! What would you like to know about pricing, Our Work's, WhatsApp, Delivery Time or services?`;
    }

    /* ======== QUIÉNES SOMOS ======== */
    if (t.includes("nosotros") || t.includes("about")) {
      window.location.href = "#nosotros";
      return language === "es"
        ? `Somos Pura Vida Tech, creadores ticos ayudando a negocios a crecer digitalmente.`
        : `We are Pura Vida Tech, helping businesses grow online.`;
    }

    /* ======== DESPEDIDA ======== */
    if (
      t.includes("gracias") ||
      t.includes("thank") ||
      t.includes("appreciate")
    ) {
      return language === "es"
        ? `¡Con mucho gusto! Si ocupás algo más, aquí estoy ✨`
        : `My pleasure! Let me know if you need anything else ✨`;
    }

    /* ======== DEFAULT ======== */
    return language === "es"
      ? `Puedo ayudarte con precios, demos, tiempo de entrega, servicios, tiendas online, reservas, SEO, diseño y más. ¿Qué ocupás saber?`
      : `I can help with pricing, demos, delivery time, services, online stores, booking, SEO and more. What would you like to know?`;
  };

  // === SEND MESSAGE ===
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { id: crypto.randomUUID(), role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true);

    await new Promise((res) => setTimeout(res, 900 + input.length * 15));

    setIsTyping(false);

    const reply = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: handleSmartResponses(input),
    };

    setMessages((prev) => [...prev, reply]);
  };

  return (
    <>
      {/* === CHAT WINDOW PREMIUM === */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.25 }}
            className={`
              fixed
              ${isMobile ? "bottom-22 right-10 w-[82vw]"
                : "bottom-48 right-9 w-[22rem]"}
              bg-[#0b0f14]/95
              backdrop-blur-2xl
              border border-white/10
              rounded-7xl
              shadow-[0_0_35px_rgba(0,0,0,0.5)]
              flex flex-col
              z-[999]
            `}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/10 flex justify-between items-center bg-white/5 backdrop-blur-xl">
              <h2 className="text-white font-semibold text-lg">Pura Vida Assistant</h2>

              <button onClick={() => setOpen(false)}>
                <X className="w-6 h-6 text-white/70 hover:text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 max-h-96 text-sm">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-xl w-fit max-w-[85%] ${msg.role === "user"
                      ? "ml-auto bg-[#1a232c] text-white border border-white/10 shadow-sm"
                      : "bg-white/10 text-white border border-white/5 shadow-sm"
                    }`}
                >
                  {msg.content}
                </motion.div>
              ))}

              {isTyping && <TypingIndicator />}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center border-t border-white/10 bg-[#0d131a]/80 backdrop-blur-xl px-3 py-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder={language === "es" ? "Escribí tu mensaje..." : "Type your message..."}
                className="flex-1 bg-transparent text-white px-3 py-2 text-sm placeholder-white/40 focus:outline-none"
              />

              <button
                onClick={sendMessage}
                className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
