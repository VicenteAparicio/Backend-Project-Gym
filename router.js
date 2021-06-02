const router = require('express').Router();
const userRouter = require('./router/userRouter');
const lessonRouter = require('./router/lessonRouter');


router.use('/user', userRouter);
router.use('/lesson', lessonRouter);

console.log("Estamos en el router.js")

module.exports = router;