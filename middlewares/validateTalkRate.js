const validateRate = (_req, res, next) => {
  const { talk } = _req.body;
  const { rate } = talk;
  if (rate === undefined) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  if (talk.rate < 1 || talk.rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  return next();
};

module.exports = {
  validateRate,
};