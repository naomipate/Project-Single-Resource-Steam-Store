import React, { useState, useEffect } from "react";
import { getCollection } from "../common/API/API";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  PaginationContext,
  BarChartContext,
  // AlertContext,
  SearchContext,
} from "../common/context/context";

import Overlay from "../common/overlay/Overlay";
import BarChart from "../BarChart/BarChart";
import TableUnit from "../common/TableUnit/TableUnit";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../common/SearchBar/SearchBar";

function Home() {
  const navigate = useNavigate();
  //Handle Pagination
  //const [lastAction, setLastAction] = useState([]);
  const [isSearching, setIsSearching] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [isNextPage, setIsNextPage] = useState(false);
  const [lastIndex, setLastIndex] = useState(1);
  const [firstIndex, setFirstIndex] = useState(1);
  const [topTwenty, setTopTwenty] = useState([]);

  // console.log(searchParams);
  // console.log(searchParams.size);
  // console.log(searchParams.get("page"));
  // console.log(searchParams.get("limit"));
  useEffect(() => {}, [isSearching]);

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

  const barChartContextValue = {
    topTwenty,
  };

  const searchBarContextValue = {
    searchTerm,
    searchResults,
    setSearchResults,
    setSearchTerm,
    setIsSearching,
  };

  useEffect(() => {
    checkPagination();
    //fetchData();
    //console.log(topTwenty);
    if (isNextPage) {
      grabTopTen(lastIndex);
    } else {
      if (firstIndex <= 1) {
        grabTopTen();
        setCurrentPage(1);
      } else {
        grabTopTen(firstIndex);
      }
    }
  }, [currentPage]);

  /*
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
  */

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
      //console.log(lastItem);

      setTopTwenty(response);

      setGameArray(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  /*
  function handleOperations(options) {
    let localData = gameArray;
    if (options === "ASC") {
      localData = gameArray.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA > nameB) {
          return 1;
        }
        if (nameA < nameB) {
          return -1;
        }
        return 0;
      });
    } else if (options === "DESC") {
      localData = gameArray.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameB > nameA) {
          return 1;
        }
        if (nameB < nameA) {
          return -1;
        }
        return 0;
      });
    }
    console.log(localData)
    setGameArray(localData);
  }*/
  return (
    <div className="container">
      <br />
      <div className="container">
        <BarChartContext.Provider value={barChartContextValue}>
          <BarChart />
        </BarChartContext.Provider>
      </div>

      <br />
      <div className="container">
        <SearchContext.Provider value={searchBarContextValue}>
          <SearchBar />
        </SearchContext.Provider>
        <br />
        {isSearching ? (
          <div className="container">
            <h3>Search Results: {searchResults.length}</h3>

            <table className="table table-bordered table-hover table-dark">
              <thead>
                <tr className="text-center">
                  <th scope="col">Name</th>
                  <th scope="col">Sales</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map(({ name, id, global_sales }, index) => {
                  return (
                    <tr
                      key={index}
                      className="text-center"
                      onClick={() => navigate(`/${id}`)}
                    >
                      <td>{name}</td>
                      <td>{global_sales}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <></>
        )}
      </div>
      <br />
      <Overlay isLoading={isLoading}>
        <div className="container">
          <br />
          {/* <div className="btn-group">
            <button
              className="btn btn-danger"
              onClick={() => handleOperations("ASC")}
            >
              Ascending
            </button>
            <button
              className="btn btn-success"
              onClick={() => handleOperations("DESC")}
            >
              Descending
            </button>
          </div> */}
          <br />

          <br />
          <table className="table table-bordered table-dark table-hover">
            <thead>
              <tr className="text-center">
                <th scope="col">Rank</th>
                <th scope="col">Name</th>
                <th scope="col">Platform</th>
                <th scope="col">Global Sales (Millions)</th>
                <th scope="col">Publisher</th>
                <th scope="col">Year</th>
              </tr>
            </thead>
            <tbody>
              {gameArray.map(
                (
                  { name, id, global_sales, rank, platform, publisher, year },
                  index
                ) => {
                  return (
                    <TableUnit
                      key={index}
                      id={id}
                      name={name}
                      global_sales={global_sales}
                      rank={rank}
                      platform={platform}
                      publisher={publisher}
                      year={year}
                    />
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </Overlay>
      <PaginationContext.Provider value={paginationContextValue}>
        <Pagination />
      </PaginationContext.Provider>
    </div>
  );
}

export default Home;
