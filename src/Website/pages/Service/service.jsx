/* eslint-disable no-unused-vars */
import React from "react";
import BodyComponent from "../../components/bodyComponent";
import agentImg from "../../../assets/images/guy.png";
// import { BsTelephoneFill } from 'react-icons/bs'
// import { PiPaperPlaneTiltBold } from 'react-icons/pi'
// FaVideo down
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { AiFillPlusCircle, AiFillTwitterCircle } from "react-icons/ai";
import { CallFunctionality } from "../../components/callFunctionality";
import { ServiceApi } from "../../../services/agentApis/service";
import { useState } from "react";
import { useEffect } from "react";

export const Service = () => {
  const { getUserConversations,getUserConvoSummary } = ServiceApi();

  const [conversationState, setConversationState] = useState([]);
  const [convoSummaryState, setConvoSummaryState] = useState();

  const getUserConvo = async () => {
    try {
      const response = await getUserConversations();
      setConversationState(response?.data?.data);
      console.log("user convo", response?.data?.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  const getConvoSummary = async () => {
    try {
      const response = await getUserConvoSummary();
      console.log("sum",response?.data)
      setConvoSummaryState(response);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getUserConvo();
    getConvoSummary()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <React.Fragment>
      <BodyComponent>
        <div className="row g-3 AgentApp">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
            <div className="card cardMargin">
              <div className="card-body">
                <h2 className="cardMainHeading">Recent Conversation</h2>
                <div className="customerName">
                  {[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18,
                  ].map((item, keyId) => (
                    <div key={keyId} className="customerElement">
                      <img src={agentImg} alt="" />
                      <p>Customer Name</p>
                      <small>07:00 PM</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <div className="row g-3">
              <div className="col-12">
                <div className="card cardMargin">
                  <div className="card-body">
                    <CallFunctionality />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card cardMargin">
                  <div className="card-body">
                    <h2 className="cardMainHeading">Conversation Summary</h2>
                    <div className="communicationTable tableHeight">
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Channel</th>
                              <th>Incoming</th>
                              <th>Handle Time</th>
                              <th>Avg CSAT</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Live Chat</td>
                              <td>83</td>
                              <td>83</td>
                              <td>83</td>
                            </tr>
                            <tr>
                              <td>Video Call</td>
                              <td>83</td>
                              <td>83</td>
                              <td>83</td>
                            </tr>
                            <tr>
                              <td>Facebook</td>
                              <td>83</td>
                              <td>83</td>
                              <td>83</td>
                            </tr>
                            <tr>
                              <td>Voice Chat</td>
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
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
            <div className="card cardMargin cardHeightChannel ">
              <div className="card-body">
                <h2 className="cardMainHeading">Basic Info</h2>
                <div className="basicInfoContainer">
                  <div className="basicInfoWrapper">
                    <p className="basicInfoHeading">Name</p>
                    <p className="basicInfoPara">Customer Full Name</p>
                  </div>
                  <div className="basicInfoWrapper">
                    <p className="basicInfoHeading">Number</p>
                    <p className="basicInfoPara">1234567890</p>
                  </div>
                  <div className="basicInfoWrapper">
                    <p className="basicInfoHeading">Email</p>
                    <p className="basicInfoPara">xyz@gmail.com</p>
                  </div>
                </div>

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
              <div className="card-body addChannelIcon">
                <button className="">
                  <AiFillPlusCircle /> <span>Add Channel</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </BodyComponent>
    </React.Fragment>
  );
};
