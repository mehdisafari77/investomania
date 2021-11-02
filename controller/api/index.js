const router = require('express').Router();
const backingRoutes = require('./backingRoutes');
const projectRoutes = require('./projectRoutes');
const userRoutes = require('./userRoutes');

router.use('/backings', backingRoutes);
router.use('/projects', projectRoutes);
router.use('/users', userRoutes);

module.exports = router;