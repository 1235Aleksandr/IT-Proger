var text = document.getElementById('text');
text.title = "new text";
console.log(text.title);


text.style.color = "red";
text.style.backgroundColor = "blue";


text.innerHTML = "New<br>string";
/* document.getElementById('text').style.color = "white" */

/* var spans = document.getElementsByTagName("span");*/

var spans = document.getElementsByClassName("simple-text")/*выбор обьекта по классу*/
for (var i = 0; i< spans.length; i++){
    console.log(spans[i].innerHTML);
}

