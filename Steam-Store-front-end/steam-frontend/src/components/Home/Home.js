import React, { useState, useEffect } from "react";
import { getAllGames, getCollection } from "../common/API/API";
import { useSearchParams } from "react-router-dom";
import { PaginationContext } from "../common/context/context";

import Overlay from "../common/overlay/Overlay";
import BarChart from "../BarChart/BarChart";
import Pagination from "../Pagination/Pagination";

function Home() {
  //Handle Pagination
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [isNextPage, setIsNextPage] = useState(false);
  const [lastIndex, setLastIndex] = useState(1);
  const [firstIndex, setFirstIndex] = useState(1);

  // console.log(searchParams);
  // console.log(searchParams.size);
  // console.log(searchParams.get("page"));
  // console.log(searchParams.get("limit"));

  async function checkPagination() {
    if (searchParams.size === 0 || searchParams.size === 1) {
      searchParams.set("page", 1);
      searchParams.set("limit", 20);

      // console.log(searchParams.get("page"));
      // console.log(searchParams.get("limit"));
    }
  }

  const [gameArray, setGameArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const paginationContextValue = {
    currentPage,
    searchParams,
    setCurrentPage,
    setIsNextPage,
  };

  useEffect(() => {
    checkPagination();
    //fetchData();

    if (isNextPage) {
      grabTopTen(lastIndex);
    } else {
      if (firstIndex <= 1) {
        grabTopTen();
      } else {
        grabTopTen(firstIndex);
      }
    }
  }, [currentPage]);
  async function fetchData() {
    try {
      setIsLoading(true);
      let result = await getAllGames();
      // let tenArr = [];
      // for (let i = 0; i < 10; i++) {
      //   tenArr.push(result.data[i]);
      // }
      //-----------For the bar chart----------//
      // const salesArr = tenArr.map(({ global_sales }) => Number(global_sales));
      // const namesArr = tenArr.map(({ name }) => name);
      // setGameSales(salesArr);
      // setGameNames(namesArr);
      //---------------------------//
      setGameArray(result.data);
      // setTopTen(tenArr);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function grabTopTen(page = 1, limit = 20) {
    try {
      setIsLoading(true);
      let result = await getCollection(page, limit);
      //console.log(result.data);
      const response = result.data;
      const lastItem = response[response.length - 1];
      const firstItem = response[0];
      setLastIndex(Number(lastItem.id));
      setFirstIndex(Number(firstItem.id) - 20);
      // console.log(lastItem);

      setGameArray(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <br />
      <Overlay isLoading={isLoading}>
        <div className="container">
          {gameArray.map(({ name, id, global_sales }) => {
            return (
              <div key={id}>
                {id} {name} {global_sales}
              </div>
            );
          })}
        </div>
      </Overlay>
      <PaginationContext.Provider value={paginationContextValue}>
        <Pagination

        // currentPage={currentPage}
        // nextPage={nextPage}
        // previousPage={previousPage}
        // searchParams={searchParams}
        />
      </PaginationContext.Provider>
    </div>
  );
}

export default Home;
