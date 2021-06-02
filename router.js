const router = require('express').Router();
const userRouter = require('./router/userRouter');
const lessonRouter = require('./router/lessonRouter');


router.use('/user', userRouter);
router.use('/chat', lessonRouter);

module.exports = router;