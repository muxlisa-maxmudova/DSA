//Email validation:
const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ //universal template
const isValidEmail = (email: string): boolean => {
    return emailRegex.test(email)
}
//checking here:
console.log(isValidEmail('test@example.com'))
console.log(isValidEmail('test@example-com'))
//Output:
//true
//false

//Example_1:
const frame = /^hello [a-zA-Z]/
const check = (word:string) : boolean => {
    return frame.test(word)
}
//checking here:
console.log(check('hello world'))
//Output:
//True