const pool = require('../../db');

const getStudents = (req,res) => {
    pool.query("SELECT * FROM students", (error,results) => {
         if(error) throw error;
         res.status=(200).json(results.rows);
    });
}; 
  const getStudentById = (req,res) => {
      const id = parseInt(res.params.id);
      pool.query(queries.getStudentById, [id], (error,results)=>  {
        if(error) throw error;
        res.status=(200).json(results.rows);
      });
  };
      const  addStudent = (req,res) => {
       const {name , email, age , dob} = req.body;
       //checking if the email exist
       pool.query(queries.checkEmailExists, [email], (error,results) => {
          if(results.rows.length){
            res.send("email already exist");
          }
            pool.query(queries.addStudent ,[name, email,  age, dob] ,(error,results) => {
                if(error) throw error;
                res.statuus(201).send("student created succesfullly");

                 
            }

            );
       });

    };

     const removeStudent = (req,res) => {
        const id = parseInt(res.params.id);
        pool.query(queries.getStudentById, [id], (error,results) =>{
        const noStudentfound = !results.rows.length;
         if(noStudentfound){
         res.send("STUDENT DO NOT EXIST IN THE DTABASE");
         }
         pool.query(queries.removeStudent, (error,results) => {
         if(error) throw error;
         res.status(201).send("student removed successfully");
         });
          
         });
     };
      const updateStudent = (req,res) => {
        const id = parseInt(res.params.id);
        pool.query(queries.getStudentById, [id], (error,results) =>{
            const noStudentfound = !results.rows.length;
             if(noStudentfound){
             res.send("STUDENT DO NOT EXIST IN THE DTABASE");
             }
             pool.query(queries.updateStudent, [name,id] ,(error,results) => {
             if(error) throw error;
             res.status(201).send("student updated successfully");
             });
              
            });
        };
        
         
      
module.exports = {
      getStudents,
      addStudent,
      getStudentsById,
      removeStudent,
      updateStudent,
};