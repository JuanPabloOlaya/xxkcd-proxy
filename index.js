const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const response = await fetch('https://xkcd.com/info.0.json');
  const json = await response.json();

  return json;
}