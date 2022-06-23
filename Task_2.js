//функцию, которая принимает в качестве аргументов строку и объект,\
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.
function checkAttr(str, obj){
    return obj[str] != undefined
}

const obj = {
    name: 'alex',
    age: 8
}
console.log(checkAttr('age', obj))
console.log(checkAttr('mail', obj))