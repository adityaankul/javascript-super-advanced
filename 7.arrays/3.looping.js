var data=["scott","adam","uan"]

//1st way
console.log('***********using for loop****')
for(var i=0; i<data.length;i++)
{
    console.log(i, data[i])

}
console.log(forEachData)

console.log('***********using Foreach loop****')

//2nd way
data.forEach(function(item,index){
    console.log(index,item)
})
console.log('***********using map ****')


//3rd way
data.map(function(item,index){
    console.log(index,item)
})

console.log(mapData)