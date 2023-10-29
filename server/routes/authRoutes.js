const router = require('express').Router();
const {authMiddleware} = require("../middleware/authMiddleware");
const authControllers = require('../controllers/authControllers');

router.post('/admin-login', authControllers.admin_login)
router.get('/get-user',authMiddleware, authControllers.getUser)

module.exports = router