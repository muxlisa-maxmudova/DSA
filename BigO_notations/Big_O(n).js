//Big O(n) is a way to describe how the time or space
// needed as data grows. So time and space this data take
// is directly proportional to size of this data
let time = new Date()
const products = ['eggs', 'butter', 'meat', 'apples', 'water']

    let start = time.getSeconds()
    for(let i in products) {
        console.log(`${products[i]}`)
    }
    let end = time.getSeconds()

console.log(`time:${end-start}s`)
