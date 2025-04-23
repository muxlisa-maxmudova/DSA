//Phone number validation:
const phoneRegex: RegExp = /^\+998\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;
const isValidPhone = (phone:string): boolean => {
    return phoneRegex.test(phone);
}
//Checking here:
console.log(isValidPhone('+998 90 123 45 67'))// Since space is optional with ?, but if I remove ? then it will return false, because it will become obligatory then!
//Output:
//True

//Example_2
const post_idRegex: RegExp = /^uz[A-Z]{2}\d{3}$/
const isValidPostId = (post_id:string):boolean => {
    return post_idRegex.test(post_id)
}
//Checking here:
console.log(isValidPostId('uzWE234'))
//Output:
//True