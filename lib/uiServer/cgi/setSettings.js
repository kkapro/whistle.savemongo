const getSettings = require('./getSettings');
const {mongoose,mongo_connect} = require('../../mongo');

module.exports = async (ctx) => {
  let {host,port,username,password,database} = ctx.request.body;
  const { localStorage } = ctx.req;
  localStorage.setProperty('host', host);
  localStorage.setProperty('port', port);
  localStorage.setProperty('username', username);
  localStorage.setProperty('password', password);
  localStorage.setProperty('database', database);
  mongo_connect({host, port, username, password, database})
  getSettings(ctx);
};
