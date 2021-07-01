var obj={}
var person= Object.create(obj)

var person2=Object.create(null)

var person3=Object.create({})

var person4=Object.create(new Object())

var person5=Object.create(Object.create(null))

console.log(person)
console.log(person2)
console.log(person3)
console.log(person4)
console.log(person5)

var person = Object.create(null)