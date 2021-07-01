//Object Literal syntax
var person={}

//creating an object with properties outside
console.log(person)

person["firstName"]="adi"
person.lastName="Mahesh"

person.age=16
person.address={}

person.address.city="Hyd"
person.address.state="Telangana"
person.address.country="India"


console.log(person)


//creating object with properties inside
var student={
    firstName: 'John',
    lastName: 'Who is ?',
    age: 35,
    address:{
        city:'Boston',
        state:'MA',
        pincode: 112234,
        country:'USA'
    },
    getFullName: function(){
        return this.firstName + ' ' + this.lastName
    },
    getFullName2: function(){
        return student.firstName + ' ' +student.lastName
    }
}
console.log(student)
console.log(student.getFullName())