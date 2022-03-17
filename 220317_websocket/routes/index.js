const express = require(`express`);
const router = express.Router();
const loginRouter = require(`./user/login.js`);

router.use(`/user`, loginRouter);

router.get(`/`, (req, res)=>{
	res.render(`index.html`);
});



module.exports = router;