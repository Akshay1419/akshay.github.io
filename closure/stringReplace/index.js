// js program for replace string character


var string = " Mr Red has red car & red bike"

console.log(string)

var reg= new RegExp( 'red', 'gi')

var newString = string.replace( reg, 'blue')

console.log(newString);