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
