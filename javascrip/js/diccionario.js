// Diccionario de Conversión Morse
const MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..',
    'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.',
    
    '.': '.-.-.-', ',': '--..--', '?': '..--..', '/': '-..-.', '-': '-....-', '(': '-.--.', ')': '-.--.-',
    '!': '-.-.--', ':': '---...', ';': '-.-.-.', '"': '.-..-.', "'": '.----.', '=': '-...-', '+': '.-.-.',
    '&': '.-...', '$': '...-..-', '@': '.--.-.', ' ': '/'
  };
  
  // Función para convertir texto a Morse
  function textToMorse(text) {
    text = text.toUpperCase();
    let morseCode = [];
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (MORSE_CODE_DICT[char]) {
        morseCode.push(MORSE_CODE_DICT[char]);
      } else {
        return `Error: El carácter '${char}' no es soportado.`;
      }
    }
    return morseCode.join(' ');
  }
  
  // Función para convertir Morse a texto
  function morseToText(morse) {
    let morseWords = morse.split(' / ');
    let decodedMessage = [];
    
    for (let word of morseWords) {
      let morseLetters = word.split(' ');
      let decodedWord = '';
      
      for (let letter of morseLetters) {
        let char = Object.keys(MORSE_CODE_DICT).find(key => MORSE_CODE_DICT[key] === letter);
        if (char) {
          decodedWord += char;
        } else {
          return 'Error: El código Morse ingresado contiene caracteres no válidos.';
        }
      }
      
      decodedMessage.push(decodedWord);
    }
    
    return decodedMessage.join(' ');
  }
  
  // Función para manejar el evento de conversión
  document.getElementById('convertBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value.trim();
    const option = document.getElementById('option').value;
    let output = '';
    
    if (option === 'toMorse') {
      output = textToMorse(inputText);
    } else if (option === 'fromMorse') {
      output = morseToText(inputText);
    }
    
    document.getElementById('output').innerText = output;
  });
  