// src/utils/mockData.js
export const mockUser = {
  nombre: "Ana",
  email: "ana@demo.com",
  idiomaNativo: "en", // código ISO: en = inglés, fr = francés, etc.
  nivelActual: "A2",
  progresoPorcentaje: 42,
  ultimaLeccion: {
    titulo: "Presente de indicativo - verbos regulares",
    id: "leccion-001",
  },
};

export const mockGlosario = {
  palabras: [
    { palabra: "casa", traduccion: "house", categoria: "hogar" },
    { palabra: "comer", traduccion: "to eat", categoria: "verbos" },
    { palabra: "amigo", traduccion: "friend", categoria: "personas" },
    // ... más
  ],
  verbos: [
    { infinitivo: "hablar", presente: "hablo, hablas, habla...", categoria: "regulares -ar" },
    { infinitivo: "comer", presente: "como, comes, come...", categoria: "regulares -er" },
    // ...
  ],
};

export const mockConjugaciones = {
  tiempos: ["Presente", "Pretérito perfecto", "Futuro"],
  verbos: ["hablar", "comer", "vivir"],
  // Podés hacer una estructura más completa después
};

export const mockLeccion = {
  titulo: "Presente de indicativo - verbos regulares",
  explicacion: "En español, los verbos regulares en presente siguen patrones según su terminación: -ar, -er, -ir.",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // placeholder (rickroll por diversión, cámbialo)
  audioUrl: "/audios/ejemplo.mp3", // placeholder
  ejercicios: [
    { tipo: "completar", frase: "Yo _____ (hablar) español.", respuesta: "hablo" },
    { tipo: "multiple", pregunta: "¿Cómo se conjuga 'comer' en yo?", opciones: ["como", "comes", "come"], respuesta: "como" },
  ],
};