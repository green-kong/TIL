export default async function joinReq(e) {
  const joinBtn = document.querySelector('#join_btn');
  const joinForm = document.querySelector('#join_form');

  joinBtn.innerHTML = '로딩중';
  joinBtn.disabled = true;

  const userid = document.querySelector('#userid').value;
  const userpw = document.querySelector('#userpw').value;
  const name = document.querySelector('#name').value;
  const nickname = document.querySelector('#nickname').value;
  const year = document.querySelector('#year').value;
  const month = document.querySelector('#month').value;
  const date = document.querySelector('#date').value;
  const phone = document.querySelector('#phone').value;
  const mobile = document.querySelector('#mobile').value;
  const gender = joinForm.querySelector('[type=radio]:checked').value;

  const birth = `${year}-${month}-${date}`;

  const data = {
    userid,
    userpw,
    name,
    nickname,
    birth,
    phone,
    mobile,
    gender,
  };
  const url = 'http://localhost:4001/api/user/join';
  const opt = { withCredentials: true };
  const response = await axios.post(url, data, opt);
  const result = response.data;
  if (result.result !== 'fail') {
    location.href = '/';
  } else {
    joinBtn.innerHTML = '회원가입';
    joinBtn.disabled = false;
    console.error(result.err);
  }
}
