/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import BodyComponent from "../../components/bodyComponent";
import StatsBar from "../../components/stats";
// import { BsTelephoneFill } from "react-icons/bs";
// import SearchBar from "../../components/searchBar";
import { CiSearch } from "react-icons/ci";
import ProfileImg from "../../../assets/images/guy.png";
// import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { FaVideo, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CallFunctionality } from "../../components/callFunctionality";
import { CommunicationApi } from "../../../services/customerApis/Communication";

const Communication = () => {
  const [agentList, setAgentList] = useState([
    { agentImage: ProfileImg, agentName: "agent1" },
    { agentImage: ProfileImg, agentName: "agent2" },
    { agentImage: ProfileImg, agentName: "agent3" },
    { agentImage: ProfileImg, agentName: "agent4" },
    { agentImage: ProfileImg, agentName: "agent5" },
    { agentImage: ProfileImg, agentName: "agent6" },
    { agentImage: ProfileImg, agentName: "agent7" },
  ]);
  const { getUserCompanyAgents } = CommunicationApi();

  const [searchTerm, setSearchTerm] = useState("");

  // Function to filter agents based on search term
  const filteredAgents = agentList.filter((agent) =>
    agent.agentName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [allAgent, setAllAgent] = useState([]);

  const [selectedAgent, setSelectedAgent] = useState("");

  const getAllUserCompanyAgents = async () => {
    const response = await getUserCompanyAgents();
    console.log("res", response);
    setAllAgent(response?.data);
  };
  useEffect(() => {
    getAllUserCompanyAgents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <BodyComponent>
        <div className="row g-3">
          <StatsBar />
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
            <div className="card cardMargin">
              <div className="card-body">
                <div className="searchBar2">
                  <CiSearch className="searchIcon" />
                  <input
                    type="text"
                    name=""
                    placeholder="Seach Contacts"
                    id=""
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <ul className="agentList">
                  {allAgent?.map((item) => (
                    <li key={item.id}>
                      <button onClick={() => {
                        localStorage.setItem("extension",item.extension)
                      }}>
                        <img src={ProfileImg} alt="" />
                        <p
                          style={{
                            textTransform: "capitalize",
                          }}
                        >
                          {item.firstname} {item.lastname}
                        </p>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <div className="card cardMargin">
              <div className="card-body">
                <CallFunctionality />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
            <div className="card cardMargin">
              <div className="card-body">
                <h6 className="channelHeading">Select Channels</h6>
              </div>
              <ul className="channels">
                <li className="facebookChannel">
                  <a href="https://www.facebook.com/ " target="_blank">
                    <FaFacebook /> <span>Facebook</span>
                  </a>
                </li>
                <li className="whatsappChannel">
                  <a href="https://www.whatsapp.com/" target="_blank">
                    {" "}
                    <FaWhatsapp /> <span>Whatsapp</span>
                  </a>{" "}
                </li>
                <li className="twitterChannel">
                  <a href="https://www.twitter.com/" target="_blank">
                    {" "}
                    <AiFillTwitterCircle /> <span>Twitter</span>{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-12 ">
            <div className="card cardMargin">
              <div className="card-body">
                <div className="communicationTable">
                  <h6>Conversation Summary Details</h6>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Channel</th>
                          <th>Incoming Conv.</th>
                          <th>Engaged Conv.</th>
                          <th>Avg Wait Time</th>
                          <th>Avg Speed to Ans</th>
                          <th>Avg Handle Time</th>
                          <th>Avg Transfer Rate</th>
                          <th>Avg CSAT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Live Chat</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                        </tr>
                        <tr>
                          <td>Video Call</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                        </tr>
                        <tr>
                          <td>Facebook</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                        </tr>
                        <tr>
                          <td>Whatsapp</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                        </tr>
                        <tr>
                          <td>Twitter</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                          <td>83</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BodyComponent>
    </React.Fragment>
  );
};

export default Communication;
