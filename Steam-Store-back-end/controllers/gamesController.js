const express = require("express");
const router = express.Router();

const {
  getAllGames,
  getGameById,
  createGame,
  deleteGame,
  getPage,
  getRecordsLength,
  updateGame,
} = require("../queries/games");

router.get("/", async (req, res) => {
  const allGames = await getAllGames();
  if (allGames[0]) {
    res.status(200).json(allGames);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

/*
This is a way to query a set amount of data and not to call all of the dat

in order for this query to work and pass on we need the page number
1,2,3,4,.....
we then take that number and times it by 10
So on page 0 we do 0 * 10 = 0 or page 1 which is 1 * 10 (ignore)

we then address a limit which is 

we can simply just pass down a starting index from the 
localhost:3003/get-collection?page=2&plimit=10

*/

//gets a portion of game entrys in the game collection
router.get("/get-collection", async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = page;
  const endIndex = page + limit;
  try {
    const collection = await getPage(startIndex, endIndex);
    res.status(200).json(collection);
  } catch (error) {
    res.status(404).json({ error: error });
  }
});
//gets the records length
router.get("/get-record-length", async (req, res) => {
  try {
    const recordLength = await getRecordsLength();
    res.status(200).send(recordLength[0].count);
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

//get by id
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

//create new game entry
router.post("/", async (req, res) => {
  try {
    const createdGame = await createGame(req.body);
    res.status(200).json(createdGame[0]);
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

//delete game entry
router.delete("/:id", async (req, res) => {
  try {
    const deletedGame = await deleteGame(req.params.id);
    if (deletedGame.length === 0) {
      res.status(404).json("Game not found");
    } else {
      res.status(200).json(deletedGame[0]);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//Edit game entry
router.put("/:id", async (req, res) => {
  try {
    const updatedGame = await updateGame(req.params.id, req.body);
    if (updatedGame.length === 0) {
      res.status(404).json("Game not found");
    } else {
      res.status(200).json(updatedGame[0]);
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = router;
