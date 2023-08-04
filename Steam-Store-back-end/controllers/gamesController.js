const express = require("express");
const router = express.Router();

const {
  getAllGames,
  getGameById,
  createGame,
  deleteGame,
} = require("../queries/games");

router.get("/", async (req, res) => {
  const allGames = await getAllGames();
  if (allGames[0]) {
    res.status(200).json(allGames);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const game = await getGameById(req.params.id);
    if (!game || game.length === 0) {
      res.status(404).json({ error: "not found" });
    } else {
      res.status(200).json(game[0]);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
