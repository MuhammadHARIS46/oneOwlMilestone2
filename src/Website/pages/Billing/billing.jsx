import React, { useState } from 'react'
import BodyComponent from '../../components/bodyComponent';
import billing1 from '../../../assets/images/billing4.png'
import billing2 from '../../../assets/images/billing2.png'
import billing3 from '../../../assets/images/billing3.png'
import billing4 from '../../../assets/images/billing1.png'
import { BsFillChatDotsFill, BsFillCameraVideoFill, BsFillMicFill, BsWhatsapp, BsFacebook, BsTwitter } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai';

const Billing = () => {
    const [confirmModalState, setConfirmModalState] = useState(false);

    const closeConfirmModal = () => {
        setConfirmModalState(false)
    }
    const openConfirmModal = () => {
        setConfirmModalState(true)
    }

    return (
        <React.Fragment>
            <BodyComponent>
                <div className="row g-3">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="billingChart">
                                    <img src={billing1} alt="" />
                                    <div className='billingChartInner'>
                                        <p>75</p>
                                        <span>Total Orders</span>
                                        <small>(30 Days)</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="billingChart">
                                    <img src={billing2} alt="" />
                                    <div className='billingChartInner'>
                                        <p>357</p>
                                        <span>Total Transactions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="billingChart">
                                    <img src={billing3} alt="" />
                                    <div className='billingChartInner'>
                                        <p>75</p>
                                        <span>Total Cancelled</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="billingChart">
                                    <img src={billing4} alt="" />
                                    <div className='billingChartInner'>
                                        <p>$128</p>
                                        <span>Total Revenue</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 ">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="billingTableHeading">
                                    <p>
                                        Summary of Total Placed Orders
                                    </p>
                                    <div className="billingBtnGroup">
                                        <div className="billBtnGr">
                                            <input type="radio" defaultChecked id="todayFilter" name="tableDaysFilter" />
                                            <label htmlFor="todayFilter">Today</label>
                                        </div>
                                        <div className="billBtnGr">
                                            <input type="radio" id="yesterdayFilter" name="tableDaysFilter" />
                                            <label htmlFor="yesterdayFilter">Yesterday</label>
                                        </div>
                                        {/* <button className='whiteButton'>Today</button>
                                        <button className='whiteButton'>Yesterday</button> */}
                                    </div>
                                </div>
                                <div className="communicationTable BillingTable">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Channel</th>
                                                    <th>Agents</th>
                                                    <th>Transaction</th>
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
                                                    <td>Agent Name</td>
                                                    <td>
                                                        <strong>
                                                            $43
                                                        </strong>

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
                                                    <td>Agent Name</td>
                                                    <td>
                                                        <strong>
                                                            $43
                                                        </strong>

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
                                                    <td>Agent Name</td>
                                                    <td>
                                                        <strong>
                                                            $43
                                                        </strong>

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
                                                    <td>Agent Name</td>
                                                    <td>
                                                        <strong>
                                                            $43
                                                        </strong>

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
                                                    <td>Agent Name</td>
                                                    <td>
                                                        <strong>
                                                            $43
                                                        </strong>

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
                                                    <td>Agent Name</td>
                                                    <td>
                                                        <strong>
                                                            $43
                                                        </strong>

                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 ">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="billingMain">
                                    <h6>Place Your Order</h6>
                                    <div className="row g-4">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 ">
                                            <h6>
                                                Select your Agent you want to talk with
                                            </h6>
                                            <div className="billingMainInner">

                                                <input className='billingMainSearch' type="text" placeholder='Search' name="" id="" />
                                                <div className="checkBoxesBilling">
                                                    <div className="checkboxBill">
                                                        <input type="checkbox" id='liveChatIdBilling' />
                                                        <label htmlFor="liveChatIdBilling">Live Chat</label>
                                                    </div>
                                                    <div className="checkboxBill">
                                                        <input type="checkbox" id='videoCallIdBilling' />
                                                        <label htmlFor="videoCallIdBilling">Video Call</label>
                                                    </div>
                                                    <div className="checkboxBill">
                                                        <input type="checkbox" id='voiceCallIdBilling' />
                                                        <label htmlFor="voiceCallIdBilling">Voice Call</label>
                                                    </div>
                                                    <div className="checkboxBill">
                                                        <input type="checkbox" id='facebookIdBilling' />
                                                        <label htmlFor="facebookIdBilling">Facebook</label>
                                                    </div>
                                                    <div className="checkboxBill">
                                                        <input type="checkbox" id='whatsappIdBilling' />
                                                        <label htmlFor="whatsappIdBilling">Whatsapp</label>
                                                    </div>
                                                    <div className="checkboxBill" >
                                                        <input type="checkbox" id='twitterIdBilling' />
                                                        <label htmlFor="twitterIdBilling">Twitter</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="billinBtnGroupOtr">
                                                <div className="billinBtnGroup">
                                                    <div className="billBtnGr">
                                                        <input type="radio" id="monthlySubscribe" defaultChecked name="subscriptionPlan" />
                                                        <label htmlFor="monthlySubscribe">Monthly</label>
                                                    </div>
                                                    <div className="billBtnGr">
                                                        <input type="radio" id="ServiceSubscribe" name="subscriptionPlan" />
                                                        <label htmlFor="ServiceSubscribe">Per Service</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
                                            <div className="billingTotal">
                                                <div className="topBilling">
                                                    <div className="totalPara">
                                                        <p>Total Transaction</p>
                                                        <small>For Monthly</small>
                                                    </div>
                                                    <h5>$45</h5>
                                                </div>
                                                <div className="bottomBilling">
                                                    <button onClick={openConfirmModal}>
                                                        Place Your Order
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    confirmModalState &&

                    <dialog id='modalConfirm' className='modalLogout' open>
                        <div className="modalLogoutMain">
                            <button className='modalLogoutButton' onClick={closeConfirmModal}>
                                <AiOutlineClose />
                            </button>
                            <p>Confirm Order?</p>
                            <div className="logoutButtons">
                                <button className='yesButton' onClick={ closeConfirmModal}>Yes</button>
                                <button className='NoButton' onClick={closeConfirmModal}>No</button>
                            </div>
                        </div>

                    </dialog>
                }
            </BodyComponent>

        </React.Fragment>
    )
}

export default Billing