const express = require('express');
const router = express.Router();
const gameController = require('../controllers/game.controller');

router.post('/', gameController.createGame);        // create new game
router.get('/:id', gameController.getGame);         // get game state
router.post('/:id/move', gameController.makeMove);  // make a move

module.exports = router;
