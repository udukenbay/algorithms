// Бинарный поиск - на вход получаем отсортированный список.
// С бинарным поиском вы каждый раз загадываете число в середине диапазона и исключаете половину оставшихся чисел.
/**
 * @param {number[]} list
 * @param {number} item
 * @return {number[]}
 */
 var binary_search = function(list, item) {
    //числа по которым проводится поиск
    //в этих переменных хранятся границы той части списка, в которой выполняется поиск
    let low = 0;
    let high = list.length - 1;

    let mid;// = (low + high) / 2; //если значение (low+high) нечетно, то программа автоматически округляет значение mid в меньшую сторону
    let guess;// = list[mid];

    while(low <= high) {
        mid = (low + high) / 2;
        guess = list[mid];

        if (guess == item)
            return mid;
        if (guess > item)
            high = mid - 1;
        else low = mid + 1;
        
        return "None";
    }

    return null;
};

console.log(binary_search([1, 3, 5, 7, 9, 11, 15], 3));