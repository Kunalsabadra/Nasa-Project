const { planets } = require("../../models/planets.model");
const getAllplanets = function (req, res) {
  return res.status(200).json(planets);
};

module.exports = {
  getAllplanets,
};
