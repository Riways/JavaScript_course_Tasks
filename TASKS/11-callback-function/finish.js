/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */


const callBackFoo = () => {
    console.log("Hello, wolrd!")
}

setTimeout(callBackFoo, 5000)