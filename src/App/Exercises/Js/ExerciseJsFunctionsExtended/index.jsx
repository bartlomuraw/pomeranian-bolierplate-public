import './styles.css';

export function Exercise() {
  // 1.
  // Napisz funkcje sortImmute, ktora przyjmuje jako parametr tablice cyfr i zwraca ją posortowana
  // funkcja ma nie zmieniać pierwotnej tablicy

  const sortImmute = (arr) => arr.slice().sort((a, b) => a - b);

  // const sortImmute = (arr) => {
  //   return arr.slice().sort((a, b) => a - b)
  // };

  // const sortImmute = (arr) => {
  //   const sortedArray = arr.slice().sort((a, b) => a - b)

  //   return sortedArray;
  // };

  const arr = [1, 3, 2, 5, 4];
  const sortedArr = sortImmute(arr);

  console.log(arr);
  console.log(sortedArr);
  //-----------------------------------------------------------------------

  //2. napisz funkcję, któa jako parametr przyjmuje obiekt przechodzi po wszystkich jego polach i kapitalizuje im pierwsza literę. Funkcja nie zmienia oryginalengo obiektu.

  function upperObject(obj) {
    // Tworzymy nowy obiekt, w którym przechowamy zmienione dane
    const changedObject = {};

    // Przechodzimy przez wszystkie pola obiektu za pomocą pętli for...in
    for (let key in obj) {
      // Sprawdzamy, czy dany klucz jest własnością tego obiektu (a nie dziedziczonym kluczem)
      if (obj.hasOwnProperty(key)) {
        // Pobieramy wartość odpowiadającą danemu kluczowi
        const value = obj[key];

        // Jeśli wartość jest typu string, kapitalizujemy pierwszą literę
        if (typeof value === 'string') {
          // Kapitalizacja pierwszej litery i dołączenie pozostałego fragmentu oryginalnego stringa
          changedObject[key] = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
          // Jeśli wartość nie jest typu string, przypisujemy ją bez zmian
          changedObject[key] = value;
        }
      }
    }

    // Zwracamy nowy obiekt z kapitalizowanymi polami
    return changedObject;
  }

  const originalObj = { name: 'john', surname: 'wick', age: 1000 };
  const changedObject = upperObject(originalObj);

  // Wyświetlamy nowy obiekt zawierający kapitalizowane pola
  console.log({
    changedObject
  });

  // Wyświetlamy oryginalny obiekt, który pozostał niezmieniony
  console.log({
    originalObj
  });
  //-------------------------------------------------------------------------------

  //3. napisz funkcję, która jako parametr przyjmuje tablicę obiektów natomiast zwraca tablicę z wyliczoną wartością średnią zamiast ocen. Funkcja ma nie zmieniać pierwotnej tablicy. 

  function calcAvr(tablica) {
    // Tworzymy nową tablicę, aby nie zmieniać pierwotnej tablicy
    const tablicaWynikowa = tablica.map(element => {
      // Obliczamy sumę ocen za pomocą metody reduce()
      const gradesSum = element.grades.reduce((acc, curr) => acc + curr, 0);

      // Obliczamy średnią dzieląc sumę ocen przez długość tablicy ocen
      const average = gradesSum / element.grades.length;

      // Zwracamy nowy obiekt z kopią wszystkich pól oryginalnego obiektu
      // oraz z nadpisaniem pola "grades" z wyliczoną średnią
      return { ...element, grades: average };
    });

    // Zwracamy nową tablicę zawierającą obiekty z wyliczoną średnią
    return tablicaWynikowa;
  }

  const tablicaPierwotna = [
    { id: 0, name: "Eve", grades: [4, 2, 4, 6, 1, 2, 3] },
    { id: 2, name: "Eve2", grades: [4, 2, 4, 6, 1, 2, 3] }
  ];

  // Wywołujemy funkcję calcAvr, przekazując oryginalną tablicę
  // i zapisujemy wynik w tablicaWynikowa
  const tablicaWynikowa = calcAvr(tablicaPierwotna);

  // Wyświetlamy obiekt zawierający pierwotną tablicę i nową tablicę
  console.log({
    tablicaPierwotna,
    tablicaWynikowa
  });
  //---------------------------------------------------------------------------------

  // 4.
  // funkcja zwraca podany w argumencie element ciągu Fibonacciego
  // napisać rekurencyjnie

  const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  console.log(fibonacci(4));

  //---------------------------------------------------------------------------------

  //5. napisz funkcję, która przyjmuje dowolną liczbę argumentów za pomocą "....args" i zwraca ich sumę.
  function sumOfParam(...args) {
    let sum = 0;

    for (let arg of args) {
      // Sprawdzamy, czy argument jest liczbą
      if (typeof arg === 'number') {
        sum += arg;
      } else {
        // Jeśli argument nie jest liczbą, zwracamy "Złe wejście"
        return 'Złe wejście';
      }
    }

    return sum;
  }

  // Przykładowe użycie funkcji:
  const wynik1 = sumOfParam(1, 2, 3, 4, 5, 6);
  console.log(wynik1); // Wyświetli: 21

  const wynik2 = sumOfParam(1, 2, 3, 'not a number', 5, 6);
  console.log(wynik2); // Wyświetli: "Złe wejście"
  //--------------------------------------------------------------

  //6. napisz funkcję, która zwróci funkcję, która zliczy wszystkie wystąpienia pierwotnie wywolanej funkcji

  function ZliczWystapienia(szukanaWartosc) {
    // Zwracamy funkcję, która będzie przyjmować dowolną liczbę argumentów
    return function (...args) {
      // Inicjujemy zmienną do zliczania wystąpień
      let licznik = 0;

      // Przechodzimy przez wszystkie argumenty za pomocą pętli for...of
      for (let arg of args) {
        // Sprawdzamy, czy argument jest równy szukanej wartości
        if (arg === szukanaWartosc) {
          licznik++;
        }
      }

      // Zwracamy liczbę wystąpień lub 'złe wejście', jeśli szukana wartość nie jest liczbą
      return typeof szukanaWartosc === 'number' ? licznik : 'złe wejście';
    };
  }

  // Przykładowe użycie funkcji:
  const wynik6 = ZliczWystapienia(1)(1, 1, 2, 3, 5, 7, 8, 1);
  console.log(wynik6); // Wyświetli: 3

  const wynik4 = ZliczWystapienia('nie liczba')(1, 1, 2, 3, 5, 7, 8, 1);
  console.log(wynik4); // Wyświetli: 'złe wejście'

  const wynik5 = ZliczWystapienia(1)(1, 1, 2, 3, 'cokolwiek', {}, [], 1);
  console.log(wynik5); // Wyświetli: 3
  //-------------------------------------------------------------------------------

  // 7.
  // stwórz funkcję calculateWithChar, która przyjmuje jako argument jeden operator matematyczne
  // '+', '-', '*', '/'
  // funkcja calculateWithChar ma zwracać funkcję, która przyjmuje dwie liczby jako argumenty


  const calculateWithChar = (operator) => {
    return (num1, num2) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'złe wejście';
      }

      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num1 / num2;
        case '%':
          return num1 % num2;
        default:
          return 'zły znak';
      }
    };
  };

  console.log(calculateWithChar('+')(1, 2));
  console.log(calculateWithChar('*')(1, 2));
  console.log(calculateWithChar('/')(1, 2));
  console.log(calculateWithChar('---')(1, 2));
  console.log(calculateWithChar('+')('abc', 2));

  return <div>Test</div>;
}

