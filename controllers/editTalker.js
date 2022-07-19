const { readFile, writeFile } = require('fs/promises');

const editTalker = async (_req, res) => {
  const { id } = _req.params;
  const { name, age, talk } = _req.body;
  const talkersString = await readFile('talker.json', 'utf-8');
  const talkers = JSON.parse(talkersString);
  const index = talkers.findIndex((talker) => talker.id === Number(id));
  const newInfo = { id: Number(id), name, age, talk };
  talkers[index] = { ...talkers[index], ...newInfo };
  await writeFile('talker.json', JSON.stringify(talkers));
  return res.status(200).json(newInfo);
};

module.exports = { editTalker };