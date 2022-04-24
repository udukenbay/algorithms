/**
    selectionSort - сортировка выбором
    Linked List - связанные списк > в списке элементы распределяются в произвольных местах памяти, при этом в одном элементе хранится адрес след элемента
    * списки обеспечивают быструю вставку и удаление
    Array - Массив > в массиве все элементы хранятся в памяти рядом друг с другом
    * массивы обеспечивают быстрое чтение

 */
let selectionSort = function(arr) {
    let newArr = [];
    let smallest = 0;
    for(let i = 0; i < arr.length; i++) {
        smallest = findSmallest(arr);
        newArr.push(arr.pop(smallest));
    }
    return newArr;
}

function findSmallest(arr) {
    let smallest = arr[0];
    let smallest_index = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i;
        }
    }
    return smallest_index;
}

console.log(selectionSort([5, 3, 6, 2, 10]));