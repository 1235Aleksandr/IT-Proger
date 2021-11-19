document.getElementById('main-form').addEventListener('submit', checkForm);
function checkForm(event){
event.preventDefault();
var el = document.getElementById('main-form');
/* var name = document.getElementById('name').value;*/
var name = el.name.value;
var pass = el.pass.value;
var repass = el.repass.value;
var state = el.state.value;

/* console.log(state + " - " + pass + " - " + repass + " - ");*/
var error = "";
if(name == ""|| pass =="" || state =="")
    error = "Заполните все поля";
else if(name.length <= 1 || name.length > 50)
    error = "Длинна меньше/привышает символов";
else if(pass !=repass)
    error = "Пароль не совподает";
else if(pass.split('&').length > 1)
    error = "Пороль содержит символ &";


if(error !=""){
    document.getElementById('error').innerHTML = error;

    return false;
}else{
    alert('Все данные заполнены');
    window.location = 'file:///D:/myweb/%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE/MoGo/index.html#';
}
}