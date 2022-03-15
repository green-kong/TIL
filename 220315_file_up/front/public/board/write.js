const writeFrm = document.querySelector('#write_frm');

const writePost = async (e) => {
  e.preventDefault();

  const subject = document.querySelector('#subject').value;
  const content = document.querySelector('#content').value;
  const author = document.querySelector('#author').value;

  const body = {
    subject,
    author,
    content,
  };
  const url = 'http://localhost:4001/api/board/write';
  const response = await axios.post(url, body);
  const { insertId } = response.data.result;
  location.href = `/board/view?idx=${insertId}`;
};

writeFrm.addEventListener('submit', writePost);
