const router = require('express').Router();
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/login', loginRoutes);

module.exports = router;
