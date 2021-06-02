const router = require('express').Router();
const userController = require('../controller/userController');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');


// LOGIN
router.post('/login', async (req, res) => {
    try {
        const {email,password} = req.body;
        let jwt = await userController.login(email,password);
        const token = jwt.token;
        const user = jwt.user;
        res.json({token,user})
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// DELETE USER
router.delete('/delete', async (req, res) => {
    try {
        const body = req.body;
        res.json(await userController.delete(body));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// FIND ALL USERS
router.get('/allusers', auth, async (req, res) => {
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

router.put('/profile', async (req, res) => {
    try {
        let body = req.body;
        res.json(await userController.modifyUser(body));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});


module.exports = router;