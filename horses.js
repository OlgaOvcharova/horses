/*
Необходимо написать функцию конструктор Horse для создания лошадей:


1-я часть.

1. У созданной лошади есть свойство имя, значение можно задать при создании
лошади, если не передать имя лошадки - Anonim.
2. У каждой лошади есть ПРИВАТНОЕ свойство пробег.
3. Кроме этого у каждой лошадки есть метод бежать, который увеличивает пробег на
свой аргумент (каждая новая лошадь создается с нулевым пробегом (не бита, не
крашена, без пробега по СНГ)).
4. Прочитать свойство пробег у лошади можно только через метод получитьПробег.

2-я часть.
    У каждой лошади есть общее свойство - общийПробег
общийПробег увеличивается аналогично пробегу, но - любая лошадь, которая бежит,
    увеличивает общийПробег у ВСЕХ лошадей.

3-я часть.
    У лошади добавляется свойство усталость. Со старта это свойство равно 0.
Усталость увеличивается на 1 каждый 1 км пробега, если усталость достигает 10,
    лошадь отдыхает 3 секунды и снова бежит, если ей осталось что бежать, после
отдыха усталость обнуляется.
*/

const maxFatigue = 10;

function hourse(name = 'Anonim') {

    if (typeof hourse.totalMileage == 'undefined') {
        hourse.totalMileage = 0;
    }

    this.name = name;
    this.fatigue = 0;
    var mileage = 0;

    this.takeRest = function (obj, period = 3) {
        obj.fatigue -= maxFatigue;
    }

    this.run = function (increment) {


        const futureFatigue = this.fatigue + increment;
        const isNeedRest = futureFatigue > maxFatigue;

        if (isNeedRest) {
            let lenghtBeforeRest = maxFatigue - this.fatigue;
            this.run(lenghtBeforeRest);
            increment -= lenghtBeforeRest;
            this.takeRest(this);
            if ((this.fatigue + increment) > maxFatigue) {
                this.run(increment);
            }
        }

        mileage += increment;
        hourse.totalMileage += increment;
        this.fatigue += increment;
    }

    this.getMileage = function () {
        return mileage;
    }
}

let hourse1 = new hourse();
let hourse2 = new hourse('Noleg The Winner');

hourse1.run(10);
hourse2.run(3);
var test = hourse1.getMileage() + hourse2.getMileage();
var total = hourse.totalMileage;
console.log(test);
