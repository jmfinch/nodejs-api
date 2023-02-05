const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling GET device route'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling POST device route'
    });
});

router.get('/detail:id', (req, res, next) => {
    const id = req.params.id;

    res.status(200).json({
        message: 'ID passed',
        id: id
    })

});

module.exports = router;