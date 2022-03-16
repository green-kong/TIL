require('dotenv').config();
const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
const { pool } = require('../../model/db/db.js');

const clientID = process.env.REST_API_KYE;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const callbackURL = 'http://localhost:3000/auth/kakao/callback';

const kakaoConfig = { clientID, callbackURL };

const KakaoStrategyCb = async (accessToken, refreshToken, profile, done) => {
  const id = Number(profile.id);
  const profileImg = profile._json.properties.profile_image;
  const selectSql = `SELECT * FROM kakao_user WHERE id =${id}`;
  const insertSql = `INSERT INTO kakao_user(id,img) values(${id},${profileImg})`;
  const conn = await pool.getConnection();
  try {
    const [[exUser]] = await conn.query(selectSql);
    if (exUser) {
      done(null, exUser);
      return;
    }
    const [[result]] = await conn.query(insertSql);
  } catch (err) {
    console.log(err);
  }
};

module.exports = () => {
  passport.use(new KakaoStrategy(kakaoConfig, KakaoStrategyCb));
};
