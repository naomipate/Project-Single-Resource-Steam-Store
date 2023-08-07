import React from "react";
import "./App.css";
import Spinner from "./components/common/Spinner/Spinner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./components/Home/Home"));
const Nav = React.lazy(() => import("./components/Nav/Nav"));
const Error = React.lazy(() => import("./components/Error/Error"));

// CSS Color Scheme Hex Code (RGB) (13,197,193)

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Spinner />}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/?" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
