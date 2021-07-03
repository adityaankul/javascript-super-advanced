var a=[1,2]
var b=a;
a=20;
a=[1,2]

var x=[1,2,3]
var y=x;
x=[1,2,4]
console.log(x)
console.log(y)

var array=[1,2,3]
console.log(array)

var name=1+2+"uma" + 4+5
console.log(name)
var x=1
 var o=(function(x){
     delete x;
     return x
 })()

 let user={name:'u',age:3,city:'3'}
 let {n,g,c}=user;
 console.log(n,g,c)