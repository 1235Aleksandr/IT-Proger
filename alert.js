//alert('Какая хорошая погода!');
/* var data = confirm('вты хто?');
if(data){
    alert('ты молодец');
}
console.log(data); */

/* var data = prompt('скажите сколько вам лет?');
console.log(data) */


var person = null;
if (confirm('Ты уверен?')){
    person = prompt('введите ваше имя');
    alert("Привет, "+ person);
}else{
    alert('Вы нажали на "Отмена')
}