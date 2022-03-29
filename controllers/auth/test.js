const Kitten = require("../../models/test");

exports.postTest = (req, res, next) => {
  const test = req.body.name
  console.log(test, "tets")
  if (test) {
    const name = new Kitten({"name":test});
    name
      .save()
      .then(() => res.status(200).json({ message: "kitten added" }))
      .catch((err) => res.status(401).json({error: "an error occured", err}));
  } else {
    res.status(401).json({ message: "invalid param" });
  }
};

exports.getTest = (req, res) => {
  Kitten.find()
    .then((kitten) => res.status(200).json({message: "success", name: kitten}))
    .catch((err) => err.status(400).json({ message: "an err ocurred" }, err));
};
