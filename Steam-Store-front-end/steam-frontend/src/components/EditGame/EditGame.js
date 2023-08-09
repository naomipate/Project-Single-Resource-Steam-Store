import React, { useState, useEffect } from "react";
import { getById, updateGame } from "../common/API/API";
import { useNavigate, useParams } from "react-router-dom";

function EditGame() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [platformOpt] = useState([
    "2600",
    "3DO",
    "3DS",
    "DC",
    "DS",
    "GB",
    "GBA",
    "GC",
    "GEN",
    "GG",
    "N64",
    "NES",
    "NG",
    "PC",
    "PCFX",
    "PS",
    "PS2",
    "PS3",
    "PS4",
    "PSP",
    "PSV",
    "SAT",
    "SCD",
    "SNES",
    "TG16",
    "Wii",
    "WiiU",
    "WS",
    "X360",
    "XOne",
  ]);

  const [game, setGame] = useState({
    rank: "",
    name: "",
    platform: "",
    year: "",
    genre: "",
    publisher: "",
    na_sales: "",
    eu_sales: "",
    jp_sales: "",
    other_sales: "",
    global_sales: "",
  });

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await getById(id);

        setGame(response.data);
      } catch (error) {
        navigate("/404");
      }
    };

    fetchGame();
  }, []);

  const handleTextChange = (e) => {
    setGame({
      ...game,
      [e.target.id]: e.target.value,
    });
  };

  const updateTheGame = async (id) => {
    try {
      await updateGame(id, game);
    } catch (e) {
      console.log(e);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateTheGame(id);
      navigate(`/edit-game/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            onChange={handleTextChange}
            value={game.name}
          />
        </div>
        <div>
          <label>Platform</label>
          <input
            required
            type="text"
            name="platform"
            id="platform"
            onChange={handleTextChange}
            value={game.platform}
          />
        </div>
        <div>
          <label>Year</label>
          <input
            required
            type="text"
            name="year"
            id="year"
            onChange={handleTextChange}
            value={game.year}
          />
        </div>
        <div>
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            id="genre"
            onChange={handleTextChange}
            value={game.genre}
          />
        </div>
        <div>
          <label>Publisher</label>
          <input
            type="text"
            name="publisher"
            id="publisher"
            onChange={handleTextChange}
            value={game.publisher}
          />
        </div>
        <div>
          <label>National Sales</label>
          <input
            type="text"
            name="na_sales"
            id="na_sales"
            onChange={handleTextChange}
            value={game.na_sales}
          />
        </div>
        <div>
          <label>European Sales</label>
          <input
            type="text"
            name="eu_sales"
            id="eu_sales"
            onChange={handleTextChange}
            value={game.eu_sales}
          />
        </div>
        <div>
          <label>Japanese Sales</label>
          <input
            type="text"
            name="jp_sales"
            id="jp_sales"
            onChange={handleTextChange}
            value={game.jp_sales}
          />
        </div>
        <div>
          <label>Other Sales</label>
          <input
            type="text"
            name="other_sales"
            id="other_sales"
            onChange={handleTextChange}
            value={game.other_sales}
          />
        </div>
        <div>
          <label>Global Sales</label>
          <input
            required
            type="text"
            name="global_sales"
            id="global_sales"
            onChange={handleTextChange}
            value={game.global_sales}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditGame;
