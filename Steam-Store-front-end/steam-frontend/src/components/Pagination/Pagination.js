import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import { useSearchParams } from "react-router-dom";
import { PaginationContext } from "../common/context/context";

const Pagination = () => {
  // const navigate = useNavigate();
  //{ currentPage, nextPage, previousPage, searchParams }

  const { currentPage, searchParams, setCurrentPage } =
    useContext(PaginationContext);

  function handlePrev() {
    setCurrentPage(Number(currentPage) - 1);
  }
  function handleNext() {
    setCurrentPage(Number(currentPage) + 1);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <Link
            to={`/?page=${currentPage - 1}`}
            className="page-link"
            onClick={handlePrev}
          >
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>

        <li className="page-item active">
          <div className="page-link">
            <span aria-hidden="true">{currentPage}</span>
          </div>
        </li>

        <li className="page-item">
          <Link
            to={`/?page=${currentPage + 1}`}
            className="page-link"
            onClick={handleNext}
          >
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
