import Axios from "./Axios";

async function API() {
  return "test";
}

async function getAllGames() {
  try {
    let result = await Axios.get("/games");
    return result;
  } catch (error) {
    return error;
  }
}
async function getTableLength() {
  try {
    let result = await Axios.get("/games/get-record-length");
    return result;
  } catch (error) {
    return error;
  }
}
async function getCollection(page, limit) {
  try {
    let result = await Axios.get(
      `/games/get-collection?page=${page}&limit=${limit}`
    );
    return result;
  } catch (error) {
    return error;
  }
}

async function getById(id) {
  try {
    let result = await Axios.get(`/games/${id}`);
    return result;
  } catch (error) {
    return error;
  }
}
async function deleteGameByID(id) {
  try {
    let result = await Axios.delete(`/games/${id}`);
    return result;
  } catch (error) {
    return error;
  }
}
async function createGame(data) {
  try {
    let result = await Axios.delete(`/games`, data);
    return result;
  } catch (error) {
    return error;
  }
}

async function updateGame(id, data) {
  try {
    let result = await Axios.delete(`/games/${id}`, data);
    return result;
  } catch (error) {
    return error;
  }
}

export {
  API,
  getAllGames,
  getTableLength,
  getById,
  deleteGameByID,
  createGame,
  updateGame,
  getCollection,
};
