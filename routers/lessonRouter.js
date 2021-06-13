const router = require('express').Router();
const lessonController = require('../controller/lessonController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const coach = require('../middleware/coach');
const jwt = require('jsonwebtoken');


// FIND ALL LESSONS
router.get('/alllessons', admin, async (req, res) => {
    try {
        res.json(await lessonController.allLessons());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// FIND ALL LESSONS LIKE USER
router.get('/usersLessons', auth, async (req, res) => {
    try {
        res.json(await lessonController.usersLessons());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// CREATE NEW LESSON
router.post('/newlesson', coach, async (req, res) => {
    try {
        const body = req.body;
        res.json(await lessonController.newLesson(body));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});


// ADD USER TO A LESSON
router.post('/joinlesson', auth, async (req,res) => {
    try{
        const body = req.body;
        res.json(await lessonController.joinLesson(body));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});


// LEAVE USER FROM LESSON
router.post('/leavelesson', auth, async (req,res) => {
    try{
        const data = req.body;
        res.json(await lessonController.leaveLesson(data));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// ADD MESSAGE ON LESSON
router.post('/addmessage', auth, async (req,res) => {
    try{
        const data = req.body;
        res.json(await lessonController.addMessage(data));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

module.exports = router;