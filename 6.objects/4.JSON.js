//valid json:
var obj1={
    "userId": 1,
    "id": 1,
    "title":"This is title",
    "body": "this is body"
}
console.log(obj1)

//invalid json:
var obj2={
    userid : 1,
    id: 1,
    title: 'This is title',
    body: 'This is body'

}
console.log(obj2)

var person={"firstName":'John',"lastName":"Galt"}

console.log(person, typeof person)

var personString =JSON.stringify(person)
console.log(personString, typeof personString)

var personObject=JSON.parse(personString)
console.log(personObject)