const { Example } = require('../models');

exports.index = async function(req, res) {
  const examples = await Example.findAll();
  return res.send(examples);
}

exports.create = async function(req, res) {
  try {
    var { name, value } = req.body;

    const example = await Example.create({
      name,
      value
    });

    return res.status(201).send(example);
  } catch (err) {
    return res.status(500).send({
      error: "application error",
      code: 0
    });
  }
}
