const { getAll } = require('./controllers/containers');

module.exports = (app) => {
  app.route('/api/v1/containers')
    .get((req, res) => getAll(req, res, app));
};
