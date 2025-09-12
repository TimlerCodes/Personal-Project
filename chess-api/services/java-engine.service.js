const { Chess } = require('chess.js');

let games = {};
let gameIdCounter = 1;

exports.createGame = () => {
  const chess = new Chess();
  const id = gameIdCounter++;
  games[id] = chess;
  return { id, board: chess.fen(), turn: chess.turn() };
};

exports.getGame = (id) => {
  const chess = games[id];
  if (!chess) return null;
  return { id, board: chess.fen(), turn: chess.turn(), gameOver: chess.isGameOver() };
};

exports.makeMove = (id, from, to) => {
  const chess = games[id];
  if (!chess) return null;

  const move = chess.move({ from, to });
  if (!move) return null;

  return { id, board: chess.fen(), turn: chess.turn(), lastMove: move, gameOver: chess.isGameOver() };
};
