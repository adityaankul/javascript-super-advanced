//var display=function sample()
//{
//define function with name but no use
//}

console.log(display)
console.log(a)
var display=function(){
    console.log('this is display method')
}
var a=10;
sample()
function sample(){
    console.log('function sample invoked')
}
var callMe=function(message, name){
    return message + ' '+ name
}
console.log(callMe('Good Morning','John'))
