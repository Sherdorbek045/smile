let textbox = $("#textbox");
let info = $("#info");
// Speak
let speak = (text) => {
    let utterance = new SpeechSynthesisUtterance(text);

    speechSynthesis.speak(utterance);
}

$("#speak-btn").click(() => {
    speak(textbox.val())
})

//Listen
let speechRecognition = window.webkitSpeechRecognition;

let recognition = new speechRecognition();

let content = '';

recognition.continuous = true


recognition.onstart=()=>info.text('Voice Recognition is on')

recognition.onspeechend=()=>info.text('Voice Recognition is off')

recognition.onerror=()=>info.text('Ooops, something is wrong, Try again')

recognition.onresult = (event) => {
    let current = event.resultIndex;

    let transcript = event.results[current][0].transcript;

    content += transcript;

    textbox.val(content)
}

$("#listen-btn").click((event) => {
    if (content.length) {
        content += ''
    }
    recognition.start()
})
