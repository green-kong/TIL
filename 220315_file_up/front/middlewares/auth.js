const axios = require('axios');

exports.Auth = async (req, res, next) => {
  const { token } = req.cookies;
  const url = 'http://localhost:4001/api/auth';
  const body = { token };
  const response = await axios.post(url, body);
  if (response.data) {
    req.user = response.data;
    next();
  } else {
    res.send(`<script>
                alert('로그인후 이용가능함')
                location.href='/user/login'
                </script>`);
  }
};

const aaa = 111;

const bbb = 1111;

const ccc = 2234243;
