/* eslint-disable no-console */
require('dotenv').config();
const app = require('./src');

const { PORT } = process.env;
app.listen(PORT || 5000, () => {
  console.log('Server: on');
  console.log(`PORT: ${PORT}`);
});
