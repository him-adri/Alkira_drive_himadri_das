import axios from "axios";
import "./style.css";
import React, { useEffect, useState } from "react";
import { DETAIL_API_CALL } from "../../Constant";

function SideBar({ id }) {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    setLoading(true);
    axios.get(DETAIL_API_CALL + `/${id}`).then((res) => {
      console.log(res.data.home_team.id,"home team")
      if(id === res.data.id){
        setDetails(res.data);
        setLoading(false);
      }else{
        alert("Data Cant")
      }
    });
  }
  console.log("details", details);
  return (
    <>
      {loading ? (
        <p>
          <h3 className="loading">Kindly Wait your data is loading🔃</h3>
        </p>
      ) : (
        <>
          <div className="flex-div">
            <p>Team Full Name:</p>
            <p>{details.home_team.full_name}</p>
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
            <p>{details.date ? details.date.slice(0, 10) : ""}</p>
          </div>
          <div className="flex-div">
            <p>
              <b>Home Team:</b>
            </p>
            <p>{details.home_team.name}</p>
          </div>
          <div className="flex-div">
            <p>
              <b>Home Team Score:</b>
            </p>
            <p>{details.home_team_score}</p>
          </div>
          <div className="flex-div">
            <p>
              <b>Visitor Team:</b>
            </p>
            <p>{details.visitor_team.full_name}</p>
          </div>
          <div className="flex-div">
            <p>
              <b>Visitor Team Score:</b>
            </p>
            <p>{details.visitor_team_score}</p>
          </div>
        </>
      )}
    </>
  );
}

export default SideBar;
