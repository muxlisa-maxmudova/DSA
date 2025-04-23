//1
const array1 = [1,-5,6]
console.log(array1.filter((value, index)=>{
     return (value > 0 && value % 2 === 0)//true
}))
//2
const arr = ['gift', 'hello', 'truth', 'match']
console.log(
    arr.filter((value, index)=>{
        return (index === 2 && value % 2 === 0)//false
    })
)
//3
const array2 = [1, 'fight', 'do', 'gym', 'number', 32]
console.log(
    array2.filter((value, index)=>{
        return (value > 0)
    })
)
//4
const array3 = [1, 2, 4, 7, 8, 7, 9, 9, -5]
console.log(
    array3.filter((value, index)=>{
        return (value % 2 === 0)
    })
)
//5
const array4 = [1, 2, 4, 7, 'value', '']
console.log(
    array4.filter((value, index)=>{
        return (value === 'value')
    })
)

////MAP
//1
const array5 = [1,3,5]
console.log(
    array5.map((value)=>{
        return Math.round(Math.sqrt(value))
    })
)
//2
const array6 = [1, 4, 6]
console.log(
    array6.map((value)=>{
        return Math.pow(value,2)+value
    })
)
//3
const array7 = [1, 5, 7]
console.log(
    array7.map((value)=>{
        return Math.round(Math.random()*value)
    })
)
//4
const array8 = ['2']
console.log(
    array8.map((value)=>{
        return +value+ +value
    })
)
//5
const array9 = [1, 2, 4, 7, -5]
console.log(
    array9.map((value, index)=>
        value * index
    )
)
