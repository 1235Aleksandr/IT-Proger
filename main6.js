/* Объекты и функции(работа с датами) */
var data = new Date();


/* console.log(data.getFullYear());
console.log(data.getMonth()+1);
console.log(data.getDate()); */
console.log('Дата:  ' + data.getDate() +'.' + (data.getMonth()+1) +'.'+ data.getFullYear());
/* console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds()); */
console.log("Время: "+ data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds());


/* массивы */
var arr = [5, 7, 8, 9];
var strocka = arr.reverse().join(', ');

console.log(strocka.split());