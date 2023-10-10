const {Router} = require('express')
const controoller = require('./controoller');
const router = (Router) ;

router.get("/", controoller.getStudents);
router.get("/", controoller.addStudent);
router.get("/:id", controoller.getStudentById);

router.put("/:id", controoller.updateStudent);
router.delete("/:id", controoller.removeStudent);
    


 module.export = router;
