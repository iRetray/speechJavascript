let recorder;
if (!("webkitSpeechRecognition" in window)) {
  console.log("Tu sistema o navegador no permiten la grabación de voz");
} else {
  recorder = new webkitSpeechRecognition();
  recorder.lang = "es-CO";
  recorder.continuous = true;
  recorder.interim = true;
  recorder.addEventListener("result", iniciarProceso);
}

function iniciarProceso(event) {
  for (let index = event.resultIndex; index < event.results.length; index++) {
    document.getElementById("texto").innerHTML =
      event.results[index][0].transcript;
  }
}

recorder.start();