const express = require(`express`);
const router = express.Router();
const pool = require(`../../models/db.js`).pool;
const { makeJwt, decodePayload } = require(`../../util/jwt.js`);
const { alertMove } = require(`../../util/alertMove.js`);
const { auth } = require(`../../middleware/auth.js`);

router.get(`/login`, (req, res)=>{
	res.render(`login`);
});

router.post (`/login`, async (req, res)=>{
	const { userid, userpw } = req.body;
	const sql = `SELECT * FROM user WHERE userid = ? and userpw = ?`;
	const prepare = [userid, userpw];
	try{
		const [[ result ]] = await pool.execute(sql, prepare);
		if( result === undefined ) throw new Error;
		const { userid, nickname } = result;
		const payload = { userid, nickname };
		const token = makeJwt(payload);
		res.cookie(`loginUser`, token)
			.send(alertMove(`/`, `로그인되었습니다`));
	}catch(err){
		console.log(err.message);
		res.send(alertMove(`/user/login`, `아이디나 비번이 이상함`));
	}
});

router.get(`/chat`, auth, (req, res)=>{
	const userData = {
		...req.user
	};

	res.render(`chat.html`, { userData });
});

module.exports = router;