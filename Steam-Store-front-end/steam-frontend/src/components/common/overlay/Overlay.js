import React from "react";

function Overlay({ children, isLoading }) {
  return (
    <>
      {isLoading && <div className="loader"></div>}
      {children}
    </>
  );
}

export default Overlay;
