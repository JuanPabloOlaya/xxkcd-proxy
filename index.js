const express = require('express');
const axios = require('axios');
const app = express();

app.get('/:comicId', async (req, res) => {
  const { comicId } = req.params;
  let response = {};

  if (comicId === 'latest')  {
    response = await axios('https://xkcd.com/info.0.json');
  } else {
    response = await axios(`https://xkcd.com/${comicId}/info.0.json`);
  }
  res.send(response.data);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));