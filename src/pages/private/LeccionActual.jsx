// src/pages/private/LeccionActual.jsx
import { mockLeccion } from "../../utils/mockData";

export default function LeccionActual() {
  return (
    <div>
      <h1>{mockLeccion.titulo}</h1>

      <section>
        <h2>Explicación</h2>
        <p>{mockLeccion.explicacion}</p>
      </section>

      <section style={{ margin: "2rem 0" }}>
        <h2>Video explicativo</h2>
        <iframe
          width="560"
          height="315"
          src={mockLeccion.videoUrl}
          title="Video explicativo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <section>
        <h2>Ejercicios</h2>
        <ul>
          {mockLeccion.ejercicios.map((ej, idx) => (
            <li key={idx} style={{ margin: "1rem 0" }}>
              <strong>Ejercicio {idx + 1} ({ej.tipo}):</strong><br />
              {ej.frase || ej.pregunta}<br />
              {ej.opciones && <em>Opciones: {ej.opciones.join(" | ")}</em>}<br />
              <strong>Respuesta correcta:</strong> {ej.respuesta}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}