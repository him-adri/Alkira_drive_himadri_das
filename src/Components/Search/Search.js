import React from "react";
import "./style.css";
import { BsSearch } from "react-icons/bs";

const Search = ({ search, setSearch }) => {
  return (
    <>
      <div className="search-box">
        <span>
          <BsSearch className="serach-icon" />
        </span>
        <input
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />{" "}
      </div>
    </>
  );
};

export default Search;
