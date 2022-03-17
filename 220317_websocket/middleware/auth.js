const { alertMove }= require(`../util/alertMove.js`);
const { decodePayload } = require(`../util/jwt.js`);

exports.auth = (req, res, next) => {
	try{
		const token = req.cookies.loginUser;
		console.log(token);
		if(token === undefined) throw new Error;
		const payload = decodePayload(token);
		req.user = { ...payload };
		next();
	}catch(err){
		console.log(err.message);
		res.send(alertMove(`/user/login`, `로긴 플리즈`));
	}
};