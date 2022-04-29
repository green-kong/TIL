export default function validate({ userid, userpw }) {
  const errors = {};

  if (!userid) {
    errors.userid = '이메일이 입력되지 않앗습니다.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userid)) {
    errors.userid = '입력된 이메일이 유효하지 않습니다.';
  }

  if (!userpw) {
    errors.userpw = '비밀번호가 입력되지 않았습니다.';
  } else if (userpw.length < 8) {
    errors.userpw = '8자 이상의 패스워드를 사용해야 합니다.';
  }

  return errors;
}
