import React from 'react'
import BodyComponent from '../../components/bodyComponent'
import { BsFillCameraVideoFill, BsFillChatDotsFill, BsTelephoneFill } from 'react-icons/bs'
import profileImg from '../../../assets/images/guy.png'
import { AiOutlineDelete } from 'react-icons/ai'
import { useState } from 'react'

export const AdminCompliance = () => {
    const [activityStatus, setActivityStatus] = useState(
        Array(12).fill(false) // Initialize with all agents' activity status as false
    );

    const toggleActivityStatus = (keyId) => {
        const updatedStatus = [...activityStatus];
        // Toggle the clicked activity status
        updatedStatus[keyId] = !updatedStatus[keyId];
    
        // Close other activity dropdowns
        for (let i = 0; i < updatedStatus.length; i++) {
          if (i !== keyId) {
            updatedStatus[i] = false;
          }
        }
    
        setActivityStatus(updatedStatus);
      };

    const [data, setData] = useState([
        { id: 1, username: "Agent Name 1" },
        { id: 2, username: "Agent Name 2" },
        { id: 3, username: "Agent Name 3" },
        { id: 4, username: "Agent Name 4" },
        { id: 5, username: "Agent Name 5" },
        { id: 6, username: "Agent Name 6" },
        { id: 7, username: "Agent Name 7" },
        { id: 8, username: "Agent Name 8" },
        { id: 9, username: "Agent Name 9" },
        { id: 10, username: "Agent Name 10" },
        { id: 11, username: "Agent Name 11" },
        { id: 12, username: "Agent Name 12" },

    ])

    return (
        <React.Fragment>
            <BodyComponent>
                <div className="row g-3">
                    <div className="col-12">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <h2 className='cardMainHeading'>Work Space Summary</h2>
                                <div className="communicationTable tableHeight privacyTable">

                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Agents</th>
                                                    <th>Action</th>
                                                    <th>Status</th>
                                                    <th>Log In</th>
                                                    <th>Channels</th>
                                                    <th>Work Summary</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((item, keyId) => (


                                                    <tr key={keyId}>
                                                        <td>
                                                            <div className="privacyAgentCol">
                                                                <img src={profileImg} alt="" />
                                                                <p>
                                                                    {item.username}
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td className='activityChange'>
                                                            <div className='privacyStatusCol'>
                                                                <button onClick={() => toggleActivityStatus(keyId)}>Change Status</button>
                                                            </div>
                                                            {
                                                                activityStatus[keyId] &&
                                                                <div className="activityChangeInner">
                                                                    <div className="activityWrapper">
                                                                        <div className='activity'></div> <button onClick={() => toggleActivityStatus(keyId)}>Available</button>
                                                                    </div>
                                                                    <div className="activityWrapper">
                                                                        <div className='activity'></div> <button onClick={() => toggleActivityStatus(keyId)}>Available-Live Agent</button>
                                                                    </div>
                                                                    <div className="activityWrapper">
                                                                        <div className='activityStop'></div> <button onClick={() => toggleActivityStatus(keyId)}>Busy</button>
                                                                    </div>
                                                                    <div className="activityWrapper">
                                                                        <div className='activityPause'></div> <button onClick={() => toggleActivityStatus(keyId)}>On Break</button>
                                                                    </div>
                                                                    <div className="activityWrapper">
                                                                        <div className='activityNotActive'></div> <button onClick={() => toggleActivityStatus(keyId)}>Offline</button>
                                                                    </div>
                                                                </div>
                                                            }

                                                        </td>
                                                        <td>
                                                            <div className='privacyStatusCol'>
                                                                <div className='activity'></div> <p>Available</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className='privacyStatusCol'>
                                                                <p>31 min 7 sec</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className='iconsChannel'>
                                                                <button>
                                                                    <BsFillCameraVideoFill />
                                                                </button>
                                                                <button>
                                                                    <BsFillChatDotsFill />
                                                                </button>
                                                                <button>
                                                                    <BsTelephoneFill />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className='privacyStatusCol'>
                                                                <p>3/4</p>
                                                            </div>
                                                        </td>
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
            </BodyComponent>
        </React.Fragment>
    )
}
