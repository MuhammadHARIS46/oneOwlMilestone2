import React from 'react'
import BodyComponent from '../../components/bodyComponent'
import { BsFacebook, BsFillCameraVideoFill, BsFillChatDotsFill, BsFillMicFill, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import MessagingImg from '../../../assets/images/Messaging.svg'
import CheckmarkImg from '../../../assets/images/Checkmark.svg'
import UserImg from '../../../assets/images/User.svg'
import InboxImg from '../../../assets/images/Inbox.svg'
// import {WorkflowApi} from "../../../services/agentApis/Workflow"
export const Workflow = () => {
    // const { getSchedule } = WorkflowApi()
        // const [schedule,setSchedule] = useState([])
    // const getUserSchedule = async()=>{
    //     try {
    //         const response = await getSchedule();
    //         setSchedule(response?.data?.data);
    //       } catch (err) {
    //         console.log("error", err);
    //       }
    // }
    // useEffect(() => {
    //     getUserSchedule()
    // }, [])
     return (
        <React.Fragment>
            <BodyComponent>
                <div className="row g-3 AgentApp">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                        <div className="cardWorkflowSpace">
                            <div className="chartHeading2">
                                <p className='chartHeading2InnerFifth'>Schedule your Daily Task</p>
                            </div>

                            <div className="checkBoxSlider">
                                <p>Set Reminder</p>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className="communicationTable BillingTable workflowTable">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Channel</th>
                                            <th>Status</th>
                                            <th>Day</th>
                                            <th>Time</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="billingBodyRow">

                                                    <div className="billingIconTable">
                                                        <BsFillChatDotsFill />
                                                    </div>
                                                    <div className="billingColTable">
                                                        <p>
                                                            Live Chat
                                                        </p>
                                                        <small>
                                                            12-July- 2023 09:00pm
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <select >
                                                    <option value=""> open</option>
                                                    <option value=""> close</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select >
                                                    <option value="">Select your Day</option>
                                                    <option value=""> Monday</option>
                                                    <option value=""> Tuesday</option>
                                                    <option value=""> Wednesday</option>
                                                    <option value=""> Thursday</option>
                                                </select>

                                            </td>
                                            <td>
                                                <select >
                                                    <option value="">Select your Time</option>
                                                    <option value=""> 9:00 AM</option>
                                                    <option value=""> 10:00 AM</option>
                                                    <option value=""> 11:00 AM</option>
                                                    <option value=""> 12:00 AM</option>
                                                </select>
                                            </td>
                                            <td>
                                                <button className='workFlowButtonTheme'> Save the Changes</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="billingBodyRow">

                                                    <div className="billingIconTable">
                                                        <BsFillCameraVideoFill />
                                                    </div>
                                                    <div className="billingColTable">
                                                        <p>
                                                            Live Chat
                                                        </p>
                                                        <small>
                                                            12-July- 2023 09:00pm
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <select >
                                                    <option value=""> open</option>
                                                    <option value=""> close</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select >
                                                    <option value="">Select your Day</option>
                                                    <option value=""> Monday</option>
                                                    <option value=""> Tuesday</option>
                                                    <option value=""> Wednesday</option>
                                                    <option value=""> Thursday</option>
                                                </select>

                                            </td>
                                            <td>
                                                <select >
                                                    <option value="">Select your Time</option>
                                                    <option value=""> 9:00 AM</option>
                                                    <option value=""> 10:00 AM</option>
                                                    <option value=""> 11:00 AM</option>
                                                    <option value=""> 12:00 AM</option>
                                                </select>
                                            </td>
                                            <td>
                                                <button className='workFlowButtonTheme'> Save the Changes</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="billingBodyRow">

                                                    <div className="billingIconTable">
                                                        <BsFillMicFill />
                                                    </div>
                                                    <div className="billingColTable">
                                                        <p>
                                                            Live Chat
                                                        </p>
                                                        <small>
                                                            12-July- 2023 09:00pm
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <select >
                                                    <option value=""> open</option>
                                                    <option value=""> close</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select >
                                                    <option value="">Select your Day</option>
                                                    <option value=""> Monday</option>
                                                    <option value=""> Tuesday</option>
                                                    <option value=""> Wednesday</option>
                                                    <option value=""> Thursday</option>
                                                </select>

                                            </td>
                                            <td>
                                                <select >
                                                    <option value="">Select your Time</option>
                                                    <option value=""> 9:00 AM</option>
                                                    <option value=""> 10:00 AM</option>
                                                    <option value=""> 11:00 AM</option>
                                                    <option value=""> 12:00 AM</option>
                                                </select>
                                            </td>
                                            <td>
                                                <button className='workFlowButtonTheme'> Save the Changes</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="billingBodyRow">

                                                    <div className="billingIconTable">
                                                        <BsWhatsapp />
                                                    </div>
                                                    <div className="billingColTable">
                                                        <p>
                                                            Live Chat
                                                        </p>
                                                        <small>
                                                            12-July- 2023 09:00pm
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <select >
                                                    <option value=""> open</option>
                                                    <option value=""> close</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select >
                                                    <option value="">Select your Day</option>
                                                    <option value=""> Monday</option>
                                                    <option value=""> Tuesday</option>
                                                    <option value=""> Wednesday</option>
                                                    <option value=""> Thursday</option>
                                                </select>

                                            </td>
                                            <td>
                                                <select >
                                                    <option value="">Select your Time</option>
                                                    <option value=""> 9:00 AM</option>
                                                    <option value=""> 10:00 AM</option>
                                                    <option value=""> 11:00 AM</option>
                                                    <option value=""> 12:00 AM</option>
                                                </select>
                                            </td>
                                            <td>
                                                <button className='workFlowButtonTheme'> Save the Changes</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="billingBodyRow">

                                                    <div className="billingIconTable">
                                                        <BsFacebook />
                                                    </div>
                                                    <div className="billingColTable">
                                                        <p>
                                                            Live Chat
                                                        </p>
                                                        <small>
                                                            12-July- 2023 09:00pm
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <select >
                                                    <option value=""> open</option>
                                                    <option value=""> close</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select >
                                                    <option value="">Select your Day</option>
                                                    <option value=""> Monday</option>
                                                    <option value=""> Tuesday</option>
                                                    <option value=""> Wednesday</option>
                                                    <option value=""> Thursday</option>
                                                </select>

                                            </td>
                                            <td>
                                                <select >
                                                    <option value="">Select your Time</option>
                                                    <option value=""> 9:00 AM</option>
                                                    <option value=""> 10:00 AM</option>
                                                    <option value=""> 11:00 AM</option>
                                                    <option value=""> 12:00 AM</option>
                                                </select>
                                            </td>
                                            <td>
                                                <button className='workFlowButtonTheme'> Save the Changes</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="billingBodyRow">

                                                    <div className="billingIconTable">
                                                        <BsTwitter />
                                                    </div>
                                                    <div className="billingColTable">
                                                        <p>
                                                            Live Chat
                                                        </p>
                                                        <small>
                                                            12-July- 2023 09:00pm
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <select >
                                                    <option value=""> open</option>
                                                    <option value=""> close</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select >
                                                    <option value="">Select your Day</option>
                                                    <option value=""> Monday</option>
                                                    <option value=""> Tuesday</option>
                                                    <option value=""> Wednesday</option>
                                                    <option value=""> Thursday</option>
                                                </select>

                                            </td>
                                            <td>
                                                <select >
                                                    <option value="">Select your Time</option>
                                                    <option value=""> 9:00 AM</option>
                                                    <option value=""> 10:00 AM</option>
                                                    <option value=""> 11:00 AM</option>
                                                    <option value=""> 12:00 AM</option>
                                                </select>
                                            </td>
                                            <td>
                                                <button className='workFlowButtonTheme'> Save the Changes</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="card">
                            <div className="card-body">
                                <div className="workflowStats">
                                    <img src={InboxImg} />
                                    <div className="textStats">
                                        <p className='firstPara'>Unassigned</p>
                                        <p className='valuePara'>350</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="card">
                            <div className="card-body">
                                <div className="workflowStats">
                                    <img src={UserImg} />
                                    <div className="textStats">
                                        <p className='firstPara'>Assigned</p>
                                        <p className='valuePara'>350</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="card">
                            <div className="card-body">
                                <div className="workflowStats">
                                    <img src={CheckmarkImg} />
                                    <div className="textStats">
                                        <p className='firstPara'>Closed</p>
                                        <p className='valuePara'>350</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="card">
                            <div className="card-body">
                                <div className="workflowStats">
                                    <img src={MessagingImg} />
                                    <div className="textStats">
                                        <p className='firstPara'>Channels</p>
                                        <p className='valuePara'>350</p>
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
