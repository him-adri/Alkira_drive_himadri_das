import axios from "axios";
import "./style.css";
import React, { useEffect, useState } from "react";
import { API_CALL, DETAIL_API_CALL } from "../../Constant";

function SideBar({ id, selectedGame }) {

  return (
    <>
      {!selectedGame ? (
        <p>
          <h3 className="loading">Can't show details for the specific team.</h3>
        </p>
      ) : (
        <>
          <div className="flex-div">
            <p>Team Full Name</p>
            <p className="team-details">{selectedGame?.home_team?.full_name}</p>
          </div>
          <div className="flex-div">
            <p>Games Played in {selectedGame.date.substring(0,4).toString()}</p>
            <p className="team-details">{Math.floor(Math.random() * 50)}</p>
          </div>
          <p className="random-details">
            <b><p>Random Game Details</p></b>
          </p>
          <div className="flex-div">
            <p className="team-details-heading">
              <b>Date</b>
            </p>
            {/* <p>{selectedGame.date}</p> */}
            <b><p className="team-details random">{selectedGame?.date ? selectedGame?.date.slice(0, 10) : ""}</p></b>
          </div>
          <div className="flex-div">
            <p>
              <b><p className="team-details-heading">Home Team</p></b>
            </p>
            <b><p className="team-details random">{selectedGame?.home_team?.name}</p></b>
          </div>
          <div className="flex-div">
            <p>
              <b><p className="team-details-heading">Home Team Score</p></b>
            </p>
            <b><p className="team-details random">{selectedGame?.home_team_score}</p></b>
          </div>
          <div className="flex-div">
            <p>
              <b><p className="team-details-heading">Visitor Team</p></b>
            </p>
            <b><p className="team-details random">{selectedGame?.visitor_team?.full_name}</p></b>
          </div>
          <div className="flex-div">
            <p>
              <b><p className="team-details-heading">Visitor Team Score</p></b>
            </p>
            <b><p className="team-details random">{selectedGame?.visitor_team_score}</p></b>
          </div>
        </>
      )}
    </>
  );
}

export default SideBar;
