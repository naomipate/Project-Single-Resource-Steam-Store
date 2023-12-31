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

const searchForItem = async (term) => {
  const formTerm = `%${term}%`;

  try {
    const searchResults = await db.any(
      "SELECT * FROM games WHERE name ILIKE $1",
      [formTerm]
    );

    return searchResults;
  } catch (error) {
    return error;
  }
};

/*
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
        rank, //1
        name, //2
        platform, // 3
        year, // 4
        genre, // 5
        publisher, // 6
        na_sales, // 7
        eu_sales, // 8
        jp_sales, //9
        other_sales, //10
        global_sales, //11
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

const updateGame = async (id, game) => {
  try {
    const updatedGame = await db.any(
      "Update games SET rank=$1, name=$2, platform=$3, year=$4, genre=$5, publisher=$6, na_sales=$7, eu_sales=$8, jp_sales=$9, other_sales=$10, global_sales=$11 WHERE id=$12 RETURNING *",
      [
        game.rank,
        game.name,
        game.platform,
        game.year,
        game.genre,
        game.publisher,
        game.na_sales,
        game.eu_sales,
        game.jp_sales,
        game.other_sales,
        game.global_sales,
        id,
      ]
    );
    return updatedGame;
  } catch (error) {
    return error;
  }
};
const orderByASC = async () => {
  try {
    const ascGames = await db.any("SELECT * FROM games ORDER BY id ASC");
    return ascGames;
  } catch (error) {
    return error;
  }
};
const orderByDESC = async () => {
  try {
    const descGames = await db.any("SELECT * FROM games ORDER BY id DESC");
    return descGames;
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
  updateGame,
  orderByASC,
  orderByDESC,
  searchForItem,
};
