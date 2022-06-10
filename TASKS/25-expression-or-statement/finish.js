/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */
//expression
15
//statement
const myObject = {
  //statement
  x: 10,
  //statement
  y: true,
}
//expression statement
myObject.z = 'abc'
//expression statement
delete myObject.x
//statement
let newVariable
//expression statement
newVariable = 30 + 5
//statement
console.log(newVariable)

//statement
if (newVariable > 10) {

  //expression statement
  console.log(`${newVariable} больше 10`)
}
