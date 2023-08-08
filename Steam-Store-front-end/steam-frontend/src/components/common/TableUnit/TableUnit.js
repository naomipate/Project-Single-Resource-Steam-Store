import React from "react";

function TableUnit({
  name,
  id,
  global_sales,
  rank,
  platform,
  publisher,
  year,
}) {
  return (
    <>
      <tr key={id} className="text-center">
        <td>{rank}</td>
        <td>{name}</td>
      </tr>
    </>
  );
}

export default TableUnit;
