let test = [];
let CUR_PAGE = 1;
let CUR_PAGE_BLOCK = 1;
let LAST_PAGE = null;
const DATA_PER_PAGE = 10;
const PAGE_AT_ONCE = 10;

const boardRow = document.querySelector('#board_row').innerHTML;
const tbody = document.querySelector('tbody');

const listAxios = async function () {
  const tbody = document.querySelector('tbody');
  const url = 'http://localhost:4001/api/board/list';
  try {
    const response = await axios.post(url);
    const result = response.data;
    test = [...result];
    LAST_PAGE = Math.ceil(test.length / 10);
    if (response.status === 204) {
      throw new Error(response.data);
    }
  } catch (err) {
    console.error(err.message);
    tbody.innerHTML = err.message;
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  await listAxios();
  const firstData = test.slice(0, 10);
  const template = firstData.reduce((acc, cur) => {
    const tmp = boardRow
      .replace('{idx}', cur.idx)
      .replace('{subject}', cur.subject)
      .replace('{nickname}', cur.nickname)
      .replace('{date}', cur.date);
    return acc + tmp;
  }, '');
  tbody.innerHTML = template;
});

function movePage(page) {
  CUR_PAGE = page;
  if (CUR_PAGE % PAGE_AT_ONCE === 1) {
    const pagenation = document.querySelector('#pagenation');
    const pageBtnTemplate =
      document.querySelector('#page_btn_template').innerHTML;

    let pageBtnList = '';
    for (let i = 0; i < PAGE_AT_ONCE; i++) {
      const pageNum = CUR_PAGE + i;

      if (pageNum > LAST_PAGE) {
        break;
      }
      const pageBtn = pageBtnTemplate.replace(/{page}/g, pageNum);
      pageBtnList += pageBtn;
    }
    pagenation.innerHTML = pageBtnList;
  }

  const curPageData = test.slice(
    (page - 1) * DATA_PER_PAGE,
    page * DATA_PER_PAGE
  );

  const template = curPageData.reduce((acc, cur) => {
    const tmp = boardRow
      .replace('{idx}', cur.idx)
      .replace('{subject}', cur.subject)
      .replace('{nickname}', cur.nickname)
      .replace('{date}', cur.date);
    return acc + tmp;
  }, '');
  tbody.innerHTML = template;
}

function movePrevPage() {
  if (CUR_PAGE === 1) {
    alert('첫페이지임');
    return;
  }
  CUR_PAGE -= 1;
  movePage(CUR_PAGE);
}

function moveNextPage() {
  CUR_PAGE += 1;
  movePage(CUR_PAGE);
}
