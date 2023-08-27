/*


Primitives:
number
string
boolean
undefined
null
symbol
bigint

*/


let numb = 10
numb = '11'

let isShowed = false

const user = {
    name: 'Walter',
    lastName: 'White',
    birthday: null,
}

// для null и undefined нужно объявлять тип переменной, т.к. он не объявляется автоматически как для других типов
let myNull: null = null //
let myUndefined: undefined = undefined

let mySymbol = Symbol('text')
let myBigint = 1245n