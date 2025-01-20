import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import "./scss/app.scss";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import React, { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
