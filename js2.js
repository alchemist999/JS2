// function fib(n){
// 	if (n==1||n==2) return 1;
// 	else return fib(n-2)+fib(n-1);		
// 	}
// 	var userNum=+prompt('Введіть порядковий номер числа Фібоначчі');
// alert(fib(userNum));





function fibonacci(n) {

  if (n >= 2) {
    userNum = fibonacci(n - 1) + fibonacci(n - 2);
  } else {
    userNum = n
  }

  return userNum;
}

  var userNum=+prompt('Введіть порядковий номер числа Фібоначчі');

alert(fibonacci(userNum)); 




// function fibonacci2(n) {
//   var sq5 = Math.sqrt(5);
//   var a = (1 + sq5) / 2;
//   var b = (1 - sq5) / 2;
//   return (Math.pow(a, n) - Math.pow(b, n)) / sq5;
// }
// var userNum=+prompt('Введіть порядковий номер числа Фібоначчі');
// alert(fibonacci2(userNum));