import React, { useEffect, useState } from "react";
import { getById, deleteGameByID } from "../common/API/API";
import { useParams, useNavigate } from "react-router-dom";

function ShowPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await getById(id);

      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    try {
      deleteGameByID(id);
      alert("Successfully Deleted");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container">
      <br />
      <div className="card bg-gradient" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="card-header">{data.name}</div>
        <div className="card-body">
          <h5 className="card-title">
            Rank: {data.rank} | Published: {data.publisher}
          </h5>
          <p className="card-text">Platform: {data.platform}</p>
          <p className="card-text">Year of Release: {data.year}</p>
          <p className="card-text">Genre: {data.genre}</p>
          <h5 className="card-title">Sales (Millions)</h5>

          <p className="card-text">Global: {data.global_sales}</p>
          <p className="card-text">North America: {data.na_sales}</p>
          <p className="card-text">Europe: {data.eu_sales}</p>
          <p className="card-text">Japan: {data.jp_sales}</p>
          <p className="card-text">Other: {data.other_sales}</p>
          <br />
          <div className="btn-group">
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
              Back
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/edit-game/${id}`)}
            >
              Edit
            </button>
            <button className="btn btn-primary" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowPage;
