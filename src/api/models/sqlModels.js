

module.exports = (sequelize, Sequelize) => {
    const Account = require("./sql/accountModel") (sequelize, Sequelize)
    const User = require("./sql/userModel") (sequelize, Sequelize)
    
    User.hasMany(Account);

    return {
        User :User,
        Account:Account

    };
};