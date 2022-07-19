const { readFile, writeFile } = require('fs/promises');

const createTalker = async (_req, res) => {
  const { name, age, talk } = _req.body;

  const talkersString = await readFile('talker.json', 'utf-8');
  const talkers = JSON.parse(talkersString);

  const newTalker = {
    id: talkers.length + 1,
    name,
    age,
    talk,
  };
  talkers.push(newTalker);
  await writeFile('talker.json', JSON.stringify(talkers));
  return res.status(201).json(newTalker);
};

module.exports = { createTalker };