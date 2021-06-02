const router = require('express').Router();
const chatController = require('../controller/lessonController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const coach = require('../middleware/coach');
const jwt = require('jsonwebtoken');

router.get('/alllessons', admin, async (req, res) => {
    try {
        res.json(await chatController.allRooms());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.post('/newlesson', coach, async (req, res) => {
    try {
        const room = req.body;
        res.json(await chatController.newRoom(room));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.post('/joinlesson', auth, async (req,res) => {
    try{
        const data = req.body;
        res.json(await chatController.joinRoom(data));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.post('/leavelesson', auth, async (req,res) => {
    try{
        const data = req.body;
        res.json(await chatController.leaveRoom(data));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.post('/addmessage', auth, async (req,res) => {
    try{
        const data = req.body;
        res.json(await chatController.addMessage(data));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

module.exports = router;