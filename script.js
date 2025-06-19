function runCommand(command) {
  let response;
  switch(command) {
    case 'status':
      response = 'All Juice Geo systems are nominal.';
      break;
    case 'stealth':
      document.body.style.filter = 'grayscale(100%)';
      response = 'Stealth Mode activated.';
      break;
    case 'joke':
      response = 'Sarcasm module engaged. I’m practically human now.';
      break;
  }
  alert(response);
}
// Add to your script.js
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.continuous = false;

recognition.onresult = function(event) {
  const command = event.results[0][0].transcript.toLowerCase();
  runVoiceCommand(command);
};

function startListening() {
  recognition.start();
  alert('Listening...');
}

function runVoiceCommand(command) {
  if (command.includes("status")) {
    alert("All systems operational.");
  } else if (command.includes("stealth")) {
    document.body.style.filter = 'grayscale(100%)';
    alert("Stealth mode engaged.");
  } else if (command.includes("joke")) {
    alert("Initiating sarcasm... please brace for impact.");
  } else {
    alert("Unknown command. Try again, Commander.");
  }
}
