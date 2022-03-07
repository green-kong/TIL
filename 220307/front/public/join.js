const joinBtn = document.querySelector('#join_btn');

const join = async () => {
  const userid = document.querySelector('#userid').value;
  const userpw = document.querySelector('#userpw').value;

  const url = 'http://localhost:3001';
  const body = { userid, userpw };

  const response = await axios.post(url, body);
  console.log(response);
};

joinBtn.addEventListener('click', join);
