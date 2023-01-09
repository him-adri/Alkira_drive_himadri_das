import axios from "axios";
import "./style.css";
import React, { useEffect, useState } from "react";
import { API_CALL, DETAIL_API_CALL } from "../../Constant";

function SideBar({ id }) {
  const [details, setDetails] = useState({});
  const [games, setGames] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDataTeams();
  }, []);
  useEffect(() => {
    getDataGames();
  }, []);

  function getDataTeams() {
    setLoading(true);
    axios.get(API_CALL + `${id}`).then((res) => {
      console.log(res.data, "home team");
      setDetails(res.data);
      setLoading(false);
    });
  }
  function getDataGames() {
    setLoading(true);
    axios.get(DETAIL_API_CALL + `${id}`).then((res) => {
      console.log(res.data, "game team");
      setGames(res.data);
      setLoading(false);
    });
  }

  console.log("details", id);
  return (
    <>
      {loading || !details ? (
        <p>
          <h3 className="loading">Kindly Wait your data is loading🔃</h3>
        </p>
      ) : (
        <>
          <div className="flex-div">
            <p>Team Full Name:</p>
            <p>{details?.full_name}</p>
          </div>
          <div className="flex-div">
            <p>Total Games Played in 2021:</p>
            <p>{Math.ceil(Math.random() * 10)}</p>
          </div>
          <p className="random-details">
            <b>Random Game Details: </b>
          </p>
          <div className="flex-div">
            <p>
              <b>Date:</b>
            </p>
            {/* <p>{details.date}</p> */}
            <p>{games?.date ? games?.date.slice(0, 10) : ""}</p>
          </div>
          <div className="flex-div">
            <p>
              <b>Home Team:</b>
            </p>
            <p>{details?.name}</p>
          </div>
          <div className="flex-div">
            <p>
              <b>Home Team Score:</b>
            </p>
            <p>{games?.home_team_score}</p>
          </div>
          <div className="flex-div">
            <p>
              <b>Visitor Team:</b>
            </p>
            <p>{games?.visitor_team?.full_name}</p>
          </div>
          <div className="flex-div">
            <p>
              <b>Visitor Team Score:</b>
            </p>
            <p>{games?.visitor_team_score}</p>
          </div>
        </>
      )}
    </>
  );
}

export default SideBar;
