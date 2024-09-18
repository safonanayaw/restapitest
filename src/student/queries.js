// query for getting all table data
const getStudents = "SELECT * FROM students";
// query for getting specific student with id
const getStudentById = "SELECT * FROM students WHERE id = $1";

//check if email already exist
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";

//add student to table
const addStudent = "INSERT INTO students(name, email, age, dob) VALUES($1, $2, $3, $4)";

//remove student by id
const removeStudent = "DELETE FROM students WHERE id = $1";

//update students
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2";

module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,
    removeStudent,
    updateStudent,
};