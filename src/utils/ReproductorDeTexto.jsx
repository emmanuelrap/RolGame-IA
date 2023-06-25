import React, { useEffect } from "react";

function ReproductorDeTexto({ texto, voz, leer }) {
  useEffect(() => {
    console.log(texto);
    // Creamos una instancia de la síntesis de voz y detenemos existentes
    var synthesis = window.speechSynthesis;
    synthesis.cancel();

    // Verificamos si la API de síntesis de voz está disponible en el navegador
    if ("speechSynthesis" in window && leer) {
      const utterance = new SpeechSynthesisUtterance(texto);

      // Obtenemos la lista de voces disponibles
      const voices = synthesis.getVoices();

      // Imprimimos las voces disponibles en la consola
      console.log(voices);

      // Buscamos una voz específica en base al prop 'voz'
      const selectedVoice = voices.find(
        // (voice) => voice.name == "Microsoft Raul - Spanish (Mexico)"
        (voice) => voice.name == "Microsoft Sabina - Spanish (Mexico)"
      );

      // Si encontramos una voz válida, la asignamos al objeto SpeechSynthesisUtterance
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      // Iniciamos la reproducción del texto utilizando la síntesis de voz
      synthesis.speak(utterance);
    }
  }, [texto, voz, leer]);

  return <></>;
}

export default ReproductorDeTexto;
