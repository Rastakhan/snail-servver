const { Router } = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./users');
const cors = require('cors');

const router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cors());

router.get('/api', (req, res) => {
    res.send('<h1>Welcome to Snail API</h1>')
})

router.use('/api/users', userRouter);


module.exports = router;