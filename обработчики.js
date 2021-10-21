/* function onclickbutton(){
    alert('Ты нажал')
} */


/* function loadPage() {
    document.getElementById('status').style.display = 'block';
   } */
var counter = 0;

function  onclickbutton(el){
    counter++;
    el.innerHTML = "Ты нажал: " + counter;
}