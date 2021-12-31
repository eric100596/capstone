const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  playerName: String,
  gameNumber: Number,
  gameStatus: String,
  score: Number
});

const Game = mongoose.model("Game", gameSchema);

module.exports = {
  model: Game,
  schema: gameSchema
};
