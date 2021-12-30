const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  playerName: String,
  gameNumber: String,
  gameStatus: String,
  score: String
});

const Game = mongoose.model("Game", gameSchema);

module.exports = {
  schema: gameSchema,
  model: Game
};
