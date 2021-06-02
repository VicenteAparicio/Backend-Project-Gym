const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/allusers', async (req, res) => {
    try {
        
        res.json(await userController.allUsers());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.post('/newuser', async (req, res) => {
    try {
        let user = req.body;
        res.json(await userController.newUser(user));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});


module.exports = router;