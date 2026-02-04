// src/pages/private/TiemposVerbales.jsx
import { mockConjugaciones } from "../../utils/mockData";

export default function TiemposVerbales() {
  return (
    <div>
      <h1>Tiempos verbales</h1>
      <p>Practica conjugaciones (datos mockeados).</p>

      <h2>Tiempos disponibles</h2>
      <ul>
        {mockConjugaciones.tiempos.map(tiempo => (
          <li key={tiempo}>{tiempo}</li>
        ))}
      </ul>

      <h2>Verbos de ejemplo</h2>
      <ul>
        {mockConjugaciones.verbos.map(verbo => (
          <li key={verbo}>{verbo}</li>
        ))}
      </ul>

      <p>Más adelante: tablas interactivas y ejercicios por verbo/tiempo.</p>
    </div>
  );
}