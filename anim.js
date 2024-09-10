// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { "text": "I'm findin' ways to articulate the feeling I'm goin' through", "time": 26 },
    { "text": "I just can't say I don't love you", "time": 31 },
    { "text": "'Cause I love you, yeah", "time": 35 },
    { "text": "It's hard for me to communicate the thoughts that I hold", "time": 41 },
    { "text": "But tonight I'm gon' let you know", "time": 43 },
    { "text": "Let me tell the truth", "time": 46 },
    { "text": "Baby, let me tell the truth, yeah", "time": 49 },

    { "text": "You know what I'm thinkin', see it in your eyes", "time": 53 },
    { "text": "You hate that you want me, hate it when you cry", "time": 56 },
    { "text": "You're scared to be lonely, 'specially in the night", "time": 62 },
    { "text": "I'm scared that I'll miss you, happens every time", "time": 65 },
    { "text": "I don't want this feelin', I can't afford love", "time": 68.5 },
    { "text": "I try to find a reason to pull us apart", "time": 71.5 },
    { "text": "It ain't workin' 'cause you're perfect", "time": 74 },
    { "text": "And I know that you're worth it", "time": 76 },
    { "text": "I can't walk away, oh!", "time": 78 },
    { "text": "Even though we're going through it", "time": 83 },
    { "text": "And it makes you feel alone", "time": 85 },
    { "text": "Just know that I would die for you", "time": 88 },
    { "text": "Baby, I would die for you, yeah", "time": 92 },
    { "text": "The distance and the time between us", "time": 98 },
    { "text": "It'll never change my mind, 'cause baby", "time": 99 },
    { "text": "I would die for you", "time": 104 },
    { "text": "Baby, I would die for you, yeah", "time": 107 },

    { "text": "I'm finding ways to manipulate the feelin' you're goin' through", "time": 112 },
    { "text": "But baby girl, I'm not blamin' you", "time": 116 },
    { "text": "Just don't blame me, too, yeah", "time": 120 },
    { "text": "'Cause I can't take this pain forever", "time": 125 },
    { "text": "And you won't find no one that's better", "time": 129 },
    { "text": "'Cause I'm right for you, babe", "time": 133 },
    { "text": "I think I'm right for you, babe", "time": 135 },

    { "text": "You know what I'm thinkin', see it in your eyes", "time": 140 },
    { "text": "You hate that you want me, hate it when you cry", "time": 143},
    { "text": "It ain't workin' 'cause you're perfect", "time": 147 },
    { "text": "And I know that you're worth it", "time": 148 },
    { "text": "I can't walk away, oh!", "time": 151 },

    { "text": "Even though we're going through it", "time": 154 },
    { "text": "And it makes you feel alone", "time": 157 },
    { "text": "Just know that I would die for you", "time": 160 },
    { "text": "Baby, I would die for you, yeah", "time": 164 },
    { "text": "The distance and the time between us", "time": 168 },
    { "text": "It'll never change my mind, 'cause baby", "time": 172 },
    { "text": "I would die for you", "time": 175 },
    { "text": "Baby, I would die for you, yeah", "time": 178 },

    { "text": "I would die for you, I would lie for you", "time": 183 },
    { "text": "Keep it real with you, I would kill for you, my baby", "time": 186 },
    { "text": "I'm just sayin', yeah", "time": 193 },
    { "text": "I would die for you, I would lie for you", "time": 197 },
    { "text": "Keep it real with you, I would kill for you, my baby", "time": 199 },
    { "text": "Na-na-na, na-na-na, na-na-na", "time": 209 },

    { "text": "Even though we're going through it", "time": 212 },
    { "text": "And it makes you feel alone", "time": 215 },
    { "text": "Just know that I would die for you", "time": 216.5 },
    { "text": "Baby, I would die for you, yeah", "time": 221.5 },
    { "text": "The distance and the time between us", "time": 226.5 },
    { "text": "It'll never change my mind, 'cause baby", "time": 228.5 },
    { "text": "I would die for you", "time": 233 },
    { "text": "Baby, I would die for you, yeah babe", "time": 236 },

    { "text": "(Die for you)", "time": 239.5 },

    { "text": "For the Beautiful Girl of this World 🌎 ", "time": 245 },
    { "text": "Andrea...", "time": 250 },
    { "text": "Feliz 21", "time": 255 }


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