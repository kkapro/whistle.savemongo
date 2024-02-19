const getSettings = require('./cgi/getSettings');
const setSettings = require('./cgi/setSettings');

module.exports = (router) => {
  router.get('/cgi-bin/get-settings', getSettings);
  router.post('/cgi-bin/set-settings', setSettings);
};
