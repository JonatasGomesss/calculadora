
var btn7 = document.querySelector('#btn7')
var btn8 = document.querySelector('#btn8')
var btn9 = document.querySelector('#btn9')
var btn4 = document.querySelector('#btn5')
var btn5 = document.querySelector('#btn5')
var btn6 = document.querySelector('#btn6')
var btn1 = document.querySelector('#btn1')
var btn2 = document.querySelector('#btn2')
var btn3 = document.querySelector('#btn3')


var somar = document.querySelector('.btn-calc')

input = document.querySelector('#display')


function number7() {
    btn7 = 7
    input.value += 7
}
function number8() {
    btn7 = 8
    input.value += 8
}
function number9() {
    btn7 = 9
    input.value += 9
}
function number4() {
    btn7 = 4
    input.value += 4
}
function number5() {
    btn7 = 5
    input.value += 5
}
function number6() {
    btn7 = 6
    input.value += 6
}
function number1() {
    btn7 = 1
    input.value += 1
}
function number2() {
    btn7 = 2
    input.value += 2
}
function number3() {
    btn7 = 3
    input.value += 3
}
function number0() {
    btn7 = 0
    input.value += 0
}


//calculos

function soma() {
    let currentValue = input.value;

    if (currentValue.length === 0 || currentValue[currentValue.length - 1] !== '+') {
        input.value += "+";
    }
}
function menos() {
    let currentValue = input.value;

    if (currentValue.length === 0 || currentValue[currentValue.length - 1] !== '-') {
        input.value += "-";
    }
}
function mult() {
    let currentValue = input.value;

    if (currentValue.length === 0 || currentValue[currentValue.length - 1] !== '*') {
        input.value += "*";
    }
}   
function dividir() {
    let currentValue = input.value;

    if (currentValue.length === 0 || currentValue[currentValue.length - 1] !== '/') {
        input.value += "/";
    }
}
 

function ponto(){
    let currentValue = input.value;

    if (currentValue.length === 0 || currentValue[currentValue.length - 1] !== '.') {
        input.value += ".";
    }
} 
//limpar

function limpar() {
    input.value =''
}

//troca de sinal

function igual() {
    var result = eval(input.value)
    input.value = result

}
