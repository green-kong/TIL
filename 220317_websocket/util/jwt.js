require(`dotenv`).config({ path: `../.env` });
const jwt = require(`jsonwebtoken`);

const secretKey = process.env.JWT_SALT;
const expiresIn = process.env.JWT_EXP;
const issuer = process.env.JWT_ISSUER;

const options = { expiresIn, issuer };

// 토큰 만들기 
// jwt.sign(payload,secretKey,options)
function makeJwt(payload){ 
	return jwt.sign(payload, secretKey, options);
}

// 토큰 디코딩 
// jwt.verify(token,secretKey, (err,result)=>{err핸들링})

function decodePayload(token){
	return jwt.verify(token, secretKey);
}

module.exports = {
	makeJwt,
	decodePayload
};