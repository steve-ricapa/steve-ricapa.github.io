// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { "text": "Hey- I'm not afraid,", "time": 5 },
    { "text": "I can be myself and I", "time": 6 },
    { "text": "Hope you can be yourself as well 'cause I can make you feel alright", "time": 11 },
    { "text": "And there was so much happiness that we were still yet to find", "time": 17 },
    { "text": "I said that you can call me Alex baby, welcome to my life", "time": 22 },
    { "text": "But don't you worry, don't you- don't worry girl", "time": 28 },
    { "text": "No, I'm not sure if I'm into you", "time": 34 },
    { "text": "The last time that you checked I was probably so sad and confused", "time": 37 },
    { "text": "I don't know, no, I don't know what you like", "time": 40 },
    { "text": "But if you're looking for something new", "time": 46 },
    { "text": "I know somebody that you could choose", "time": 48 },
    { "text": "What about me", "time": 51 },
    { "text": "What about me", "time": 54 },
    { "text": "What about me and you together", "time": 57 },
    { "text": "Something that could really last forever", "time": 60 },
    { "text": "What about me", "time": 62 },
    { "text": "What about me", "time": 65 },
    { "text": "What about me and you together", "time": 68 },
    { "text": "Something that could really last forever", "time": 72 },
    { "text": "If all my friends wanna be in her bed", "time": 98 },
    { "text": "Then I begin to wonder why", "time": 101 },
    { "text": "I guess that I'd be lying to myself", "time": 104 },
    { "text": "Cause who the fuck", "time": 108 },
    { "text": "Would be dumb enough", "time": 108.5 },
    { "text": "To reject an offer?", "time": 109 },
    { "text": "Oh what an offer?", "time": 109.5 },
    { "text": "Now two two ten one five", "time": 110 },
    { "text": "Couple hours can change your life", "time": 111 },
    { "text": "Frankie saying oh what a night", "time": 112 },
    { "text": "What a night", "time": 113 },
    { "text": "What the fuck is a girlfriend", "time": 114 },
    { "text": "I'ma need advice", "time": 116 },
    { "text": "Maybe I should go outside", "time": 117 },
    { "text": "So I could get a fucking life", "time": 118 },
    { "text": "I made a friend and she spent the night now", "time": 120 },
    { "text": "I'm in love and she remains in my life", "time": 122 },
    { "text": "I'm back and we spoke in Europe", "time": 127 },
    { "text": "I need insurance", "time": 129 },
    { "text": "On my emotions", "time": 131 },
    { "text": "I can't get hurt again", "time": 132 },
    { "text": "Fuck the past, fuck them, they all made me sad", "time": 133 },
    { "text": "And I had no time to prepare to face my fears", "time": 138 },
    { "text": "I guess that it's time that I dried these tears", "time": 141 },
    { "text": "But if I could just be happy by the end of this song", "time": 144 },
    { "text": "But if by the time you hear it you are already gone", "time": 157},
    { "text": "And it didn't go to plan", "time": 165 },
    { "text": "Then why should I continue in this life", "time": 168 },
    { "text": "When there's no one around to be the one who makes me smile", "time": 178 },
    { "text": "So far everything's good", "time": 188 },
    { "text": "So far everything's good", "time": 207 },
    { "text": "Want the crowd in tears when they hear this", "time": 229 },
    { "text": "Is that so wrong?", "time": 230 },
    { "text": "For the Beautiful Girl of this World 🌎 ", "time": 232 },
    { "text": "Andrea . . .", "time": 238 }
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
