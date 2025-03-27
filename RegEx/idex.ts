//Password validation:
const passwordRegex: RegExp = /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%+*&])[A-Za-z\d@!$*%+&?]{8,}$/;
const isValidPassword = (password: string):boolean => {
    return passwordRegex.test(password);
}
//Checking here:
console.log(isValidPassword('Password1!'));//everything matches
console.log(isValidPassword('Pass*1'));// too short
console.log(isValidPassword('Password2'));//no sign
//Outputs:
//true
//false
//false
