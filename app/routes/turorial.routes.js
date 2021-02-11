module.exports = app => {
  const userreg = require("../controllers/tutorial.controller.js");
  var router = require("express").Router();

  router.post("/", userreg.create);
  router.get("/", userreg.findAll);
  
  app.use('/api/tutorials', router);
};
