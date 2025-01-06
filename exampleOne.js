// ALGORITHMS of given problem
// 1) Create a massive containing 5 students' names
// 2) Creating a function which has two parameters (allStudents, studentName)
// 3) Using loop render their name on console
const students = ['Alice', 'John', 'Alan', 'Simon', 'Oliver']
function findStudents(allStudents, studentName) {
    for(let student in allStudents){
        if(studentName === allStudents[student]){
            console.log(`Found ${studentName}`)
        }
    }
}
findStudents(students, 'Simon')

