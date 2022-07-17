const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  const talker = await fs.readFile('./talker.json', 'utf-8');
  res.status(HTTP_OK_STATUS).json(JSON.parse(talker));
});

app.listen(PORT, () => {
  console.log('Online');
});
