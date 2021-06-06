const router = require('express').Router();
const userRouter = require('./routers/userRouter');
const lessonRouter = require('./routers/lessonRouter');
const coachRouter = require('./routers/coachRouter');
const gymRouter = require('./routers/gymRouter');


router.use('/user', userRouter);
router.use('/lesson', lessonRouter);
router.use('/coach', coachRouter);
router.use('/gym', gymRouter);


module.exports = router;

