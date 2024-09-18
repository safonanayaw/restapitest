// importing pg db object
const pool = require('../../db');
// importing queries file objects
const queries = require('./queries');

// getStudent function to process getStudents query on query
const getStudents = (req, res) =>{
   pool.query(queries.getStudents, (error, result)=>{
    if(error) throw error;
    res.status(200).json(result.rows);
   });
};

// getStudentById fxn to process query for student id
const getStudentById = (req, res)=> {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addStudent = (req, res) => {
    const {name, email, age, dob} = req.body;
    //check if email exist
    pool.query(queries.checkEmailExists, [email], (error, results)=> {
        if(results.rows.length){
            res.send("Email already exist");
        }

        //add Student to db
        pool.query(queries.addStudent, [name, email, age, dob], (error, results)=>{
            if(error) throw error;
            res.status(201).send("New Student created succeefully");
            console.log("student created successufully");
        });
    });
};

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results)=> {
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student does not exist");
        };
        pool.query(queries.removeStudent, [id], (error, results)=>{
            if(error) throw error;
            res.status(200).send("Student removed successfully");
        });
    });
};

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student does not exist");
        };

        pool.query(queries.updateStudent, [name, id], (error, results)=>{
            if(error) throw error;
            res.status(200).send("student name updated successfully");
        })
    })
} 

// export functions
module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent,
}; 