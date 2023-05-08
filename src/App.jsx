import { useState } from "react";

export default function App() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [disableClick, setDisableClicks] = useState(false);

  const preguntas = [
    {
      pregunta: "¿Cuál es la capital de Francia?",
      respuestas: ["Londres", "París", "Madrid"],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿En qué país se encuentra la Torre Eiffel?",
      respuestas: ["Italia", "Alemania", "Francia"],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Qué año comenzó la Primera Guerra Mundial?",
      respuestas: ["1945", "1939", "1914"],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Quién escribió el Quijote?",
      respuestas: ["Gabriel García Márquez", "Miguel de Cervantes", "Pablo Neruda"],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Quién pintó la Mona Lisa?",
      respuestas: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
      respuestaCorrecta: 0
    },
    {
      pregunta: "¿En qué continente se encuentra el río Amazonas?",
      respuestas: ["África", "Asia", "Sudamérica"],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Cuál es el planeta más cercano al sol?",
      respuestas: ["Mercurio", "Marte", "Venus"],
      respuestaCorrecta: 0
    },
    {
      pregunta: "¿En qué año se inauguró el Canal de Panamá?",
      respuestas: ["1934", "1944", "1914"],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Cuál es el océano más grande del mundo?",
      respuestas: ["Océano Índico", "Océano Pacífico", "Océano Atlántico"],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Cuál es el deporte más popular en Estados Unidos?",
      respuestas: ["Béisbol", "Baloncesto", "Fútbol americano"],
      respuestaCorrecta: 2
    }
  ];

  const handleRespuesta = (respuestaIndex, e) => {
    setDisableClicks(true);
    const respuestSeleccionada = e.target;
    const pregunta = preguntas[preguntaActual];
    const respuestaCorrecta = pregunta.respuestaCorrecta;

    if (respuestaIndex === respuestaCorrecta) {
      respuestSeleccionada.classList.add("correct-answer");
      setPuntuacion((prevPuntuacion) => prevPuntuacion + 1);
    } else {
      respuestSeleccionada.classList.add("wrong-answer");
    }
  }

  const handleNextPregunta = () => {
    setDisableClicks(false);
    const findRespuesta = document.querySelector(".correct-answer, .wrong-answer");
    const list = findRespuesta.classList;
    findRespuesta.classList.remove(list[0]);

    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual((prevPregunta) => prevPregunta + 1);
    } else {
      alert(`Ha terminado el quiz, ha obtenido ${puntuacion} de ${preguntas.length} respuestas correctas.`);
      setPreguntaActual(0);
      setPuntuacion(0);
    }
  }

  return (
    <main>
      <h1>Pop Quiz</h1>

      <h3>
        Puntuacion <span>{puntuacion}</span> / 10
      </h3>

      <section>
        <p style={{ textAlign: 'center' }}>Pregunta N°{preguntaActual + 1}</p>
        <h2>{preguntas[preguntaActual].pregunta}</h2>

        <div className="buttons-container" style={{ pointerEvents: disableClick ? "none" : "auto" }}>
          {
            preguntas[preguntaActual].respuestas.map((respuesta, index) => (
              <button
                key={index}
                onClick={(e) => handleRespuesta(index, e)}
              >
                {respuesta}
              </button>
            ))
          }
        </div>

        {
          disableClick && (
            <center>
              <button onClick={handleNextPregunta}>Siguente pregunta</button>
            </center>
          )
        }
      </section>
    </main>
  );
}
