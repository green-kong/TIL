const boardList = [
  {
    subject: 'test1',
    author: 'testauthor1',
    date: '03-11',
  },
  {
    subject: 'test2',
    author: 'testauthor2',
    date: '03-13',
  },
  {
    subject: 'test3',
    author: 'testauthor3',
    date: '03-12',
  },
  {
    subject: 'test4',
    author: 'testauthor4',
    date: '03-16',
  },
  {
    subject: 'test5',
    author: 'testauthor5',
    date: '03-21',
  },
];

const boardListBtn = document.querySelector('#board_list_btn');
boardListBtn.addEventListener('click', () => {
  const posting = document.querySelector('#posting').innerHTML;
  const target = document.querySelector('#board_list');

  const List = boardList.reduce((acc, cur) => {
    const template = posting
      .replace('{subject}', cur.subject)
      .replace('{author}', cur.author)
      .replace('{date}', cur.date);
    return acc + template;
  }, '');

  target.innerHTML = List;
});
