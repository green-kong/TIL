const idCheck = document.querySelector('#id_chk_btn');
const idChkRst = document.querySelector('#id_chk_rst');
const join = document.querySelector('#join');

let idChkPass = false;

const checkSameId = async () => {
  const userid = document.querySelector('#userid').value;
  const url = '/join/idCheck';
  const opt = { userid };

  const response = await axios.post(url, opt);
  const data = response.data;
  if (data) {
    idChkRst.innerHTML = ' 사용가능한 아이디입니다.';
    idChkRst.style.color = 'green';
    idChkPass = true;
  } else {
    idChkRst.innerHTML = ' 중복된 아이디입니다.';
    idChkRst.style.color = 'red';
    idChkPass = false;
  }
};

idCheck.addEventListener('click', checkSameId);

join.addEventListener('submit', (e) => {
  if (!idChkPass) {
    e.preventDefault();
    alert('아이디 중복체크 해주세여');
  }
});
