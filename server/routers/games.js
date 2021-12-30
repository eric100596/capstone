const { Router } = require("express");
const game = require("../models/Game");
const router = Router();

// Create record in MongoDB
router.post("/", (request, response) => {
  const newGame = new game.model(request.body);
  newGame.save((err, game) => {
    return err ? response.sendStatus(500).json(err) : response.json(game);
  });
});

router.get("/", (request, response) => {
  game.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.get("/:id", (request, response) => {
  game.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.delete("/:id", (request, response) => {
  game.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  game.model.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        playerName: body.playerName,
        gameNumber: body.gameNumber,
        gameStatus: body.gameStatus,
        score: body.score
      }
    },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(request.body);
    }
  );
});

module.exports = router;
