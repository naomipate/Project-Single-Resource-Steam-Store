const db = require("../db/dbConfig");

const getAllGames = async () => {
  try {
    const allGames = await db.any("SELECT * FROM games");
    return allGames;
  } catch (error) {
    return error;
  }
};
const getGameById = async (id) => {
  try {
    const game = await db.any("SELECT * FROM games WHERE id=$1", [id]);
    return game;
  } catch (error) {
    return error;
  }
};
const getByCategory = async (category) => {
  try {
    const gameGroup = db.any("SELECT * FROMS games WHERE categories IN $1", [
      category,
    ]);
    return gameGroup;
  } catch (error) {
    return error;
  }
};

const createGame = async ({
  appid,
  name,
  release_date,
  english,
  developer,
  publisher,
  platforms,
  required_age,
  categories,
  genres,
  steamspy_tags,
  achievements,
  positive_ratings,
  negative_ratings,
  average_playtime,
  median_playtime,
  owners,
  price,
}) => {
  try {
    const newGame = await db.any(
      "INSERT INTO games (appid,name,release_date,english,developer,publisher,platforms,required_age,categories,genres,steamspy_tags,achievements,positive_ratings,negative_ratings,average_playtime,median_playtime,owners,price) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18) RETURNING *",
      [
        appid,
        name,
        release_date,
        english,
        developer,
        publisher,
        platforms,
        required_age,
        categories,
        genres,
        steamspy_tags,
        achievements,
        positive_ratings,
        negative_ratings,
        average_playtime,
        median_playtime,
        owners,
        price,
      ]
    );
    return newGame;
  } catch (error) {
    return error;
  }
};

const deleteGame = async (id) => {
  try {
    const deletedGame = await db.any(
      "DELETE FROM games WHERE id=$1 RETURNING *",
      [id]
    );
    return deletedGame;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGames,
  getGameById,
  createGame,
  deleteGame,
};
