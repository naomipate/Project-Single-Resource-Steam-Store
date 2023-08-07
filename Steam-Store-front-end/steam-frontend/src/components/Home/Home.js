import React, { useState, useEffect } from "react";
import { getAllGames } from "../common/API/API";
import Overlay from "../common/overlay/Overlay";

function Home() {
  const [gameArray, setGameArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      setIsLoading(true);
      let result = await getAllGames();
      setGameArray(result.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Overlay isLoading={isLoading}>
      <div className="container">
        {gameArray.map(({ name, id }) => {
          return <div key={id}>{name}</div>;
        })}
      </div>
      ;
    </Overlay>
  );
}

export default Home;
