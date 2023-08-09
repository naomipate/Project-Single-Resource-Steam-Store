import React, { useState } from "react";
import { createGame } from "../common/API/API";
import { useNavigate } from "react-router-dom";

function NewGame() {
  let navigate = useNavigate();
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

  async function createTheGame(e) {
    e.preventDefault();

    try {
      await createGame(game);

      setGame({
        name: "",
        rank: "",
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
    <div className="container">
      <br />
      <form onSubmit={createTheGame}>
        <div className="input-group mb-3">
          <label className="input-group-text">Name</label>
          <input
            className="form-control"
            required
            type="text"
            name="name"
            id="name"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.name}
          />
        </div>
        <div
          className="input-group mb-3"
          //className="input-group mb-3"
        >
          <label className="input-group-text">Platform</label>
          <select className="form-select">
            <option defaultValue={""}>Select Platform</option>
            {platformOpt.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          {/* <label className="input-group-text">Platform</label>
          <input
            className="form-control"
            required
            type="text"
            name="platform"
            id="platform"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.platform}
          /> */}
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text">Year</label>
          <input
            className="form-control"
            required
            type="text"
            name="year"
            id="year"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.year}
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text">Genre</label>
          <input
            className="form-control"
            type="text"
            name="genre"
            id="genre"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.genre}
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text">Publisher</label>
          <input
            className="form-control"
            type="text"
            name="publisher"
            id="publisher"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.publisher}
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text">National Sales</label>
          <input
            className="form-control"
            type="text"
            name="na_sales"
            id="na_sales"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.na_sales}
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text">European Sales</label>
          <input
            className="form-control"
            type="text"
            name="eu_sales"
            id="eu_sales"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.eu_sales}
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text">Japanese Sales</label>
          <input
            className="form-control"
            type="text"
            name="jp_sales"
            id="jp_sales"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.jp_sales}
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text ">Other Sales</label>
          <input
            className="form-control"
            type="text"
            name="other_sales"
            id="other_sales"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.other_sales}
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text">Global Sales</label>
          <input
            className="form-control"
            required
            type="text"
            name="global_sales"
            id="global_sales"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={game.global_sales}
          />
        </div>
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default NewGame;
