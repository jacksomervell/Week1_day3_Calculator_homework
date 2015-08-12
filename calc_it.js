var num = prompt('choose a number');
console.log('num', num)

num = parseFloat(num);

while (isNaN(num)) {
  num = prompt('You must choose an actual number!')
}

var op = prompt('choose an operation')
console.log('op', op);

var opArray = ["-", "+", "/", "*"]
console.log(opArray)

while (opArray.indexOf(op)=== -1) {
  op = prompt('You must select one of the four operations buddy!')
}

var num2 = prompt('choose another number')
console.log(num2)

while (isNaN(num2)) {
  num2 = prompt('You must choose an actual number!')
}

num2 = parseFloat(num2);

if (op === opArray[0]) {
  alert(num - num2);
}

if (op === opArray[1]) {
  alert(num + num2);
}

if (op === opArray[2]) {
  alert(num / num2);
}

if (op === opArray[3]) {
  alert(num * num2);
}



