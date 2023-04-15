// Break camelCase 6kyu
// Complete the solution so that the function will break up camel casing, using a space between words.
// ex:
// "camelCasing"       =>  "camel Casing"
// "yoHabloNoEnlgis"   =>  "yo Hablo No Enlgis"
// ""                  =>  ""

// function takes in a string
// create a str of capital letters that you can compare to
// split the string param into an array of letters
// iterate over the array check each letter and see if its included in the capital letter str created above, if it is add a space before the letter to break the camelCasing
// join the new array back into a string and return it 

function breakCamel(str) {
 const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const strArr = str.split('');
 return strArr.map(el => uppercase.includes(el) ? ` ${el}` : el).join('');
}

console.log(breakCamel('yoyoNoHabloEspanolSenorHunta'))