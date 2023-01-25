const rates = {
  USD: 2100,
  GBP: 2548.1,
  RSD: 18.68,
  MYR: 476.41,
  CAD: 1563.4,
  DKK: 294.65,
  AUD: 1428.4,
  SEK: 200.45,
  NOK: 213.82,
  ILS: 614.14,
  RUB: 34.333,
  KWD: 6835.0,
  INR: 25.837,
  BND: 1545.6,
  EUR: 2191.1,
  CNY: 296.3,
  CHF: 2224.8,
  ZAR: 121.36,
  NPR: 16.148,
  EGP: 85.47,
  BDT: 20.468,
  THB: 60.009,
  PKR: 9.349,
  KES: 17.129,
  SGD: 1545.6,
  SAR: 558.73,
  LAK: 12.14,
  IDR: 13.494,
  KHR: 50.89,
  CZK: 89.967,
  JPY: 1539,
  LKR: 5.7143,
  NZD: 1330.6,
  KRW: 160.94,
  HKD: 269.8,
  BRL: 404.97,
  VND: 8.5679,
  PHP: 37.34,
};

// usd to mmk
function usdToMMk(inputUsd) {
  return inputUsd * rates.USD + ` MMk`;
}

console.log(usdToMMk(45));

// // any currency mmk to
// function anyCurrencyToMMK(inputCurrency, fromCurrency) {
//   return inputCurrency * rates[fromCurrency] + ` MMk`;
// }

// console.log(anyCurrencyToMMK(500,`SGD`));
// console.log(anyCurrencyToMMK(500,`EUR`));

// MMK to any Currency

// function toCurrency(inputMMK, Currency) {
//   return inputMMK / rates[Currency] + Currency;
// }
//  console.log(toCurrency(200000,`USD`));

// from any Currency to any Currency

function CurrencyToCurrency(inputCurrency, fromCurrency, toAnyCurrency) {
  return (
    (inputCurrency * rates[fromCurrency]) / rates[toAnyCurrency] + toAnyCurrency
  );
}

console.log(CurrencyToCurrency(40,`USD`,`SGD`));
console.log(CurrencyToCurrency(440,`USD`,`SGD`));
console.log(CurrencyToCurrency(1,`USD`,`USD`));