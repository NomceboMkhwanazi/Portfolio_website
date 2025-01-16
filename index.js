document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("downloadButton").addEventListener("click", function () {
      var a = document.createElement("a");
      a.href = "./CV.pdf";
      a.download = "CV.pdf";
      a.click();
    });
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    const text = "Hello. I am Siphiwe Nomcebo Mkhwanazi.\nWelcome to my portfolio website.";
    const typewriterText = document.getElementById("typewriter-text");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            if (text.charAt(index) === "\n") {
                typewriterText.innerHTML += "<br>";
            } else {
                typewriterText.innerHTML += text.charAt(index);
            }
            index++;
            setTimeout(typeWriter, 100); // Adjust speed here (lower value = faster typing)
        }
    }

    typeWriter();
});



