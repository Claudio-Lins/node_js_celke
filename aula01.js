console.log('Gerenciador Financeiro')

var client = "Claudio Lins"

console.log('cliente: ' + client)

var valProduct = 100;
var valDiscount = 37

var discountFunc = require('./modules/calDiscount')

var finalValue = discountFunc(valProduct, valDiscount)

console.log(finalValue)