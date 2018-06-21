const initUsers = require("./users");
const openHome= require("./openHome.js");
const initRoutes = (app,passport) => {
    console.log("inside index.js");
    app.use('/', openHome(passport));
    app.use('/users', initUsers(passport)); 

}
module.exports = initRoutes;
