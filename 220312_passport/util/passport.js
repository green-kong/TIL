const pool = require('../db.js');

module.exports = function (app) {
  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    const sql = `SELECT * FROM user WHERE _id=${id}`;
    const conn = await pool.getConnection();
    try {
      const [[userinfo]] = await conn.query(sql);
      if (!userinfo) throw new Error('존재하지 않는 계정입니다.');
      done(null, userinfo);
    } catch (err) {
      console.log(err.message);
      done(null, false, { message: 'Incorrect' });
    } finally {
      conn.release();
    }
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: 'userid',
        passwordField: 'userpw',
      },
      async (username, password, done) => {
        const sql = 'SELECT * FROM user WHERE userid=? AND userpw=? ';
        const prepare = [username, password];
        const conn = await pool.getConnection();
        try {
          const [[userinfo]] = await conn.query(sql, prepare);
          if (userinfo === undefined) {
            throw new Error('존재하지 않는 계정입니다.');
          }
          done(null, userinfo);
        } catch (err) {
          console.log(err.message);
          done(null, false, { message: err.message });
        } finally {
          conn.release();
        }
      }
    )
  );
  return passport;
};
