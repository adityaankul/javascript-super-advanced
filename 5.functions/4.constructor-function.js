function Student(firstname,lastname){
    this.fname=firstname
    this.lname=lastname
}

var studentObj1= new Student('Scott','Dean')
console.log(studentObj1)

var studentObj2= new Student('Ada','Col')
console.log(studentObj2)

var person={name:'scott',city:'boston'}
var emptyObject={}