'use strict';

var calc = calculatorModule();

var numDisplay = document.getElementById('numberDisplay');

var boxPlus = document.getElementById('buttonPlus');
var boxMinus = document.getElementById('buttonMinus');
var boxMultiply = document.getElementById('buttonMultiply');
var boxDivide = document.getElementById('buttonDivide');
var boxEquals = document.getElementById('buttonEquals');
var boxWithdrawCash = document.getElementById('buttonWithdrawCash');
var boxDepositCash = document.getElementById('buttonDepositCash');
var boxGetBalance = document.getElementById('buttonGetBalance');
var boxClear = document.getElementById('buttonClear');
var boxDot = document.getElementById('buttonDot');
var box0 = document.getElementById('buttonZero');
var box00 = document.getElementById('buttonDoubleZero');
var box1 = document.getElementById('buttonOne');
var box2 = document.getElementById('buttonTwo');
var box3 = document.getElementById('buttonThree');
var box4 = document.getElementById('buttonFour');
var box5 = document.getElementById('buttonFive');
var box6 = document.getElementById('buttonSix');
var box7 = document.getElementById('buttonSeven');
var box8 = document.getElementById('buttonEight');
var box9 = document.getElementById('buttonNine');

var operator;

function clickClear(){
  calc.clearMemory();
  calc.saveMemory();
  numDisplay.innerHTML = '';
}

function clickAdd(){
  operator = 1;
  calc.add(parseInt(numDisplay.innerHTML));
  calc.saveMemory();
  calc.recallMemory();
  numDisplay.innerHTML = '';
}

function clickMinus(){
  operator = 2;
  calc.subtract(parseInt(numDisplay.innerHTML));
  calc.saveMemory();
  calc.recallMemory();
  numDisplay.innerHTML = '';
}

function clickMultiply(){
  operator = 3;
  calc.multiply(parseInt(numDisplay.innerHTML));
  calc.saveMemory();
  calc.recallMemory();
  numDisplay.innerHTML = '';
}

function clickDivide(){
  operator = 4;
  calc.divide(parseInt(numDisplay.innerHTML));
  calc.saveMemory();
  calc.recallMemory();
  numDisplay.innerHTML = '';
}

function clickEquals(){
if (operator === 1){
        calc.add(parseInt(numDisplay.innerHTML));
        calc.saveMemory();
        calc.recallMemory();
        numDisplay.innerHTML = calc.getTotal();
  }
if (operator === 2){
      calc.subtract(parseInt(numDisplay.innerHTML));
      calc.saveMemory();
      calc.recallMemory();
      numDisplay.innerHTML = calc.getTotal();
    }
if (operator === 3){
        calc.multiply(parseInt(numDisplay.innerHTML));
        calc.saveMemory();
        calc.recallMemory();
        numDisplay.innerHTML = calc.getTotal();
  }
if (operator === 4){
      calc.divide(parseInt(numDisplay.innerHTML));
      calc.saveMemory();
      calc.recallMemory();
      numDisplay.innerHTML = calc.getTotal();
    }
}

var keyEquals = document.createElement('button');
keyEquals.innerHTML = '=';
keyEquals.addEventListener('click', clickEquals);
boxEquals.appendChild(keyEquals);

var keyPlus = document.createElement('button');
keyPlus.innerHTML = '+';
keyPlus.addEventListener('click', clickAdd);
boxPlus.appendChild(keyPlus);

var keyMinus = document.createElement('button');
keyMinus.innerHTML = '-';
keyMinus.addEventListener('click', clickMinus);
boxMinus.appendChild(keyMinus);

var keyMultiply = document.createElement('button');
keyMultiply.innerHTML = '*';
keyMultiply.addEventListener('click', clickMultiply);
boxMultiply.appendChild(keyMultiply);

var keyDivide = document.createElement('button');
keyDivide.innerHTML = '/';
keyDivide.addEventListener('click', clickDivide);
boxDivide.appendChild(keyDivide);

var keyWithdrawCash = document.createElement('button');
keyWithdrawCash.innerHTML = 'Withdraw Ca$h';
keyWithdrawCash.addEventListener('click', function(event) {
  numDisplay.innerHTML += ' ';
});
boxWithdrawCash.appendChild(keyWithdrawCash);

