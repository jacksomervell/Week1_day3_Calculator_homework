var num = prompt('choose a number');
console.log('num', num)

num = parseFloat(num);

while (isNaN(num)) {
  num = prompt('You must choose an actual number!')
}

var op = prompt('choose an operation')
console.log('op', op);

var opArray = ["-", "+", "/", "*"]

while (opArray.indexOf(op)=== -1) {
  op = prompt('You must select one of the four operations buddy!')
}



alert("Why is your console not open?") ;

