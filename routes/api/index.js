const router = require('express').Router();
userRoutes = require('./user-routes.js');
thoughtRoutes = require('./thought-routes.js');

router.use('/users',userRoutes);
router.use('/thoughts',thoughtRoutes);

module.exports = router;