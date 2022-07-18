const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');
const handleToken = require('./util/handleToken');
const { emailValidation } = require('./middlewares/emailValidation');
const { passwordValidation } = require('./middlewares/passwordValidation');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  const talkers = await fs.readFile('./talker.json', 'utf-8');
  res.status(HTTP_OK_STATUS).json(JSON.parse(talkers));
});

app.get('/talker/:id', async (_req, res) => {
  const { id } = _req.params;
  const talkers = await fs.readFile('./talker.json', 'utf-8');
  const talker = JSON.parse(talkers).find((el) => el.id === Number(id));
  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(HTTP_OK_STATUS).json(talker);
});

app.post('/login', emailValidation, passwordValidation, (_req, res) => {
  res.status(HTTP_OK_STATUS).json({ token: handleToken() });
});

app.listen(PORT, () => {
  console.log('Online');
});
