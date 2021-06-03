const router = require('express').Router();
const gymController = require('../controller/gymController');
const admin = require('../middleware/admin');
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
router.get('/new_gym', admin, async (req, res) => {
    try {
        res.json(await gymController.newGym());
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
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





module.exports = router;