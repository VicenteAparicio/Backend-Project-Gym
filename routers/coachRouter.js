const router = require('express').Router();
const coachController = require('../controller/coachController');
const admin = require('../middleware/admin');
const coach = require('../middleware/coach');
const jwt = require('jsonwebtoken');

// NEW COACH REGISTER
router.post('/newcoach', admin, async (req, res) => {
    try {
        let body = req.body;
        res.json(await coachController.newCoach(body));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// LOGIN 
router.post('/login', async (req, res) => {
    try {
        const {email,password} = req.body;
        let jwt = await coachController.login(email,password);
        const token = jwt.token;
        const user = jwt.user;
        res.json({token,user})
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// MODIFY COACH
router.put('/modify', coach, async (req, res) => {
    try {
        let body = req.body;
        res.json(await coachController.modifyCoach(body));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// DELETE COACH
router.delete('/delete', coach, async (req, res) => {
    try {
        const body = req.body;
        res.json(await coachController.delete(body));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// FIND ALL COACHS
router.get('/allcoachs', coach, async (req, res) => {
    try {
        res.json(await coachController.allCoachs());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});


module.exports = router;