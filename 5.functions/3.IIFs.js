//immediately invoked function
(function(name,city){
    console.log('hello my name is' + name + 'and I am from'+ city)
})('John','Boston')

var Singleton = (function(){
    return "thsi is Singleton and would create object only once"
})()
console.log(Singleton)


funciton sample(){

}
//anonymous format
var sample=function(){

}

//IIFs func format
var sample=(function(){

})()