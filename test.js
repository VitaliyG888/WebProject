
// for (var i = 0; i < 5; i++)  {
//   (function(i) {
//     setTimeout(() => console.log(i), 0);
//  })(i);
// };

var x = 10;
function foo(a) {
  var b = 20;

  function bar(c) {
    var d = 30;
    return boop(x + a + b + c + d);
  }

  function boop(e) {
    return e * -1;
  }

  return bar;
}

var moar = foo(5); // Замыкание
/*
  Функция ниже выполняет функцию bar, которая была возвращена в тот момент,
  когда мы выполнили функцию foo в строке выше. Функция bar
  вызывает boop, в этот момент bar получает приостановку и boop перемещается
  на вершину стека вызовов(call stack) (см. скриншот ниже)
*/
moar(15);