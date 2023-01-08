import React from "react";
import "./style.css";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";

const Search = ({ search, setSearch }) => {
  return (
    <>
      <div className="search-box">
        <BsSearch className="serach-icon" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />{" "}
      </div>
    </>
  );
};

export default Search;
