import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillCaretUpFill } from "react-icons/bs";
import { API_CALL } from "../../Constant";
import "./style.css";

const Table = ({ teams, handleChange }) => {
  return (
    <div>
      <div className="table">
        <table className="table-border" size="lg">
          <thead className="table-dark">
            <tr className="table-headings">
              <th scope="col">Team Name</th>
              <th scope="col">City</th>
              <th scope="col">Abbreviation</th>
              <th scope="col">Conference</th>
              <th scope="col">Division</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((teamData) => {
              console.log(teamData, "teamData");
              return (
                <tr
                  id="team-row"
                  onClick={() => {
                    handleChange(teamData.id);
                  }}
                >
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
