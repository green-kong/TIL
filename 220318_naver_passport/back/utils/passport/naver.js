require('dotenv').config();
const passport = require('passport');
const NaverStrategy = require('passport-naver-v2').Strategy;
const NaverProfile = require('passport-naver-v2').Profile;
const { pool } = require('../../model/db/db.js');

const clientID = process.env.NAVER_REST_API_KYE;
const clientSecret = process.env.NAVER_CLIENT_SECRET;
const callbackURL = 'http://localhost:3000/auth/naver/callback';
const naverConfig = { clientID, clientSecret, callbackURL };

const NaverStrategyCb = async (accessToken, refreshToken, profile, done) => {
  console.log(profile);
  const id = profile.id;
  const profileImg = profile._json.response.profile_image;
  const selectSql = `SELECT * FROM kakao_user WHERE id = '${id}'`;
  console.log(selectSql);
  const insertSql = `INSERT INTO kakao_user(id,img) values('${id}','${profileImg}')`;
  const conn = await pool.getConnection();
  try {
    const [[exUser]] = await conn.query(selectSql);
    if (exUser) {
      done(null, exUser);
      return;
    }
    await conn.query(insertSql);
  } catch (err) {
    console.log(err);
  }
};

module.exports = () => {
  passport.use(new NaverStrategy(naverConfig, NaverStrategyCb));
};
