const router = require('express').Router();
const gymController = require('../controller/gymController');
const admin = require('../middleware/admin');
const coach = require('../middleware/coach');
//const jwt = require('jsonwebtoken');

// GET INFO ABOUT GYM
router.post('/gym_info', async (req, res) => {
    try {
        let body = req.body;
        res.json(await gymController.gymInfo(body));
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

// FIND ALL GYMS
router.get('/all_gyms', async (req, res) => {
    try {
        res.json(await gymController.allGyms());
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});
// NEW GYM
router.post('/new_gym', async (req, res) => {
    try {
        const body = req.body;
        res.json(await gymController.newGym(body));
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

// ADD LESSON ON GYM
router.post('/addlesson', async (req,res) => {
    try{
        const body = req.body;
        res.json(await gymController.addLesson(body));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// MODIFY GYM DATA
router.put('/modify_gym', admin, async (req, res) => {
    try {
        let body = req.body;
        res.json(await gymController.modifyGym(body));
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

// DELETE LESSON FROM GYM
router.put('/delete_lesson', coach, async (req, res) => {
    try {
        let body = req.body;
        res.json(await gymController.deleteLesson(body));
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

module.exports = router;