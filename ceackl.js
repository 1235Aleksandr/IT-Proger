/* for(var i=10; i<=20; i+=2)
{
    if(i>15)
    break;
    console.log(i)
} */
/* for(var i=10; i<=20; i++)
{
     if(i%2 == 0)
    continue;

    console.log(i)
} */


var arr = [5,7,3,8,9,'stroka'];

for (var i=0;i<arr.length; i++){
    console.log("Элемент "+ (i + 1)+': '+ arr[i]);
}