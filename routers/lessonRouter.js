const router = require('express').Router();
const chatController = require('../controller/lessonController');

router.get('/alllessons', async (req, res) => {
    try {
        
        res.json(await chatController.allRooms());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.post('/newlesson', async (req, res) => {
    try {
        const room = req.body;
        res.json(await chatController.newRoom(room));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.post('/joinlesson', async (req,res) => {
    try{
        const data = req.body;
        res.json(await chatController.joinRoom(data));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.post('/leavelesson', async (req,res) => {
    try{
        const data = req.body;
        res.json(await chatController.leaveRoom(data));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.post('/addmessage', async (req,res) => {
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