var person=new Object()
console.log(person)
//op is empty obj


//Due to below, as it is reference type it gains values
person["firstName"]="Scott"
person["lastName"]="Des"

var city="mycity";

person[city]="Hyderabad"

console.log(person)

var x=[1,2,3]
var y=x;
x.push(4)

console.log(x)
console.log(y)

var a=10;
var b=a;
a=20;
console.log(a)
console.log(b)

var m=[1,2,3,4]
var n=m;
m=[1,2,3,5]

console.log(m)
console.log(n)


console.log(person["firstName"])

person.state="Hyd"

person.address=new Object()

person.address.street="1st main"

console.log(person)

person["address"]["country"]="India"

console.log(person)

console.log(person.address.street)
console.log(person["address"]["street"])
