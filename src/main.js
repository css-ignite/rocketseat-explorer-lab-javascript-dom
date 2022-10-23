import "./css/index.css"
import IMask from "imask"

// Utilizando o querySelector
// busco a classe .cc-bg
// dentro da classe .cc-bg eu busco o svg
// dentro do svg eu busco o primeiro nível de g
// dentro de g eu pego o primeiro filho g:nth-child(1)
// peho o primeiro nivel de path
const ccBgColor01 = document.querySelector(
  ".cc-bg svg > g g:nth-child(1) > path"
)

const ccBgColor02 = document.querySelector(
  ".cc-bg svg > g g:nth-child(2) > path"
)

const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

// Gero o log no console do navegador
console.log(ccBgColor01)

// Função para alterar as cores do cartão conforme tipo informado
function setCardType(type) {
  // Array de Colors
  const colors = {
    visa: ["#436d99", "#2d57f2"],
    mastercard: ["#df6f29", "#c69347"],
    default: ["#black", "#gray"],
  }

  // Alterando a cor pro filho 1
  ccBgColor01.setAttribute("fill", colors[type][0])
  // Alterando a cor pro filho 2
  ccBgColor02.setAttribute("fill", colors[type][1])
  // Alterando a logo do cartão
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

// Chamando a função no main.js
// setCardType("mastercard")

// Setando a função como global
globalThis.setCardType = setCardType

// Utilizando o IMask
// Cada elemento uma variável
// Dados que não tem alteração utilizar const
var securityCode = document.querySelector("#security-code")

var securityCodePattern = {
  mask: "0000",
}

var securityCodeMask = IMask(securityCode, securityCodePattern)

const expirationDate = document.querySelector("#expiration-date")

const expirationDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
  },
}

const expirationDateMask = IMask(expirationDate, expirationDatePattern)

const cardNumber = document.querySelector("#card-number")

const cardNumberPattern = {
  mask: [
    {
      mask: "0000 0000 0000 0000",
      regex: /^4\d{0,15}/,
      cardtype: "visa",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
      cardtype: "mastercard",
    },
    {
      mask: "0000 0000 0000 0000",
      cardtype: "default",
    },
  ],
  dispatch: function (appended, dynamicMasked) {
    const number = (dynamicMasked.value + appended).replace(/\D/g, "")

    const foundMask = dynamicMasked.compiledMasks.find(function (item) {
      return number.match(item.regex)
    })

    return foundMask
  },
}

const cardNumberMask = IMask(cardNumber, cardNumberPattern)

cardNumberMask.on("accept", function () {
  const cardType = cardNumberMask.masked.currentMask.cardtype
  setCardType(cardType)
  updateCardNumber(cardNumberMask.value)
})

function updateCardNumber(cardNumber) {
  const ccNumber = document.querySelector(".cc-number")
  ccNumber.innerText =
    cardNumber.length === 0 ? "0000 0000 0000 0000" : cardNumber
}

// cardNumber.addEventListener("input", function (event) {
//   const ccNumber = document.querySelector(".cc-number")

//   ccNumber.innerText =
//     cardNumber.value.length === 0 ? "0000 0000 0000 0000" : cardNumber.value
// })

// Coloco o # para saber que é um ID
const addButton = document.querySelector("#add-card")

addButton.addEventListener("click", function () {
  console.log("#add-card.onClick")
  console.log("#Opa! Você clicou no botão!")
  alert("Cartão adicionado!")
})

document.querySelector("form").addEventListener("submit", function (event) {
  // Previnir o comportamento padrão do submit
  event.preventDefault()
})

const cardHolder = document.querySelector("#card-holder")

cardHolder.addEventListener("input", function (event) {
  const ccHolder = document.querySelector(".cc-holder .value")

  ccHolder.innerText =
    cardHolder.value.length === 0
      ? "NOME CONFORME ESCRITO NO CARTÃO"
      : cardHolder.value
})

expirationDateMask.on("accept", function () {
  updateExpirationDate(expirationDateMask.value)
})

function updateExpirationDate(expirationDate) {
  const ccExpiration = document.querySelector(".cc-expiration .value")
  ccExpiration.innerText =
    expirationDate.length === 0 ? "00/00" : expirationDate
}

// expirationDate.addEventListener("input", function (event) {
//   const ccExpiration = document.querySelector(".cc-expiration .value")

//   ccExpiration.innerText =
//     expirationDate.value.length === 0 ? "00/00" : expirationDate.value
// })

securityCodeMask.on("accept", function () {
  updateSeurityCode(securityCodeMask.value)
})

function updateSeurityCode(securityCode) {
  const ccSecurity = document.querySelector(".cc-security .value")
  ccSecurity.innerText = securityCode.length === 0 ? "123" : securityCode
}

// securityCode.addEventListener("input", function (event) {
//   const ccSecurity = document.querySelector(".cc-security .value")

//   ccSecurity.innerText =
//     securityCode.value.length === 0 ? "123" : securityCode.value
// })
