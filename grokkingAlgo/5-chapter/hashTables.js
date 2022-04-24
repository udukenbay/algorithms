/**
 * Хэш-таблицы - одна из самыз полезных базовых структур
 * Реализация, Коллизия, Хэш-функции
 * хэш-функция - "отображает строки на числа"
 * хэш-функция - должна быть последовательной. Разным словам должны соответствовать разные числа(я так поняла адреса к значениям). name -> index
 * хэш-функция - знает размер массива и возвращает только действительные индексы. Так если array.length is 5, функция не вернет вам 100.
 * хэш-функция - при первом вызове ее вы узнаете, где следует сохранить цену на авокадо, а при след вызовах она сообщит где взять эту цену.
 * Массивы и списки напрямую отображаются на адреса памяти, хэш-функция - определяет место хранения элементов при помощи хэш-функций.
 * они также известны как: "ассоциативные массивы", "словари", "отображения", "хэш-карты", "хэши", и т д.
 * хэш-таблица - связывает ключи со значениями (key, value)
 * Problems: 1-поиск в контактах name => phone number; 2-Преобразование DNS name => IP address; 3-Исключение дубликатов - избиратели, если голосовал гони его. 4-Кэширование.
 * Хэши хороши при решении:
 *  **моделирование отношений между объектами
 *  **устранение дубликатов
 *  **кэширование/запоминание данных вместо выполнения работы на сервере
 * Коллизии - двум ключам назначается один элемент массива. Неско-ко ключей отображаются на один элемент, в этом элементе создается связанный список.
 * Коэффициент заполнения = кол-во элементов в хэш-таблице / общее кол-во элементов.
 * хэш-таблицы - исп-ют массив для хранения данных.
 * алгоритм SHA
 * хэш-таблица - создается объеднинением хэш-функции с массивом.
*/
let hashTables = function(arr) {}

let voted = {};
let check_voted = function(voted, name) {
    if(voted.get(name))
        return 'kick them out!';
    else {
        voted[name] = true;
        return 'let them vote!';
    }
}

let cache = {};
let get_page = function(url) {
    if(cache.get(url))
        return cache(url);//возвращает кэшированные данные
    else {
        let data = get_data_from_server(url);
        cache(url) = data;//данные сначала сохраняются в кэше
        return data;
    }
}