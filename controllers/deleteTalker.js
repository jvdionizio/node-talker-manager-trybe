const { readFile, writeFile } = require('fs/promises');

const deleteTalker = async (_req, res) => {
  const { id } = _req.params;

  const talkersString = await readFile('talker.json', 'utf-8');
  const talkers = JSON.parse(talkersString);
  const index = talkers.findIndex((talker) => talker.id === Number(id));

  talkers.splice(index, 1);

  await writeFile('talker.json', JSON.stringify(talkers));
  return res.status(204).end();
};

module.exports = { deleteTalker };