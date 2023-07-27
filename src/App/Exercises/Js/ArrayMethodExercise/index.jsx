import './styles.css';

export function Exercise() {

  //ĆWICZENIE 3
  //1 Funcka, która przyjmuje dwie tablice i zwraca nową tablicę, która zawiera tylko elementy, które występują w obu talicach
  function getSameValues(tablica1, tablica2) {
    const zbior1 = new Set(tablica1);
    const zbior2 = new Set(tablica2);

    const wspolne = [...zbior1].filter(element => zbior2.has(element));

    return wspolne;
  }

  // Przykład
  const tablica1 = [1, 2, 3, 4, 5];
  const tablica2 = [4, 5, 6, 7, 8];

  const wynik1 = getSameValues(tablica1, tablica2);
  console.log(wynik1); // [4, 5]
  //-----------------------------------------

  //2 Funkcja, która liczy średnią z liczb w tablicy
  function srednia(tablica) {
    if (tablica.length === 0) {
      return 0;
    }

    const suma = tablica.reduce((acc, curr) => acc + curr, 0);
    const srednia = suma / tablica.length;
    return srednia;
  }

  // Przykład
  const arrayNumbers = [1, 2, 3, 4, 5, 6];
  const wynik = srednia(arrayNumbers);
  console.log(wynik); // 3.5
  //----------------------------------------------

  //3 Funkcja, która przyjmuje 2 parametry i tworzy 2 wymiarową tablicę wypełnioną 0 gdzie x i y to wymiary 2 wymiarowej tablicy
  function utworzTablice(x, y) {
    const tablica2D = [];

    for (let i = 0; i < x; i++) {
      const wiersz = Array(y).fill(0);
      tablica2D.push(wiersz);
    }

    return tablica2D;
  }

  // Przykład
  const x = 3; // Liczba wierszy
  const y = 4; // Liczba kolumn

  const wynik2 = utworzTablice(x, y);
  console.log(wynik2);
  //[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
  //---------------------------------------------

  //4 Funkcja, która przyjmuje tablicę liczb i zwraca tablicę zawierającą te same liczby, ale w odwróconej kolejności

  function odwrocTablice(tablica) {
    return tablica.reverse();
  }

  // Przykład
  const tablicaLiczb = [1, 2, 3, 4, 5];
  const result = odwrocTablice(tablicaLiczb);
  console.log(result); // [5, 4, 3, 2, 1]

  //-------------------------------------------

  //5 Funkcja, która przyjmuje tablicę obiektów, gdzie każdy obiekt reprezenuje osobę z imieniem i wiekiem, i zraca tablicę z samymi imionami osób
  function getNames(tablicaOsob) {
    const imiona = tablicaOsob.map(osoba => osoba.imie);
    return imiona;
  }

  const tablicaOsob = [
    { imie: 'Bart', wiek: 30 },
    { imie: 'Olaf', wiek: 25 },
    { imie: 'Ewa', wiek: 35 }
  ];

  const wynik3 = getNames(tablicaOsob);
  console.log(wynik3); // ["Bart", "Olaf", "Ewa"]
  //--------------------------------------------------
  //--------------------------------------------------


  //ĆWICZENIE 5

  //1 Funkcja zmieniająca podany string na camelCase
  function toCamelCase(str) {
    // Zamień wszystkie spacje na spacje, a następnie podziel na tablicę słów
    const words = str.replace(/\s/g, ' ').split(' ');
    // Połącz słowa i zwróć wynik
    return words.join('');
  }
  //Przykład
  const text = "Jakiś długi tekst";
  const result1 = toCamelCase(text);
  console.log(result1); //"JakisdługiTekst"
  //-----------------------------------------------------------

  //2 Funcja, która przyjmuje dwa napisy i zwraca tablicę z literami, które występują w obu napisach
  function commonLetters(napis1, napis2) {
    const zbior1 = new Set(napis1);
    const zbior2 = new Set(napis2);

    const wspolne = [...zbior1].filter(litera => zbior2.has(litera));

    return wspolne;
  }

  // Przykład
  const napis1 = "abcdef";
  const napis2 = "cdefgh";

  const result2 = commonLetters(napis1, napis2);
  console.log(result2); // ["c", "d", "e", "f"]
  //-------------------------------------------------------------

  //3 Funkcja, która przyjmuje tablicę słów i zwraca tablicę z liczbami określającymi ilość samogłosek w tych słowach

  function zliczSamogloski(slowo) {
    const samogloski = 'aeiou';
    let iloscSamoglosek = 0;

    for (let litera of slowo) {
      if (samogloski.includes(litera)) {
        iloscSamoglosek++;
      }
    }
    return iloscSamoglosek;
  }
  function iloscSamoglosekWDanychSlowach(tablicaSlow) {
    const ilosci = tablicaSlow.map(zliczSamogloski);
    return ilosci;
  }

  // Przykład
  const slowa = ["apple", "bananat", "orange"];
  const result3 = iloscSamoglosekWDanychSlowach(slowa);
  console.log(result3); // [2,3,3]
  //--------------------------------------------------------

  //4 Funkcję, która pobiera dwa napisy i sprawdza, czy one są anagramami
  function isAnagram(str1, str2) {

    const sortedStr1 = Array.from(str1.toLowerCase()).sort().join()
    const sortedStr2 = Array.from(str2.toLowerCase()).sort().join()

    return sortedStr1 === sortedStr2
  }

  console.log(isAnagram('iceman', 'nameci')) // true
  //-----------------------------------------------------------

  return <div>Array ćwiczenia</div>;
}