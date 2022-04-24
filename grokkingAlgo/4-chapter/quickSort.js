/**
 * Функциональное программирование
    *когда пишете рекурсивную функцию, в которой задействован массив, - базовым случаем часто ока-ся пустой массив или массив из одного элемента

    *стратегия "разделяй и властвуй" основана на разбиении задачи на уменьшающиеся фрагменты.
    *Если вы используете стратегию "разделяй и властвуй" со списком, то базовым случаем, скорее всего, яв-ся empty array or array.length=1
    *Быстрая сортировка - выберите в качестве опорного(pivot) случайный элемент.
    *Среднее время выполнения = O(n log n)
    *Константы в "О-большом" иногда могут иметь значение. Именно поэтому быстрая сортировка быстрее сортировки слиянием
    *При сравнении простой сортировки с бинарной, константа почти никогда роли не играет. Т к O(log n)-binary слишком сильно превосходит O(n) по скорости при большом размере списка.
*/
//1
//суммировать массив чисел
let sum = function(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++)
        total += arr[i];
    return total;
}

//sum in recursion way
// sum [] = 0; ////базовый случай
// sum (x:xs) = x + (sum xs) ////рекурсивный случай

//2
//код для функции sum
let sum = function(list) {
    if(list.length == 0)
        return 0;
    //return list[0] + sum(list[1:]);//without comments
}

//рекурсивная функция для подсчета элементов в списке
let count = function(list) {
    if(list.length == 0)
        return 0;
    //return 1 + count(list[1:]);//without comments
}

//3
let quickSort = function(array) {
    if(array.length < 2)
        return array;//базовый случай: массивы с 0 и 1 элементом уже "sorted"
    else {
        let pivot = array[0];//рекурсивный случай
        let less = array.map((i) => {if(i < pivot) return i;});//sub-array of all elements, less than pivot
        let greater = array.map((i) => {if(i > pivot) return i;});//подмассив всех элементов, больших опорного
        return quickSort(less) + [pivot] + quickSort(greater);
    }
}

console.log(quickSort([10, 5, 2, 3]));

//4 - сортировка слиянием и быстрая сортировка
function print_items(list) {
    list.map((item) => console.log(item));
}