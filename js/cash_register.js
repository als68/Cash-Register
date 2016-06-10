'use strict';

var calc = calculatorModule();
console.log(calc);

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

function clickAdd(){
  console.log('click', numDisplay.innerHTML);
  console.log('click2', calc.add(parseInt(numDisplay.innerHTML)));
  console.log('click3', calc.getTotal());
}

var keyPlus = document.createElement('button');
keyPlus.innerHTML = '+';
keyPlus.addEventListener('click', clickAdd);
boxPlus.appendChild(keyPlus);

var keyMinus = document.createElement('button');
keyMinus.innerHTML = '-';
keyMinus.addEventListener('click', function(event) {
  numDisplay.innerHTML += '-';
  calc.subtract(x);
});
boxMinus.appendChild(keyMinus);

var keyMultiply = document.createElement('button');
keyMultiply.innerHTML = '*';
keyMultiply.addEventListener('click', function(event) {
  calc.multiply(x);
  numDisplay.innerHTML += '*';
});
boxMultiply.appendChild(keyMultiply);

var keyDivide = document.createElement('button');
keyDivide.innerHTML = '/';
keyDivide.addEventListener('click', function(event) {
  calc.divide(x);
  numDisplay.innerHTML += '/';
});
boxDivide.appendChild(keyDivide);

var keyEquals = document.createElement('button');
keyEquals.innerHTML = '=';
keyEquals.addEventListener('click', function(event) {
  numDisplay.innerHTML += '=';
});
boxEquals.appendChild(keyEquals);

var keyWithdrawCash = document.createElement('button');
keyWithdrawCash.innerHTML = 'Withdraw Ca$h';
keyWithdrawCash.addEventListener('click', function(event) {
  numDisplay.innerHTML += 'PLACEHOLDER';
});
boxWithdrawCash.appendChild(keyWithdrawCash);

var keyDepositCash = document.createElement('button');
keyDepositCash.innerHTML = 'Depo$it Ca$h';
keyDepositCash.addEventListener('click', function(event) {
  numDisplay.innerHTML += 'PLACEHOLDER';
});
boxDepositCash.appendChild(keyDepositCash);

var keyGetBalance = document.createElement('button');
keyGetBalance.innerHTML = 'Get Balance';
keyGetBalance.addEventListener('click', function(event) {
  numDisplay.innerHTML += 'PLACEHOLDER';
});
boxGetBalance.appendChild(keyGetBalance);

var keyClear = document.createElement('button');
keyClear.innerHTML = 'Clear';
keyClear.addEventListener('click', function(event) {
  numDisplay.innerHTML += 'PLACEHOLDER';
});
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
key1.addEventListener('click', function(event) {
  numDisplay.innerHTML += '1';
});
box1.appendChild(key1);

var key2 = document.createElement('button');
key2.innerHTML = '2';
key2.addEventListener('click', function(event) {
  numDisplay.innerHTML += '2';
});
box2.appendChild(key2);

var key3 = document.createElement('button');
key3.innerHTML = '3';
key3.addEventListener('click', function(event) {
  numDisplay.innerHTML += '3';
});
box3.appendChild(key3);

var key4 = document.createElement('button');
key4.innerHTML = '4';
key4.addEventListener('click', function(event) {
  numDisplay.innerHTML += '4';
});
box4.appendChild(key4);

var key5 = document.createElement('button');
key5.innerHTML = '5';
key5.addEventListener('click', function(event) {
  numDisplay.innerHTML += '5';
});
box5.appendChild(key5);

var key6 = document.createElement('button');
key6.innerHTML = '6';
key6.addEventListener('click', function(event) {
  numDisplay.innerHTML += '6';
});
box6.appendChild(key6);

var key7 = document.createElement('button');
key7.innerHTML = '7';
key7.addEventListener('click', function(event) {
  numDisplay.innerHTML += '7';
});
box7.appendChild(key7);

var key8 = document.createElement('button');
key8.innerHTML = '8';
key8.addEventListener('click', function(event) {
  numDisplay.innerHTML += '8';
});
box8.appendChild(key8);

var key9 = document.createElement('button');
key9.innerHTML = '9';
key9.addEventListener('click', function(event) {
  numDisplay.innerHTML += '9';
});
box9.appendChild(key9);