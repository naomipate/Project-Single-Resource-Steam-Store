import React, { useState } from "react";
import { createGame } from "../common/API/API";
import { useNavigate } from "react-router-dom";

function NewGame() {
  let navigate = useNavigate();

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

  async function createTheGame(e) {
    e.preventDefault();

    try {
      await createGame(game);

      setGame({
        name: "",
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
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }
  function handleOnchange(id, value) {
    setGame({
      ...game,
      [id]: value,
    });
  }

  return (
    <div>
      <form onSubmit={createTheGame}>
        <div>
          <label>Name</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
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
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
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
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.year}
          />
        </div>
        <div>
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            id="genre"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.genre}
          />
        </div>
        <div>
          <label>Publisher</label>
          <input
            type="text"
            name="publisher"
            id="publisher"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.publisher}
          />
        </div>
        <div>
          <label>National Sales</label>
          <input
            type="text"
            name="na_sales"
            id="na_sales"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.na_sales}
          />
        </div>
        <div>
          <label>European Sales</label>
          <input
            type="text"
            name="eu_sales"
            id="eu_sales"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.eu_sales}
          />
        </div>
        <div>
          <label>Japanese Sales</label>
          <input
            type="text"
            name="jp_sales"
            id="jp_sales"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.jp_sales}
          />
        </div>
        <div>
          <label>Other Sales</label>
          <input
            type="text"
            name="other_sales"
            id="other_sales"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
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
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.global_sales}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewGame;
