/*var data=[]
data[0]="adi"
data[1]=1234
data[2]=true
console.log(data[2])
*/
var data=[
    1,
    "adi",
    true,
    null,
    undefined,
    {name:'mahi'},
    function(name){return name},["red","blue","yellow"]
]
console.log(data)
console.log(data[6](data[5].name))
// data[6]--> called the function(name)