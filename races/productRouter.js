const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET/ Products')
})

router.get('/:id', (req, res) => {
    res.send(`GET api/products/${req.params.id}`)
})
module.exports = router;