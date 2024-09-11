//By Steve_Ricapa
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [


    { "text": "I guess I should stop looking out for you", "time": 21 },
    { "text": "like I always do", "time": 26.5 },

    { "text": "When will you start looking out for me, too", "time": 30 },
    { "text": "Instead of leaving me staring at my shoes?", "time": 37 },
    { "text": "It's just the way you're glancing at me", "time": 41 },
    { "text": "Something about you just makes me feel guilty for liking you", "time": 45.7 },
    { "text": "When you're with him, when you're with him", "time": 53.7 },
    { "text": "This is a love song for a girl who will never know it's about her", "time": 59.5 },
    { "text": "I know it's pretty stupid, but I'm much too shy to tell her", "time": 64 },
    { "text": "She's beaming that smile, all the while", "time": 69 },
    { "text": "I'm all choked up on my own throat, I guess there is no hope", "time": 74 },


    { "text": "And we're walking out in the snow", "time": 97 },
    { "text": "I say, I guess I should go", "time": 100 },
    { "text": "And we're talking 'bout someone else", "time": 106 },
    { "text": "When we should be talking about ourselves", "time":111  },
    { "text": "It's the same old situation, you've always got me waiting", "time": 116 },
    { "text": "Come on, dear, I think time's a-wastin'", "time": 122 },
    { "text": "Before we have to go back inside", "time": 126 },
    { "text": "And return to our normal lives", "time": 130.5 },
    { "text": "This is a love song for a girl who will never know it's about her", "time": 136.5 },
    { "text": "I know it's pretty stupid, but I'm much too shy to tell her", "time": 140 },
    { "text": "She's beaming that smile, all the while", "time": 145.5 },
    { "text": "I'm all choked up on my own throat, I guess there is no hope", "time": 150.5 },

    { "text": "For the Beautiful Girl of this World 🌎 ", "time": 165 },
    { "text": "Andrea...", "time": 171 },
    { "text": "Feliz 21", "time": 173 }



];

// Animacion de letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1; 
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; 
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); 
}

// Llamado de funcion(test)(216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
