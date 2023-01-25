// font family
fonts = [`Rubik Bubbles`, `Sevillana`, `Bebas Neue`, `Shadows Into Light`];

// Selector

const output = document.querySelector(`#output`);
const text = document.querySelector(`#text`);
const count = document.querySelector(`#count`);
const color = document.querySelector(`#color`);
const range = document.querySelector(`#range`);
const fontFamily = document.querySelector(`#fontFamily`);
const textToSpeech = document.querySelector(`#textToSpeech`);
const listenText = document.querySelector(`#listenText`);

const synth = window.speechSynthesis;

const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
};

textToSpeech.addEventListener("click", () => {
  speak(text.value);
});

const listen = () => {
  var recognition = new webkitSpeechRecognition();

  // Set the language
  recognition.lang = "en-US";

  // Start recognition
  recognition.start();

  // Handle result event
  recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    console.log(transcript);
  };
};
// speak("Hello, this is an example of text to speech using JavaScript.");

// text ထဲမှာ စာ ရိုက်တာနဲ့ output တခါထဲပေါ် မှာ

text.addEventListener("keyup", (event) => {
  //   output.innerText = text.value;
  //   output.innerText = text.value;
  console.log(event.target.value);
  output.innerText = text.value;
  count.innerText = text.value.length;
});

// color changing

color.addEventListener("change", (event) => {
  output.style.color = color.value;
});

range.addEventListener(`change`, (event) => {
  output.style.fontSize = range.value + `px`;
});
fonts.forEach((font) => {
  fontFamily.append(new Option(font, font));
});

fontFamily.addEventListener("change", (event) => {
  output.style.fontFamily = fontFamily.value;
});
