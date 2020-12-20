const Pack = require('../models/pack');


async function create(req, res) {
  console.log(req.user);
  try {
    await Pack.create(req.body);
    getAllPacks(req, res);
  } catch (err) {
    res.json({err});
  }
}

async function getAllPacks(req, res) {
  const packs = await Pack.find({})
  res.json(packs);
}
module.exports = {
  create,
  getAllPacks
};