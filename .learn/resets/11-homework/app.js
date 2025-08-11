
const sum = (a, b) => {
    return a + b;
};
// console.log(sum(7,3));


// Tasas base: siempre relativas a 1 EUR
let oneEuroIs = {
    JPY: 156.5, // yen japonés
    USD: 1.07,  // dólar estadounidense
    GBP: 0.87   // libra esterlina
};

// EUR -> USD
const fromEuroToDollar = eur => eur * oneEuroIs.USD;

//  USD -> JPY   (USD -> EUR -> JPY)
const fromDollarToYen = usd => (usd / oneEuroIs.USD) * oneEuroIs.JPY;

//  JPY -> GBP   (JPY -> EUR -> GBP)
const fromYenToPound = yen => (yen / oneEuroIs.JPY) * oneEuroIs.GBP;

// Exporta todas las funciones para que Jest pueda usarlas
module.exports = { sum, oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound };
