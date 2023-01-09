import axios from "axios";
import "./style.css";
import React, { useEffect, useState } from "react";
import { API_CALL, DETAIL_API_CALL } from "../../Constant";

function SideBar({ id, selectedGame }) {

  return (
    <>
      {!selectedGame ? (
        <p>
          <h3 className="loading">Kindly Wait your data is loading🔃</h3>
        </p>
      ) : (
        <>
          <div className="flex-div">
            <p>Team Full Name:</p>
            <p>{selectedGame?.home_team?.full_name}</p>
          </div>
          <div className="flex-div">
            <p>Total selectedGame Played in 2021:</p>
            <p>{Math.ceil(Math.random() * 10)}</p>
          </div>
          <p className="random-details">
            <b>Random Game selectedGame: </b>
          </p>
          <div className="flex-div">
            <p>
              <b>Date:</b>
            </p>
            {/* <p>{selectedGame.date}</p> */}
            <p>{selectedGame?.date ? selectedGame?.date.slice(0, 10) : ""}</p>
          </div>
          <div className="flex-div">
            <p>
              <b>Home Team:</b>
            </p>
            <p>{selectedGame?.home_team?.name}</p>
          </div>
          <div className="flex-div">
            <p>
              <b>Home Team Score:</b>
            </p>
            <p>{selectedGame?.home_team_score}</p>
          </div>
          <div className="flex-div">
            <p>
              <b>Visitor Team:</b>
            </p>
            <p>{selectedGame?.visitor_team?.full_name}</p>
          </div>
          <div className="flex-div">
            <p>
              <b>Visitor Team Score:</b>
            </p>
            <p>{selectedGame?.visitor_team_score}</p>
          </div>
        </>
      )}
    </>
  );
}

export default SideBar;
