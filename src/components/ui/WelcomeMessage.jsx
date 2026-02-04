import { useEffect, useState } from "react";

/*
  Mensajes de bienvenida aleatorios.
  No son críticos para la app.
  Se pueden añadir / quitar sin romper nada.
*/
const MESSAGES = [
  "¡Bienvenido! Hoy es un buen día para aprender español 🇪🇸",
  "Has vuelto. El español también te echaba de menos 😉",
  "Tranquilo, aquí no hay exámenes… de momento 😄",
  "Conjugar los verbos en español cuenta como cardio mental 🧠",
  "Un paso más cerca de pedir tapas sin equivocarte 🍷",
  "Spoiler: hoy también vas a aprender algo nuevo",
  "No prometemos milagros, pero sí español 🇪🇸",
  "Bienvenido, tu cerebro está a punto de trabajar",
  "El español no se aprende solo… pero casi 😉",
  "Vamos poco a poco, como debe ser",
  "Respira. No hay prisa. Solo español.",
  "Aquí nadie se ríe de los errores (mentira, un poco sí 😜)",
  "Aprender español desbloquea nuevos NPCs",
  "¿pensando en jamón?, Te entiendo...",
  "Otro día, otra palabra nueva",
  "Prometemos no usar el subjuntivo hoy… quizá",
  "La sangría te estaba esperando, pero se cansó de esperar",
  "No necesitas ser perfecto, solo constante",
  "Aprender idiomas rejuvenece (eso dicen)",
  "Hoy puede ser el día en que por fin entiendas esa canción 🎶",
  "Bienvenido de nuevo, máquina 💪",
  "No es magia, es práctica",
  "El español no muerde. Normalmente.",
  "Este mensaje desaparecerá… como tus dudas 😄",
  "Aprender también puede ser divertido, si le das la oportunidad",
];

/*
  Este componente:
  - Se muestra solo al cargar
  - Elige un mensaje aleatorio
  - Se oculta solo tras X segundos
*/
export default function WelcomeMessage({ duration = 3000 }) {
  const [visible, setVisible] = useState(true);

  // Elegimos el mensaje SOLO una vez
  const [message] = useState(
    () => MESSAGES[Math.floor(Math.random() * MESSAGES.length)]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      style={{
        padding: "1rem",
        marginBottom: "1rem",
        backgroundColor: "#f0f4ff",
        borderRadius: "8px",
        fontSize: "0.95rem",
      }}
    >
      {message}
    </div>
  );
}
