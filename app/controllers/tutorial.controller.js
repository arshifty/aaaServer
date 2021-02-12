const db = require("../models");
const UserReg = db.userreg;
const Op = db.Sequelize.Op;

exports.create = (req, res) => { 
  if (!req.body.contact) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const userreg = {
    userName: req.body.userName,
    contact: req.body.contact,
    password: req.body.password,
    city: req.body.city,
    country: req.body.country,
    code: req.body.code
  };

  UserReg.create(userreg)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred."
      });
    });
};


exports.findAll = (req, res) => {
  const contact = req.query.contact;
  var condition = contact ? { contact: { [Op.like]: `%${contact}%` } } : null;

  UserReg.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving"
      });
    });
};


