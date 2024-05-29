const express = require('express');
const { register, login, getProfile, updateProfile } = require('../controllers/Controller');
const { protect } = require('../middleware/Middleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);

module.exports = router;
