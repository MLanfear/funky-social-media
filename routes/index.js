const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api',apiRoutes);


//Default if adress not found
router.use((req,res) => {
    res.status(404).send('<h1> Server is On </h1><h2> Make requests using /api</h2>');
});

module.exports = router;