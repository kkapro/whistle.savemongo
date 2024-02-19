const {mongoose} = require('../../mongo');
module.exports = (ctx) => {
  const { localStorage } = ctx.req;
  ctx.body = {
    host:localStorage.getProperty('host'),
    port:localStorage.getProperty('port'),
    username:localStorage.getProperty('username'),
    password:localStorage.getProperty('password'),
    database: localStorage.getProperty('database'),
    status:mongoose.connection.readyState
  };
};
