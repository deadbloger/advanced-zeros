// Идея с https://brilliant.org/wiki/trailing-number-of-zeros/ и https://www.abakbot.ru/online-16/351-fac-fac
module.exports = 
function getZerosCount(number, basesystem) {
    //let number = 46899647;
    //let basesystem = 232;
    let integersArray = [];
    // let baseExponentArray = []; // отладка 

    // раскладываем на множители число
    // function getSimpleMnNumber(number) {
    //     let arrNumber = [];

    //     for (let i = 2; i <= number; i++) {
    //         while (number % i == 0 && number > 1 && number) {
    //             arrNumber.push(i);
    //             number = number / i;
    //         }
    //     }
    //     return arrNumber;
    // }

    // let simpleIntegersNumber = getSimpleMnNumber(number);
    // console.log('Разложим на множители число: ', simpleIntegersNumber) // все множители из простых чисел (1-9)


    // раскладываем на множители степень
    function getSimpleMnBase(basesystem) {
        let arrPower = [];

        for (let i = 2; i <= basesystem; i++) {
            while (basesystem % i == 0 && basesystem > 1 && basesystem) {
                arrPower.push(i);
                basesystem = basesystem / i;
            }
        }
        return arrPower;
    }

    let simpleIntegersBase = getSimpleMnBase(basesystem);
    console.log('Разложим на множители степень: ', simpleIntegersBase) // все множители из простых чисел (1-9)


    // ищем среди 2 массивов (массив множителей числа и массив множителей степени) и находим наибольший множитель
    //let allIntegers = simpleIntegersNumber.concat(simpleIntegersBase);
    //console.log ('Все множители: ', allIntegers) // Все множители из 2х массивов

    let maxInteger = Math.max.apply(null, getSimpleMnBase(basesystem))
    console.log('Наибольший множитель: ', maxInteger) // выбираем наибольший множитель

    let maxIntegerPower = simpleIntegersBase.filter(i => i === maxInteger).length;
    console.log('Степень наибольшего множителя: ', maxIntegerPower) // определяем степень максимального множителя


    let base = maxInteger;

    for (i = 1; i < 256; i++) { // задаем количество итераций в 256
        baseExponent = Math.pow(base, i) // возводим base в возрастающую степень (1, 2(квадрат), 3 (куб)...)

        if (baseExponent > number)
            break; // прерываем цикл чтобы не вычислять операции, которые вернут меньше 1
        //   console.log(baseExponent)


        addInt = integersArray.unshift(Math.floor(number / baseExponent)) // ищем количество вхождений множителей

        intSumm = Math.floor(integersArray.reduce((a, b) => a + b, 0) / maxIntegerPower); // вычисляем количество вхождений максимального элемента (нули)
    }



    console.log(integersArray)
    console.log(intSumm)

    // parseInt(input, the_input_base).toString(the_conversion_base);
    return intSumm



}
//console.log('need 14460180 || ', getZerosCount(72300914, 160))