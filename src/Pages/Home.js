import React, { useEffect, useState } from "react";
import Search from "../Components/Search/Search";
import axios from "axios";
import { API_CALL } from "../Constant";
import Page from "../Components/PaginationComponent/Page";
import SideBar from "../Components/SideBar/SideBar";
import Table from "../Components/TableDetails/Table";
import Heading from "../Components/Heading/Heading";
import Offcanvas from "react-bootstrap/Offcanvas";
import Footer from "../Components/Footer/footer";

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState("");
  const [isSelected, setIsSelected] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [teamsPerPage, setTeamsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API_CALL).then((res) => {
      setLoading(true);
      setTeams(res.data.data);
      setLoading(false);
    });
  }, []);

  var filteredCoins = teams.filter((item) => {
    if (item.name.toLowerCase().includes(search.toLowerCase())) {
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
                  <SideBar id={isSelected} />{" "}
                </Offcanvas.Body>
              </Offcanvas>
            </>
          )}
        </div>
        <div>
          <Page
            teamsPerPage={teamsPerPage}
            totalTeams={teams.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
