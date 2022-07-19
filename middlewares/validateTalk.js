const validateTalk = (_req, res, next) => {
  const { talk } = _req.body;
  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  return next();
};

module.exports = {
  validateTalk,
};