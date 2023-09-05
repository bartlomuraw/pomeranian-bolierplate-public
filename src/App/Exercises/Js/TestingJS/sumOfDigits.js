export function sumOfDigits(n) {
    // Konwertujemy liczbę na ciąg znaków (string), aby łatwiej operować na cyfrach.
    const numStr = Math.abs(n).toString();

    // Inicjalizujemy sumę na 0.
    let sum = 0;

    // Iterujemy przez każdy znak w ciągu znaków i dodajemy go do sumy.
    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }

    return sum;
}
