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

const getPage = async (startInd, endInd) => {
  try {
    const gameCollection = await db.any(
      "SELECT * FROM games WHERE id BETWEEN $1 AND $2",
      [startInd, endInd]
    );
    return gameCollection;
  } catch (error) {
    return error;
  }
};
// const getByCategory = async (category) => {
//   try {
//     const gameGroup = db.any("SELECT * FROMS games WHERE categories IN $1", [
//       category,
//     ]);
//     return gameGroup;
//   } catch (error) {
//     return error;
//   }
// };

/*
Pagination Querys



SELECT * FROM games WHERE id BETWEEN 10 AND 20; 
*/

const createGame = async ({
  rank,
  name,
  platform,
  year,
  genre,
  publisher,
  na_sales,
  eu_sales,
  jp_sales,
  other_sales,
  global_sales,
}) => {
  try {
    const newGame = await db.any(
      "INSERT INTO games (rank,name,platform,year,genre,publisher,na_sales,eu_sales,jp_sales,other_sales,global_sales) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *",
      [
        rank,
        name,
        platform,
        year,
        genre,
        publisher,
        na_sales,
        eu_sales,
        jp_sales,
        other_sales,
        global_sales,
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

const getRecordsLength = async () => {
  try {
    const recordsLength = await db.any("SELECT COUNT(id) from games");
    console.log(recordsLength);
    return recordsLength;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGames,
  getGameById,
  createGame,
  deleteGame,
  getPage,
  getRecordsLength,
};
