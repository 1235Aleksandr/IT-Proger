/* Интервалы */
var counter = 0;
var id = setInterval(my_func,1000);

function my_func(){
    counter++;
    console.log('Прошло секунд: '+ counter);

    if(counter ==3)
    clearInterval(id);
}


/* setInterval(function(){
    counter++;
    console.log('Прошло секунд: '+ counter);
},1000); */