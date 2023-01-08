import React, { useEffect, useState } from "react";
import "./style.css";

import { BsFillCaretUpFill } from "react-icons/bs";
// import SideBar from "../Side Bar/SideBar";

const Table = ({teams, handleChange}) => {
  return (
    <div>
      <div className="table">
        <table className="table-border" size="lg">
          <thead className="table-dark">
            <tr className="table-headings">
              <th scope="col">Team Name</th>
              <th scope="col">
                City{" "}
                <span>
                  {" "}
                  <BsFillCaretUpFill />{" "}
                </span>
              </th>
              <th scope="col">Abbreviation</th>
              <th scope="col">Conference</th>
              <th scope="col">Division</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((teamData) => {
              return (
                <tr onClick={() => {handleChange(teamData.id)}}>
                  <td>{teamData.name}</td>
                  <td>{teamData.city}</td>
                  <td>{teamData.abbreviation}</td>
                  <td>{teamData.conference}</td>
                  <td>{teamData.division}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
