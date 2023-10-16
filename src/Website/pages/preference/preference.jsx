import React from "react";
import BodyComponent from "../../components/bodyComponent";
import StatsBar from "../../components/stats";
import { BsThreeDots, BsBug } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import profileImg from "../../../assets/images/guy.png";
import { HiMiniSignal } from "react-icons/hi2";
import filterSvg from "../../../assets/images/Filter.svg";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import ProfileImg from "../../../assets/images/guy.png";
import { useEffect } from "react";
import { PreferenceApi } from "../../../services/customerApis/preference";

const Prefernce = () => {
  const {
    getUserNotification,
    getUserConversations,
    getUserActivities,
    getUserContacts,
  } = PreferenceApi();
  const [isDropDown, setIsDropDown] = useState(false);

  const [agentList, setAgentList] = useState([
    { agentImage: ProfileImg, agentName: "agent1" },
    { agentImage: ProfileImg, agentName: "agent2" },
    { agentImage: ProfileImg, agentName: "agent3" },
    { agentImage: ProfileImg, agentName: "agent4" },
    { agentImage: ProfileImg, agentName: "agent5" },
    { agentImage: ProfileImg, agentName: "agent6" },
    { agentImage: ProfileImg, agentName: "agent7" },
    { agentImage: ProfileImg, agentName: "agent8" },
    { agentImage: ProfileImg, agentName: "agent9" },
    { agentImage: ProfileImg, agentName: "agent10" },
    { agentImage: ProfileImg, agentName: "agent11" },
    { agentImage: ProfileImg, agentName: "agent12" },
    { agentImage: ProfileImg, agentName: "agent13" },
    { agentImage: ProfileImg, agentName: "agent14" },
    { agentImage: ProfileImg, agentName: "agent15" },
    { agentImage: ProfileImg, agentName: "agent16" },
    { agentImage: ProfileImg, agentName: "agent17" },
    { agentImage: ProfileImg, agentName: "agent18" },
  ]);

  const [data, setData] = useState([
    {
      username: "agent 1",
      channel: "channel 11",
      date: "7 July 2023",
      time: "07:00 PM",
      duration: "01:54:89",
    },
    {
      username: "agent 2",
      channel: "channel 22",
      date: "8 July 2023",
      time: "08:00 PM",
      duration: "01:54:89",
    },
    {
      username: "agent 3",
      channel: "channel 33",
      date: "9 July 2023",
      time: "09:00 PM",
      duration: "01:54:89",
    },
    {
      username: "agent 4",
      channel: "channel 44",
      date: "10 July 2023",
      time: "10:00 PM",
      duration: "01:54:89",
    },
    {
      username: "agent 5",
      channel: "channel 55",
      date: "11 July 2023",
      time: "11:00 PM",
      duration: "01:54:89",
    },
    {
      username: "agent 6",
      channel: "channel 66",
      date: "12 July 2023",
      time: "12:00 PM",
      duration: "01:54:89",
    },
    {
      username: "agent 7",
      channel: "channel 77",
      date: "13 July 2023",
      time: "01:00 AM",
      duration: "01:54:89",
    },
    {
      username: "agent 8",
      channel: "channel 88",
      date: "14 July 2023",
      time: "02:00 AM",
      duration: "01:54:89",
    },
    {
      username: "agent 9",
      channel: "channel 99",
      date: "15 July 2023",
      time: "03:00 AM",
      duration: "01:54:89",
    },
    {
      username: "agent 10",
      channel: "channel 10",
      date: "16 July 2023",
      time: "04:00 AM",
      duration: "01:54:89",
    },
    {
      username: "agent 11",
      channel: "channel 1",
      date: "17 July 2023",
      time: "04:00 AM",
      duration: "01:54:89",
    },
    {
      username: "agent 12",
      channel: "channel 2",
      date: "18 July 2023",
      time: "06:00 AM",
      duration: "01:54:89",
    },
    {
      username: "agent 13",
      channel: "channel 3",
      date: "19 July 2023",
      time: "07:00 AM",
      duration: "01:54:89",
    },
    {
      username: "agent 14",
      channel: "channel 4",
      date: "20 July 2023",
      time: "08:00 AM",
      duration: "01:54:89",
    },
    {
      username: "agent 15",
      channel: "channel 5",
      date: "21 July 2023",
      time: "08:00 AM",
      duration: "01:54:89",
    },
    {
      username: "agent 16",
      channel: "channel 6",
      date: "22 July 2023",
      time: "09:00 AM",
      duration: "01:54:89",
    },
    {
      username: "agent 17",
      channel: "channel 7",
      date: "23 July 2023",
      time: "03:00 AM",
      duration: "01:54:89",
    },
    {
      username: "agent 18",
      channel: "channel 8",
      date: "24 July 2023",
      time: "06:00 AM",
      duration: "01:54:89",
    },
    {
      username: "agent 19",
      channel: "channel 9",
      date: "25 July 2023",
      time: "09:00 AM",
      duration: "01:54:89",
    },
    {
      username: "agent 20",
      channel: "channel 12",
      date: "26 July 2023",
      time: "01:00 AM",
      duration: "01:54:89",
    },
  ]);

  const sortByChannel = () => {
    const sortedData = [...data].sort((a, b) => {
      // Extract the numeric part from the channel names
      const channelA = parseInt(a.channel.split(" ")[1]);
      const channelB = parseInt(b.channel.split(" ")[1]);

      // Compare the numeric parts
      return channelA - channelB;
    });
    setData(sortedData);
  };

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      // Compare the dates
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
      return 0;
    });

    setData(sortedData);
  };

  const sortByAgentName = () => {
    const sortedData = [...data].sort((a, b) => {
      // Extract numeric part of agent names
      const agentNumberA = parseInt(a.username.match(/\d+/)[0]);
      const agentNumberB = parseInt(b.username.match(/\d+/)[0]);

      // Compare numeric parts
      return agentNumberA - agentNumberB;
    });

    setData(sortedData);
  };

  const [searchTerm, setSearchTerm] = useState("");

  // Function to filter agents based on search term
  const filteredAgents = agentList.filter((agent) =>
    agent.agentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [isFilters, setIsFilters] = useState(false);

  const sortByTime = () => {
    const sortedData = [...data].sort((a, b) => {
      const timeA = a.time;
      const timeB = b.time;

      // Convert time strings to 24-hour format for comparison
      const timeA24 = convertTo24HourFormat(timeA);
      const timeB24 = convertTo24HourFormat(timeB);

      // Compare the times
      if (timeA24 < timeB24) return -1;
      if (timeA24 > timeB24) return 1;
      return 0;
    });

    setData(sortedData);
  };

  // Function to convert time to 24-hour format
  const convertTo24HourFormat = (time) => {
    const [timePart, amPm] = time.split(" ");
    const [hour, minute] = timePart.split(":");
    let hour24 = parseInt(hour);

    if (amPm.toLowerCase() === "pm") {
      if (hour24 !== 12) {
        hour24 += 12;
      }
    } else {
      if (hour24 === 12) {
        hour24 = 0;
      }
    }

    return `${hour24.toString().padStart(2, "0")}:${minute}`;
  };

  const [activities, setActivities] = useState([]);
  const [notification, setNotification] = useState([]);
  const [convoSummary, setConvoSummary] = useState([]);
  const [userContact, setUserContact] = useState([]);

  useEffect(() => {
    getUserActivities()
      .then((res) => {
        setActivities(res?.data);
        console.log("activities", res);
      })
      .catch((res) => {
        console.log(res.response.statusText, "error");
      });
  }, []);
  useEffect(() => {
    getUserNotification()
      .then((res) => {
        setNotification(res?.data);
        console.log("notifications", res);
      })
      .catch((res) => {
        console.log(res.response.statusText, "error");
      });
  }, []);
  useEffect(() => {
    getUserConversations()
      .then((res) => {
        setConvoSummary(res?.data);
        console.log("convo", res);
      })
      .catch((res) => {
        console.log(res.response.statusText, "error");
      });
  }, []);
  useEffect(() => {
    getUserContacts()
      .then((res) => {
        setUserContact(res?.data);
        console.log("contacts", res);
      })
      .catch((res) => {
        console.log(res.response.statusText, "error");
      });
  }, []);
  return (
    <React.Fragment>
      <BodyComponent>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
            <div className="row g-3 marginBottomRow">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                <div className="card cardMargin">
                  <div className="card-body">
                    <div className="headingNotification">
                      <span>Notification</span>
                      <div className="dropdown">
                        <button
                          className="btnDropDown"
                          onClick={() => {
                            setIsDropDown(!isDropDown);
                          }}
                        >
                          <BsThreeDots />
                        </button>
                        {isDropDown && (
                          <ul className="dropdownMenu">
                            <li>
                              <a
                                className="dropdown-item active"
                                href="https://www.facebook.com/"
                                target="_blank"
                              >
                                Facebook
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="https://twitter.com/"
                                target="_blank"
                              >
                                Twitter
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="https://www.whatsapp.com/"
                                target="_blank"
                              >
                                Whatsapp
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Live Chats
                              </a>
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>

                    <div className="allNotificationCard">
                      <div className="notify">
                        <BsBug />
                        <div className="notifyInfo">
                          <p>You have a bug that needs to be fixed.</p>
                          <small>Just now</small>
                        </div>
                      </div>
                      <div className="notify">
                        <AiOutlineUser />
                        <div className="notifyInfo">
                          <p>New user registered</p>
                          <small>59 minutes ago</small>
                        </div>
                      </div>
                      <div className="notify">
                        <BsBug />
                        <div className="notifyInfo">
                          <p>You have a bug that needs to be fixed.</p>
                          <small>Just now</small>
                        </div>
                      </div>
                      <div className="notify">
                        <HiMiniSignal />
                        <div className="notifyInfo">
                          <p>Andi Lane subscribed to you</p>
                          <small>Today, 11:59 AM</small>
                        </div>
                      </div>
                      <div className="notify">
                        <HiMiniSignal />
                        <div className="notifyInfo">
                          <p>Andi Lane subscribed to you</p>
                          <small>Today, 11:59 AM</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-3 marginBottomRow">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                <div className="card cardMargin">
                  <div className="card-body">
                    <div className="headingNotification">
                      <span>Activities</span>
                    </div>

                    <div className="allNotificationCard">
                      <div className="notify">
                        <img src={profileImg} alt="" />
                        <div className="notifyInfo">
                          <p>You have a bug that needs to be fixed.</p>
                          <small>Just now</small>
                        </div>
                      </div>
                      <div className="notify">
                        <img src={profileImg} alt="" />
                        <div className="notifyInfo">
                          <p>New user registered</p>
                          <small>59 minutes ago</small>
                        </div>
                      </div>
                      <div className="notify">
                        <img src={profileImg} alt="" />
                        <div className="notifyInfo">
                          <p>You have a bug that needs to be fixed.</p>
                          <small>Just now</small>
                        </div>
                      </div>
                      <div className="notify">
                        <img src={profileImg} alt="" />
                        <div className="notifyInfo">
                          <p>Andi Lane subscribed to you</p>
                          <small>Today, 11:59 AM</small>
                        </div>
                      </div>
                      <div className="notify">
                        <img src={profileImg} alt="" />
                        <div className="notifyInfo">
                          <p>Andi Lane subscribed to you</p>
                          <small>Today, 11:59 AM</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <div className="row g-3 marginBottomRow">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                <div className="card cardMargin">
                  <div className="card-body">
                    <div className="preferenceMaintable">
                      <div className="preferenceHeading">
                        <p className="mainHeadingPreferenceTable">
                          Conversation Summary Details
                        </p>
                        <div className="preferenceRight">
                          <button
                            className="filterButton"
                            onClick={() => setIsFilters(!isFilters)}
                          >
                            <img src={filterSvg} alt="" />
                            <span>Filters</span>
                            {isFilters && (
                              <div className="filterMenu">
                                <button onClick={sortByAgentName}>
                                  Agents
                                </button>
                                <button onClick={sortByTime}>Time</button>
                              </div>
                            )}
                          </button>
                          <button onClick={sortByChannel}>Channels</button>
                          <button onClick={sortByDate}>date</button>
                          {/* <button>
                                                        Type
                                                    </button> */}
                        </div>
                      </div>

                      <div className="preferenceTable">
                        <div className="table-responsive">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>Name of Agent</th>
                                <th>Channel</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Duration</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data.map((item, keyId) => (
                                <tr key={keyId}>
                                  <td>{item.username}</td>
                                  <td>{item.channel}</td>
                                  <td>{item.date}</td>
                                  <td>{item.time}</td>
                                  <td>{item.duration}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
            <div className="card cardMargin">
              <div className="card-body">
                <div>
                  <h6>All Contacts</h6>
                </div>
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
                <ul className="agentList agentPreference">
                  {filteredAgents.map((item, keyId) => (
                    <li key={keyId}>
                      <button>
                        <img src={item.agentImage} alt="" />
                        <p>{item.agentName}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </BodyComponent>
    </React.Fragment>
  );
};

export default Prefernce;
