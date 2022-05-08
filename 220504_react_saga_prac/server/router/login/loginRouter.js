const Router = require('express');

const { user } = require('../../db/index');

const router = Router();

router.post('/', async (req, res) => {
  const result = await user.findOne({ where: req.body });
  if (result !== null) {
    console.log(result.dataValues);
    const data = {
      u_id: result.dataValues.u_id,
      userId: result.dataValues.userId,
      userAlias: result.dataValues.userAlias,
    };
    res.send(data);
  } else {
    res.send(false);
  }
});

module.exports = router;
