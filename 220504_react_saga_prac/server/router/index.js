const Router = require('express');

const loginRouter = require('./login/loginRouter.js');

const commentRouter = require('./comment/commentRouter.js');

const router = Router();

router.use('/login', loginRouter);

router.use('/comment', commentRouter);

module.exports = router;
