export default async function handler(req, res) {
  try {
    const { message, language } = await req.json();

    // Prompt del sistema según el idioma
    const systemPrompt =
      language === "es"
        ? "Eres un asistente amable y profesional de una agencia llamada Pura Vida Tech. Responde siempre en español, con un tono cercano y claro."
        : "You are a friendly and professional assistant from an agency called Pura Vida Tech. Always reply in English, with a helpful and natural tone.";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error en /api/chat:", error);
    res.status(500).json({ error: "Error en el servidor del chat." });
  }
}
