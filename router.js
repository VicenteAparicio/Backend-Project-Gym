const router = require('express').Router();
const userRouter = require('./routers/userRouter');
const lessonRouter = require('./routers/lessonRouter');
const coachRouter = require('./routers/coachRouter');


router.use('/user', userRouter);
router.use('/lesson', lessonRouter);
router.use('/coach', coachRouter);


module.exports = router;