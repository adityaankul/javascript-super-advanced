//array - collection of objects of any data type
// predefined length as no significance
var colors=new Array(3)
colors[0]="red"
colors[1]="Green"
colors[2]="Blue"
colors[3]="crimson"

console.log(colors)
console.log(colors,length)

console.log(colors)

var fruits=new Array("Apples","Oranges","Grapes"," Dragon fruits")
console.log(fruits)

var vegetables=new Array("Potato","Onions","Tomato","Egg Plant")
console.log(vegetables)

var mixofBoth1=fruits.concat(vegetables)
console.log(mixofBoth1)

var mixofBoth2=vegetables.concat(fruits)
console.log(mixofBoth2)

var names=new Array('Johngalt','Tracey Whitney','Ayan Rand')
//concat 2 arrays or cancat array with string
var concat=names.concat(['Howard'])
//names.concat("howard Roark")
var concat=names.concat(true)
console.log(concat)





