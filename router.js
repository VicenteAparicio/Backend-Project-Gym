const router = require('express').Router();
const userRouter = require('./routers/userRouter');
const lessonRouter = require('./routers/lessonRouter');


router.use('/user', userRouter);
router.use('/lesson', lessonRouter);

console.log("Estamos en el router.js")

module.exports = router;