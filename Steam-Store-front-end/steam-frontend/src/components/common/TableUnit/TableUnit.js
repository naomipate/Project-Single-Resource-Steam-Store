import React from "react";
import { useNavigate } from "react-router-dom";

function TableUnit({
  name,
  id,
  global_sales,
  rank,
  platform,
  publisher,
  year,
}) {
  const navigate = useNavigate();
  return (
    <>
      <tr key={id} className="text-center" onClick={() => navigate(`/${id}`)}>
        <td>{rank}</td>
        <td>{name}</td>
        <td>{platform}</td>
        <td>{global_sales}</td>
        <td>{publisher}</td>
        <td>{year}</td>
      </tr>
    </>
  );
}

export default TableUnit;
