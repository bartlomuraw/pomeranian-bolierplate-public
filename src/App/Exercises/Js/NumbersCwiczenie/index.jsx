import './styles.css';

//ćwicznie 2
const isStringShort = (inputString) => {
  if (typeof inputString !== 'string') {
    return new Error('Input must be a string.');
  }

  if (inputString.length < 10) {
    return true;
  }

  return false;
};

//ćwiczenie 3
const calculateCircleArea = (radius) => {
  if (typeof radius !== 'number' || radius <= 0) {
    return new Error('Radius must be a positive number.');
  }

  const pi = Math.PI;
  const area = pi * Math.pow(radius, 2);
  return area;
};

//ćwicznie 4
const convertGradeToText = (grade) => {
  if (typeof grade !== 'number', grade < 1, grade > 6, !Number.isInteger(grade)) {
    return 'Złe wejście';
  }

  switch (grade) {
    case 1:
      return 'niedostateczny';
    case 2:
      return 'dopuszczający';
    case 3:
      return 'dostateczny';
    case 4:
      return 'dobry';
    case 5:
      return 'bardzo dobry';
    case 6:
      return 'calujący';
    default:
      return 'Złe wejście';
  }
};

//ćiczenie 4 Przykłady użycia:
console.log(convertGradeToText(1)); // Output: "jeden"
console.log(convertGradeToText(3)); // Output: "trzy"
console.log(convertGradeToText(6)); // Output: "sześć"
console.log(convertGradeToText(7)); // Output: "Złe wejście"
console.log(convertGradeToText('A')); // Output: "Złe wejście"

//ćiczenie 5
Math.max(
  console.log(Math.max)
)
function ownMax(a, b) {
  return a > b
}


//WYWOŁANIE
export function NumbersCwiczenie() {

  //ćwiczenie 3
  const radius = 3
    ;
  try {
    const area = calculateCircleArea(radius);
    console.log(`Pole koła o promieniu ${radius} wynosi: ${area}`)
  } catch (error) {
    console.errer(error.message);
  }



  //ćwiczenie 2
  const stringToCheck = 'Jestem stringiem!';

  try {
    const isShort = isStringShort(stringToCheck);
    return (
      <div>
        <p>String: {stringToCheck}</p>
        <p>Is Short: {isShort ? 'True' : 'False'}</p>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }



  //ćwiczneie 1
  let age = 18;
  let hasDriverLicense = true;
  let hasCar = true;

  function canDrive(age, hasDriverLicense, hasCar) {
    if (age >= 18) {
      if (hasDriverLicense) {
        if (hasCar) {
          return 'You can drive your car!';
        } else {
          return 'You can drive a rental car.';
        }
      } else {
        return "You can't drive without a driver's license.";
      }
    } else {
      return 'You are too young to drive.';
    }
  }
  function hasEnough(hasEnough) {
    if (hasEnough) {
      return true;
    } else {
      return false;
    }
  }

  canDrive(18, true, true);
  hasEnough(true);

  <div></div>;



}