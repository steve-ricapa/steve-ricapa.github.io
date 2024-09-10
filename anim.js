// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { "text": "Hey- I'm not afraid,", "time": 7 },
    { "text": "I can be myself and I", "time": 14 },
    { "text": "Hope you can be yourself as well 'cause I can make you feel alright", "time": 27 },
    { "text": "And there was so much happiness that we were still yet to find", "time": 32 },
    { "text": "I said that you can call me Alex baby, welcome to my life", "time": 36 },
    { "text": "But don't you worry, don't you- don't worry girl", "time": 41 },
    { "text": "No, I'm not sure if I'm into you", "time": 45 },
    { "text": "The last time that you checked I was probably so sad and confused", "time": 49 },
    { "text": "I don't know, no, I don't know what you like", "time": 55 },
    { "text": "But if you're looking for something new", "time": 59 },
    { "text": "I know somebody that you could choose", "time": 63 },
    { "text": "What about me", "time": 67 },
    { "text": "What about me", "time": 70 },
    { "text": "What about me and you together", "time": 74 },
    { "text": "Something that could really last forever", "time": 79 },
    { "text": "What about me", "time": 83 },
    { "text": "What about me", "time": 86 },
    { "text": "What about me and you together", "time": 90 },
    { "text": "Something that could really last forever", "time": 95 },
    { "text": "If all my friends wanna be in her bed", "time": 100 },
    { "text": "Then I begin to wonder why", "time": 104 },
    { "text": "I guess that I'd be lying to myself", "time": 108 },
    { "text": "Cause who the fuck", "time": 113 },
    { "text": "Would be dumb enough", "time": 115 },
    { "text": "To reject an offer?", "time": 117 },
    { "text": "Oh what an offer?", "time": 119 },
    { "text": "Now two two ten one five", "time": 123 },
    { "text": "Couple hours can change your life", "time": 126 },
    { "text": "Frankie saying oh what a night", "time": 130 },
    { "text": "What a night", "time": 133 },
    { "text": "What the fuck is a girlfriend", "time": 136 },
    { "text": "I'ma need advice", "time": 140 },
    { "text": "Maybe I should go outside", "time": 143 },
    { "text": "So I could get a fucking life", "time": 147 },
    { "text": "I made a friend and she spent the night now", "time": 150 },
    { "text": "I'm in love and she remains in my life", "time": 154 },
    { "text": "I'm back and we spoke in Europe", "time": 159 },
    { "text": "I need insurance", "time": 163 },
    { "text": "On my emotions", "time": 165 },
    { "text": "I can't get hurt again", "time": 168 },
    { "text": "Fuck the past, fuck them, they all made me sad", "time": 172 },
    { "text": "And I had no time to prepare to face my fears", "time": 177 },
    { "text": "I guess that it's time that I dried these tears", "time": 182 },
    { "text": "But if I could just be happy by the end of this song", "time": 187 },
    { "text": "But if by the time you hear it you are already gone", "time": 193 },
    { "text": "And it didn't go to plan", "time": 198 },
    { "text": "Then why should I continue in this life", "time": 203 },
    { "text": "When there's no one around to be the one who makes me smile", "time": 207 },
    { "text": "So far everything's good", "time": 211 },
    { "text": "(Ooooh)", "time": 215 },
    { "text": "Oh oh oh", "time": 218 },
    { "text": "Oh oh oh oh oh", "time": 221 },
    { "text": "So far everything's good", "time": 225 },
    { "text": "Oh oh oh", "time": 228 },
    { "text": "(Ooooh)", "time": 231 },
    { "text": "No no no", "time": 234 },
    { "text": "No no no no no oh oh ow", "time": 238 },
    { "text": "Want the crowd in tears when they hear this", "time": 242 },
    { "text": "Is that so wrong?", "time": 246 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