var keyDepositCash = document.createElement('button');
keyDepositCash.innerHTML = 'Depo$it Ca$h';
keyDepositCash.addEventListener('click', function(event) {
  numDisplay.innerHTML += ' ';
});
boxDepositCash.appendChild(keyDepositCash);

var keyGetBalance = document.createElement('button');
keyGetBalance.innerHTML = 'Get Balance';
keyGetBalance.addEventListener('click', function(event) {
  numDisplay.innerHTML += ' ';
});
boxGetBalance.appendChild(keyGetBalance);

var keyClear = document.createElement('button');
keyClear.innerHTML = 'Clear';
keyClear.addEventListener('click', clickClear);
boxClear.appendChild(keyClear);

var keyDot = document.createElement('button');
keyDot.innerHTML = '.';
keyDot.addEventListener('click', function(event) {
  numDisplay.innerHTML += '.';
});
boxDot.appendChild(keyDot);

var key0 = document.createElement('button');
key0.innerHTML = '0';
key0.addEventListener('click', function(event) {
  numDisplay.innerHTML += '0';
});
box0.appendChild(key0);

var key00 = document.createElement('button');
key00.innerHTML = '00';
key00.addEventListener('click', function(event) {
  numDisplay.innerHTML += '00';
});
box00.appendChild(key00);

var key1 = document.createElement('button');
key1.innerHTML = '1';
box1.appendChild(key1);
console.log(numDisplay.innerHTML === '');
//if there is a value in the display, add a 1 digit
if (numDisplay.innerHTML === ''){
  key1.addEventListener('click', function(event) {
  numDisplay.innerHTML += '1';
  box1.appendChild(key1);
  });
}

var key2 = document.createElement('button');
key2.innerHTML = '2';
box2.appendChild(key2);
console.log(numDisplay.innerHTML === '');
if (numDisplay.innerHTML === ''){
  key2.addEventListener('click', function(event) {
  numDisplay.innerHTML += '2';
  box2.appendChild(key2);
  });
}

var key3 = document.createElement('button');
key3.innerHTML = '3';
box3.appendChild(key3);
console.log(numDisplay.innerHTML === '');
if (numDisplay.innerHTML === ''){
  key3.addEventListener('click', function(event) {
  numDisplay.innerHTML += '3';
  box3.appendChild(key3);
  });
}

var key4 = document.createElement('button');
key4.innerHTML = '4';
box4.appendChild(key4);
console.log(numDisplay.innerHTML === '');
if (numDisplay.innerHTML === ''){
  key4.addEventListener('click', function(event) {
  numDisplay.innerHTML += '4';
  box4.appendChild(key4);
  });
}

var key5 = document.createElement('button');
key5.innerHTML = '5';
box5.appendChild(key5);
console.log(numDisplay.innerHTML === '');
if (numDisplay.innerHTML === ''){
  key5.addEventListener('click', function(event) {
  numDisplay.innerHTML += '5';
  box5.appendChild(key5);
  });
}

var key6 = document.createElement('button');
key6.innerHTML = '6';
box6.appendChild(key6);
console.log(numDisplay.innerHTML === '');
if (numDisplay.innerHTML === ''){
  key6.addEventListener('click', function(event) {
  numDisplay.innerHTML += '6';
  box6.appendChild(key6);
  });
}

var key7 = document.createElement('button');
key7.innerHTML = '7';
box7.appendChild(key7);
console.log(numDisplay.innerHTML === '');
if (numDisplay.innerHTML === ''){
  key7.addEventListener('click', function(event) {
  numDisplay.innerHTML += '7';
  box7.appendChild(key7);
  });
}

var key8 = document.createElement('button');
key8.innerHTML = '8';
box8.appendChild(key8);
console.log(numDisplay.innerHTML === '');
if (numDisplay.innerHTML === ''){
  key8.addEventListener('click', function(event) {
  numDisplay.innerHTML += '8';
  box8.appendChild(key8);
  });
}

var key9 = document.createElement('button');
key9.innerHTML = '9';
box9.appendChild(key9);
console.log(numDisplay.innerHTML === '');
if (numDisplay.innerHTML === ''){
  key9.addEventListener('click', function(event) {
  numDisplay.innerHTML += '9';
  box9.appendChild(key9);
  });
}