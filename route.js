const { Router} = require('express');
const router = Router();
const contract= require('./controller');

router.get('/', (req, res) => {
    return res.status(200).json({})
})
module.exports = router;