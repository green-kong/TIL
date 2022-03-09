import joinReq from '/js/joinReq.js';

let idPass = false;

const formCheck = (e) => {
  e.preventDefault();

  const userid = document.querySelector('#userid');
  const userpw = document.querySelector('#userpw');
  const userpwChk = document.querySelector('#userpw_chk');
  const name = document.querySelector('#name');
  const nickname = document.querySelector('#nickname');
  const year = document.querySelector('#year');
  const month = document.querySelector('#month');
  const date = document.querySelector('#date');
  const phone = document.querySelector('#phone');
  const mobile = document.querySelector('#mobile');

  const numChk = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z]/;

  if (!idPass) {
    alert('아이디 중복체크 해주세요');
    userid.focus();
    return;
  }

  if (userpw.value === '') {
    alert('비밀번호를 입력해주세요');
    userpw.focus();
    return;
  }

  if (userpw.value !== userpwChk.value) {
    alert('비밀번호가 일치하지 않습니다.');
    userpw.focus();
    return;
  }

  if (name.value === '') {
    alert('이름을 입력해주세요');
    name.focus();
    return;
  }

  if (nickname.value === '') {
    alert('닉네임을 입력해주세요');
    nickname.focus();
    return;
  }

  const nowYear = new Date().getFullYear();
  if (
    (nowYear - year.value > 100 || numChk.test(year.value)) &&
    year.value !== ''
  ) {
    alert('올바른 날짜를 입력해주세요');
    year.focus();
    return;
  }

  if (
    (month.value < 1 || month.value > 12 || numChk.test(month.value)) &&
    month.value !== ''
  ) {
    alert('올바른 날짜를 입력해주세요');
    month.focus();
    return;
  }

  if (
    (date.value < 1 || date.value > 31 || numChk.test(date.value)) &&
    date.value !== ''
  ) {
    alert('올바른 날짜를 입력해주세요');
    date.focus();
    return;
  }

  if (
    (phone.value.length !== 11 || numChk.test(phone.value)) &&
    phone.value !== ''
  ) {
    alert('올바른 번호를 입력해주세요');
    phone.focus();
    return;
  }

  if (
    mobile.value.length !== 11 ||
    numChk.test(mobile.value) ||
    mobile.value === ''
  ) {
    alert('올바른 핸드폰 번호를 입력해주세요.');
    mobile.focus();
    return;
  }

  joinReq();
};

const idCheck = async () => {
  const userid = document.querySelector('#userid');
  const korChk = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  if (userid.value === '') {
    alert('id를 입력해주세요');
    userid.focus();
    return;
  }

  if (korChk.test(userid.value)) {
    alert('아이디에는 한글사용이 불가합니다.');
    userid.focus();
    return;
  }

  const url = 'http://localhost:4001/api/user/idchk';
  const data = { userid: userid.value };
  const response = await axios.post(url, data);
  const { result } = response.data;
  if (result === 'pass') {
    alert(`${userid.value}는 사용가능한 아이디입니다.`);
    idPass = true;
  } else {
    alert(`${userid.value}는 사용 불가한 아이디 입니다.`);
    idPass = false;
  }
};

const idList = [];

const checkIdChange = () => {
  const userid = document.querySelector('#userid').value;

  idList.push(userid);
  if (idList[idList.length - 1] !== idList[idList.length - 2]) {
    idPass = false;
  }
};

const joinJS = { formCheck, idCheck, checkIdChange };

export default joinJS;
