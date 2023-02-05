const express = require('express')
const router = express.Router();

router.all('/', (req, res, next) => {
    res.status(400).json({
        message: 'handling ALL unhandled routes'
    });
});

module.exports = router;