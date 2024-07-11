
const convertbutton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-converted")
const currencyConvertSelect = document.querySelector(".select-convert")


//Função principal da converção//
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em Real//
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas// 


    //variáveis em relação ao rela//
    const dolarToday = 5.42
    const euroToday = 5.87
    const libraToday = 6.96
    const bitcoinToday = 317789.79

    //variáveis em relação ao Dolar//
    const realToday = 5.42
    const euroTodayEua = 1.082
    const libraTodayEua = 1.28
    const bitcoinTodayEua = 58296.70

    //variáveis em ralação ao Euro//
    const realTodayEuro = 5.87
    const dolarTodayEuro = 0.924
    const libraTodayEuro = 1.186
    const bitcoinTodayEuro = 53187.56

    //variáveis em relação a Libra//
    const realTodayLibra = 6.96
    const dolarTodayLibra = 0.778
    const euroTodayLibra = 0.843
    const bitcoinTodayLibra = 44717.62

    //variáveis em relação ao bitcoin//

    const realTodaybitcoin = 317789.79
    const dolarTodaybitcoin = 58296.70
    const euroTodaybitcoin = 53187.56
    const libraTodaybitcoin = 44717.62


    // conversão de Real para outras moedas//

    if (currencyConvertSelect.value == "real" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencyConvertSelect.value == "real" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencyConvertSelect.value == "real" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencyConvertSelect.value == "real" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }


    // Conversão de Dolar para outras moedas//
    if (currencyConvertSelect.value == "dolar" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToday)
    }

    if (currencyConvertSelect.value == "dolar" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroTodayEua)
    }

    if (currencyConvertSelect.value == "dolar" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraTodayEua)
    }

    if (currencyConvertSelect.value == "dolar" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinTodayEua)
    }

    // conversão do euro para outras moedas//
    if (currencyConvertSelect.value == "euro" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realTodayEuro)
    }

    if (currencyConvertSelect.value == "euro" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarTodayEuro)
    }

    if (currencyConvertSelect.value == "euro" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraTodayEuro)
    }

    if (currencyConvertSelect.value == "euro" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinTodayEuro)
    }

    //Conversão para Libras para outras moedas// 
    if (currencyConvertSelect.value == "libra" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realTodayLibra)
    }

    if (currencyConvertSelect.value == "libra" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarTodayLibra)
    }

    if (currencyConvertSelect.value == "libra" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroTodayLibra)
    }

    if (currencyConvertSelect.value == "libra" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinTodayLibra)
    }

    //Conversão para Bitcoin para outras moedas//
    if (currencyConvertSelect.value == "bitcoin" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realTodaybitcoin)
    }

    if (currencyConvertSelect.value == "bitcoin" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * dolarTodaybitcoin)
    }

    if (currencyConvertSelect.value == "bitcoin" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * euroTodaybitcoin)
    }

    if (currencyConvertSelect.value == "bitcoin" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * libraTodaybitcoin)
    }
    


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

// quando mudar o select moeda a ser convertida, nessa linha de código muda o nome da moeda e bandeira do 1° select//
function changeConvert() {
    const currencyFirst = document.querySelector(".currency-first")
    const currencyImgFirst = document.querySelector(".currency-img-first")


    if (currencyConvertSelect.value == "real") {
        currencyFirst.innerHTML = "Real"
        currencyImgFirst.src = "assets/real.png"
    }

    if (currencyConvertSelect.value == "dolar") {
        currencyFirst.innerHTML = "Dolar Americano"
        currencyImgFirst.src = "assets/dolar.png"
    }

    if (currencyConvertSelect.value == "euro") {
        currencyFirst.innerHTML = "Euro"
        currencyImgFirst.src = "assets/euro.png"
    }

    if (currencyConvertSelect.value == "libra") {
        currencyFirst.innerHTML = "Libra"
        currencyImgFirst.src = "assets/libra.png"
    }

    if (currencyConvertSelect.value == "bitcoin") {
        currencyFirst.innerHTML = "Bitcoin"
        currencyImgFirst.src = "assets/bitcoin.png"
    }

}



//quando mudar o select moeda a ser convertida, nessa linha de código muda o nome da moeda e bandeira da 2° select//
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/real.png"
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()

}

// Prestar atenção nos eventos de mudança e click.//
currencySelect.addEventListener("change", changeCurrency)
convertbutton.addEventListener("click", convertValues)
currencyConvertSelect.addEventListener("change", changeConvert)