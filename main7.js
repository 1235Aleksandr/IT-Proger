/* Классы */
class Persona {
    constructor(name, age, IQ){
        this.name = name;
        this.age = age;
        this.IQ = IQ;
    }

 info(){
    console.log('человек:   ' + this.name + 'Возраст:   ' + this.age);
 }
}

var alex = new Persona('Alex    ', 45, true);
var baba = new Persona('Baba    ', 25, '    Ну такое себе');

alex.info();
baba.info();
/* console.log(alex.name);
console.log(baba.name + baba.age + baba.IQ); */