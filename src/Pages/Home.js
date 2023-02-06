import React, { useEffect, useState } from "react";
import Search from "../Components/Search/Search";
import axios from "axios";
import { API_CALL, DETAIL_API_CALL } from "../Constant";
import Page from "../Components/PaginationComponent/Page";
import SideBar from "../Components/SideBar/SideBar";
import Table from "../Components/TableDetails/Table";
import Heading from "../Components/Heading/Heading";
import Offcanvas from "react-bootstrap/Offcanvas";

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState("");
  const [isSelected, setIsSelected] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [teamsPerPage, setTeamsPerPage] = useState(10);
  const [games, setGames] = useState([]);
  const [selectedGame, setselectedGame] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API_CALL).then((res) => {
      setLoading(true);
      setTeams(res.data.data);
      setLoading(false);
    });
    axios.get(DETAIL_API_CALL).then((res) => {
      console.log(res.data.data, "game team");
      setGames(res.data.data);
      setLoading(false);
    });
  }, []);

  var filteredCoins = teams.filter((item) => {
    if (
      item.full_name.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.abbreviation.toLowerCase().includes(search.toLowerCase()) ||
      item.conference.toLowerCase().includes(search.toLowerCase()) ||
      item.division.toLowerCase().includes(search.toLowerCase())
    ) {
      return item;
    }
  });

  const indexOfLastTeam = currentPage * teamsPerPage;
  const indexOfFirstPost = indexOfLastTeam - teamsPerPage;
  const currentTeams = teams.slice(indexOfFirstPost, indexOfLastTeam);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  var handleChange = (id) => {
    setIsSelected(id);
    var selectedGames = games.filter((item) => {
      if (item.home_team.id == id) {
        return item;
      }
    });
    setselectedGame(selectedGames[0]);
  };

  if (isSelected) {
    console.log(isSelected, "is Slected");
  }
  return (
    <>
      <div className="contain">
        <div>
          <Heading />
        </div>
        <div className="serach">
          <Search search={search} setSearch={setSearch} />
          {search && filteredCoins.length == 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                minHeight: "80vh",
              }}
            >
              <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>
                Can't Find What You Were Looking For 🥲
              </h1>
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></div>
            </div>
          ) : (
            <>
              {loading ? (
                <p>
                  <h3 className="loading-table">
                    Kindly Wait your data is loading🔃
                  </h3>
                </p>
              ) : (
                <Table
                  teams={search ? filteredCoins : currentTeams}
                  handleChange={handleChange}
                />
              )}
              <Offcanvas
                show={isSelected !== ""}
                placement="end"
                onHide={() => setIsSelected("")}
              >
                <Offcanvas.Header className="team-deatil-header" closeButton>
                  <Offcanvas.Title>Deatils of The Team</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {" "}
                  <SideBar id={isSelected} selectedGame={selectedGame} />{" "}
                </Offcanvas.Body>
              </Offcanvas>
            </>
          )}
        </div>
        <div>
          {!search && (
            <Page
              teamsPerPage={teamsPerPage}
              totalTeams={teams.length}
              paginate={paginate}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;