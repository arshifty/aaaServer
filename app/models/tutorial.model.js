module.exports = (sequelize, Sequelize) => {
  const UserReg = sequelize.define("userreg", {
    userName: {
      type: Sequelize.STRING
    },
    contact: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    code: {
      type: Sequelize.STRING
    }
  });
  return UserReg;
};
