// 모든 값들은 boolean 속성을 갖고잇음 ㅇㅋ?\

// 근데 그중에서 특정값(5개~6개)들은 false 속성을 갖고있음

// falsy
// 1. undefined
// 2. ''
// 3. null
// 4. NaN
// 5. 0 / -0
// 6. false

const req = {
  body: {},
};

const { user } = req.body;

if (user) {
  console.log('user 있음');
} else {
  console.log('user 없음');
}

// == && === 기능적인 차이가 있음
