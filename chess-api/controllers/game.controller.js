const gameService = require('../services/game.service');

exports.createGame = (req, res) => {
  const newGame = gameService.createGame();
  res.status(201).json(newGame);
};

exports.getGame = (req, res) => {
  const game = gameService.getGame(req.params.id);
  if (!game) {
    return res.status(404).json({ message: 'Game not found' });
  }
  res.json(game);
};

exports.makeMove = (req, res) => {
  const { from, to } = req.body;
  const updatedGame = gameService.makeMove(req.params.id, from, to);
  if (!updatedGame) {
    return res.status(400).json({ message: 'Invalid move or game not found' });
  }
  res.json(updatedGame);
};
