const { readFile } = require('fs/promises');

const searchTalker = async (_req, res) => {
  const { q } = _req.query;

  const talkersString = await readFile('talker.json', 'utf-8');
  const talkers = JSON.parse(talkersString);
  
  const filteredTalkers = talkers
    .filter(({ name }) => name
      .toLowerCase()
        .includes(q.toLowerCase()));

  return res.status(200).json(filteredTalkers);
};

module.exports = { searchTalker };