import './styles.css';

//1
const text1 = 'john';
const capitalizedText = text1.charAt(0).toUpperCase() + text1.slice(1);
console.log(capitalizedText);
// ----------------------------------

//2
const text = 'To jest przykładowy tekst, który chcemy obciąć po 20 znakach.';
const x = 20;
const catedTextSlice = text.slice(0, -x);
console.log(catedTextSlice);
// ----------------------------------

//3
const countWordOccurrences = (sentence, word) => {
  const words = sentence.split(' ');
  let count = 0;

  for (const w of words) {
    if (w.toLowerCase() === word.toLowerCase()) {
      count++;
    }
  }

  return count;
};

// Przykłady:
const sentence = 'To jest przykładowe zdanie, przykładowe słowo, jeszcze raz przykładowe .';
const wordToCount = 'przykładowe';
const occurrences = countWordOccurrences(sentence, wordToCount);
console.log(`Słowo "${wordToCount}" występuje ${occurrences} razy w zdaniu.`);
// ----------------------------------

//4
const emailCheck = (email) => {
  const emailParts = email.split('@');
  if (emailParts.length !== 2) {
    return false;
  }

  const [abc, defGhi] = emailParts;
  const defGhiParts = defGhi.split('.');
  if (defGhiParts.length !== 2) {
    return false;
  }

  return true;
};

// Przykłady:
console.log(emailCheck('bart.mur@example.com')); // Output: false
console.log(emailCheck('abc@def.ghi')); // Output: true
console.log(emailCheck('abcdef.gih')); // Output: false
// ----------------------------------

//5
const palCheck = (string) => {
  const cleanedString = string.replace(/\s/g, '').toLowerCase();
  return cleanedString === cleanedString.split('').reverse().join('');
};

// Przykłady:
console.log(palCheck('level')); // Output: true
console.log(palCheck('racecar')); // Output: true
console.log(palCheck('hello')); // Output: false
console.log(palCheck('A man a plan a canal Panama')); // Output: true








export function Exercise() {
  return <div>Empty values</div>;











}