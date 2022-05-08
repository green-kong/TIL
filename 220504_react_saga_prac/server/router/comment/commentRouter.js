const router = require('express').Router();

const { sequelize, comment } = require('../../db/index.js');

router.post('/write', async (req, res) => {
  try {
    await comment.create(req.body);
    res.send(true);
  } catch (e) {
    console.log(e);
    res.send(false);
  }
});

router.post('/read', async (req, res) => {
  try {
    const result = await comment.findAll({
      attributes: [
        'c_id',
        'author',
        'content',
        [
          sequelize.fn('DATE_FORMAT', sequelize.col('createdAt'), '%Y-%m-%d'),
          'date',
        ],
      ],
      order: [['c_id', 'desc']],
    });

    const list = result.map((v) => v.dataValues);
    console.log(list);
    res.send(list);
  } catch (e) {
    console.log(e);
    res.send(false);
  }
});

module.exports = router;
