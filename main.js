let fromRUB = document.getElementById('from-rub')
let fromUSD = document.getElementById('from-usd')
let fromEUR = document.getElementById('from-eur')
let fromGBP = document.getElementById('from-gbp')
let toRUB = document.getElementById('to-rub')
let toUSD = document.getElementById('to-usd')
let toEUR = document.getElementById('to-eur')
let toGBP = document.getElementById('to-gbp')
let fromAmount = document.querySelector('.left .amount')
let toAmount = document.querySelector('.right .amount')
let fromCurrency = 'RUB';
let toCurrency = 'USD';

let fromRate = document.querySelector('.left .result .rate')
let toRate = document.querySelector('.right .result .rate')

function findRate(){
    fetch(`https://api.exchangerate.host/latest?base=${fromCurrency}&symbols=${toCurrency}`)
    .then(response => response.json())
    .then((data) => {
        fromRate.innerText = `1 ${fromCurrency} = ${data.rates[toCurrency].toFixed(4)} ${toCurrency}`
        toRate.innerText = `1 ${toCurrency} = ${(1/data.rates[toCurrency]).toFixed(4)} ${fromCurrency}`
        fromAmount.addEventListener('keyup', () => {
            toAmount.value = (fromAmount.value*data.rates[toCurrency])
        });
        toAmount.addEventListener('keyup', () => {
            fromAmount.value = (toAmount.value/data.rates[toCurrency])
        });
    })
    .catch(error => {
        alert(`Üzr istəyirik. Nə isə səhv baş verdi. Zəhmət olmasa, təkrar cəhd edin.`);
    });      
}


function findRateByClickFrom(){
    fetch(`https://api.exchangerate.host/latest?base=${fromCurrency}&symbols=${toCurrency}`)
    .then(response => response.json())
    .then(() => {
            toAmount.value = (fromAmount.value*data.rates[toCurrency]);
        });    
}
function findRateByClickTo(){
    fetch(`https://api.exchangerate.host/latest?base=${fromCurrency}&symbols=${toCurrency}`)
    .then(response => response.json())
    .then(() => {
            fromAmount.value = (toAmount.value/data.rates[toCurrency]);
        });    
}


fromRUB.addEventListener('click', () => {
    fromRUB.style.backgroundColor = '#833AE0'
    fromRUB.style.color = '#FFFFFF'
    fromUSD.style.backgroundColor = '#FFFFFF'
    fromUSD.style.color = '#C6C6C6'
    fromEUR.style.backgroundColor = '#FFFFFF'
    fromEUR.style.color = '#C6C6C6'
    fromGBP.style.backgroundColor = '#FFFFFF'
    fromGBP.style.color = '#C6C6C6'
    fromCurrency = 'RUB'
    findRate()
    findRateByClickFrom()
})
fromUSD.addEventListener('click', () => {
    fromUSD.style.backgroundColor = '#833AE0'
    fromUSD.style.color = '#FFFFFF'
    fromRUB.style.backgroundColor = '#FFFFFF'
    fromRUB.style.color = '#C6C6C6'
    fromEUR.style.backgroundColor = '#FFFFFF'
    fromEUR.style.color = '#C6C6C6'
    fromGBP.style.backgroundColor = '#FFFFFF'
    fromGBP.style.color = '#C6C6C6'
    fromCurrency = 'USD'
    findRate()
    findRateByClickFrom()
})
fromEUR.addEventListener('click', () => {
    fromEUR.style.backgroundColor = '#833AE0'
    fromEUR.style.color = '#FFFFFF'
    fromRUB.style.backgroundColor = '#FFFFFF'
    fromRUB.style.color = '#C6C6C6'
    fromUSD.style.backgroundColor = '#FFFFFF'
    fromUSD.style.color = '#C6C6C6'
    fromGBP.style.backgroundColor = '#FFFFFF'
    fromGBP.style.color = '#C6C6C6'
    fromCurrency = 'EUR'
    findRate()
    findRateByClickFrom()
})
fromGBP.addEventListener('click', () => {
    fromGBP.style.backgroundColor = '#833AE0'
    fromGBP.style.color = '#FFFFFF'
    fromRUB.style.backgroundColor = '#FFFFFF'
    fromRUB.style.color = '#C6C6C6'
    fromEUR.style.backgroundColor = '#FFFFFF'
    fromEUR.style.color = '#C6C6C6'
    fromUSD.style.backgroundColor = '#FFFFFF'
    fromUSD.style.color = '#C6C6C6'
    fromCurrency = 'GBP'
    findRate()
    findRateByClickFrom()
})
toRUB.addEventListener('click', () => {
    toRUB.style.backgroundColor = '#833AE0'
    toRUB.style.color = '#FFFFFF'
    toUSD.style.backgroundColor = '#FFFFFF'
    toUSD.style.color = '#C6C6C6'
    toEUR.style.backgroundColor = '#FFFFFF'
    toEUR.style.color = '#C6C6C6'
    toGBP.style.backgroundColor = '#FFFFFF'
    toGBP.style.color = '#C6C6C6'
    toCurrency = 'RUB'
    findRate()
    findRateByClickTo()
})
toUSD.addEventListener('click', () => {
    toUSD.style.backgroundColor = '#833AE0'
    toUSD.style.color = '#FFFFFF'
    toRUB.style.backgroundColor = '#FFFFFF'
    toRUB.style.color = '#C6C6C6'
    toEUR.style.backgroundColor = '#FFFFFF'
    toEUR.style.color = '#C6C6C6'
    toGBP.style.backgroundColor = '#FFFFFF'
    toGBP.style.color = '#C6C6C6'
    toCurrency = 'USD'
    findRate()
    findRateByClickTo()
})
toEUR.addEventListener('click', () => {
    toEUR.style.backgroundColor = '#833AE0'
    toEUR.style.color = '#FFFFFF'
    toRUB.style.backgroundColor = '#FFFFFF'
    toRUB.style.color = '#C6C6C6'
    toUSD.style.backgroundColor = '#FFFFFF'
    toUSD.style.color = '#C6C6C6'
    toGBP.style.backgroundColor = '#FFFFFF'
    toGBP.style.color = '#C6C6C6'
    toCurrency = 'EUR'
    findRate()
    findRateByClickTo()
})
toGBP.addEventListener('click', () => {
    toGBP.style.backgroundColor = '#833AE0'
    toGBP.style.color = '#FFFFFF'
    toRUB.style.backgroundColor = '#FFFFFF'
    toRUB.style.color = '#C6C6C6'
    toEUR.style.backgroundColor = '#FFFFFF'
    toEUR.style.color = '#C6C6C6'
    toUSD.style.backgroundColor = '#FFFFFF'
    toUSD.style.color = '#C6C6C6'
    toCurrency = 'GBP'
    findRate()
    findRateByClickTo()
})

findRate()