import React from 'react'
import BodyComponent from '../../components/bodyComponent'
import ReactApexChart from 'react-apexcharts';
import profileImg from '../../../assets/images/guy.png'
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

export const Channel = () => {

    const [currentPage, setCurrentPage] = useState(0); // Current page state
    const perPage = 6; // Number of items per page
    // const data = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`); // Sample data array
    const [data, setData] = useState([
        { id: 1, username: "50", channel: ' Live Chat' },
        { id: 2, username: "50", channel: 'Facebook' },
        { id: 3, username: "50", channel: 'Whatsapp' },
        { id: 4, username: "50", channel: 'Twitter' },
        { id: 5, username: "50", channel: 'Video Call' },
        { id: 6, username: "50", channel: 'Voice Call' },
    ])



    // Function to handle page change
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    // Calculate the starting and ending indices for the current page
    const startIndex = currentPage * perPage;
    const endIndex = startIndex + perPage;

    // Slice the data array to display only the items for the current page
    const displayedItems = data.slice(startIndex, endIndex);

    const [isEditArray, setIsEditArray] = useState(new Array(data.length).fill(false));
    const toggleIsEdit = (index) => {
        const newIsEditArray = [...isEditArray];
        newIsEditArray[index] = !newIsEditArray[index];
        setIsEditArray(newIsEditArray);
    };

    const handleDelete = (id) => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
    };

    const chartOptions = {
        series: [100, 55, 20, 20],
        labels: ['Facebook', 'Twitter', 'Whatsapp', 'Voice Call', 'Live Chat'],
        chart: {
            type: 'donut',
            toolbar: {
                show: true,
                tools: {
                    download: true,
                },
            },
        },
        colors: ['#27AAE1', '#1C75BC', '#2BB673', '#E0712F', '#FFF200'],
        legend: {
            position: 'bottom'
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                },
            },
        ],
    };
    return (

        <React.Fragment>
            <BodyComponent>
                <div className="row g-3">
                    <div className="col-md-12 col-lg-6 col-xl-6 ">
                        <div className="card">
                            <div className="card-body">
                                <div className="chartHeading3">
                                    <p>Traffic by Channels</p>
                                </div>
                                <div className='adminDashboardChart'>
                                    <ReactApexChart options={chartOptions} series={chartOptions.series} type="donut" height={330} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-6 ">
                        <div className="mainContactActivities">
                            <div className="contactActivityMain">
                                <div className="chartHeading3">
                                    <p>Contacts</p>
                                </div>
                                <div className="contactContainer">
                                    <img src={profileImg} alt="" />
                                    <span>Natali Craig</span>
                                </div>
                                <div className="contactContainer">
                                    <img src={profileImg} alt="" />
                                    <span>Natali Craig</span>
                                </div>
                                <div className="contactContainer">
                                    <img src={profileImg} alt="" />
                                    <span>Natali Craig</span>
                                </div>
                                <div className="contactContainer">
                                    <img src={profileImg} alt="" />
                                    <span>Natali Craig</span>
                                </div>
                                <div className="contactContainer">
                                    <img src={profileImg} alt="" />
                                    <span>Natali Craig</span>
                                </div>
                            </div>
                            <div className="contactActivityMain">
                                <div className="chartHeading3">
                                    <p>Activities</p>
                                </div>
                                <div className="activityContainer">
                                    <img src={profileImg} alt="" />
                                    <div className="activityInfo">
                                        <p>Edited the details of Project X</p>
                                        <small>Just now</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-6">
                        <div className="communicationTable privacyTable">
                            <div className="table-responsive privacyPagination">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Channels</th>
                                            <th>Customer</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            displayedItems.map((item, keyId) => (
                                                <tr key={keyId}>

                                                    <td>
                                                        <div className="privacyAgentCol">
                                                            <p>
                                                                {item.channel}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="privacyAgentCol">
                                                            <p>
                                                                {item.username}
                                                            </p>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className='actionButtons'>
                                                            <button className='green' >
                                                                Edit
                                                            </button>
                                                            <button className='delete' onClick={() => { handleDelete(item.id) }}>
                                                                Delete
                                                            </button>
                                                            <button className='editUser' >
                                                                Edit User
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>

                                </table>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-6">
                        <div className="communicationTable privacyTable">
                            <div className="table-responsive privacyPagination">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Channels</th>
                                            <th>Agent</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            displayedItems.map((item, keyId) => (
                                                <tr key={keyId}>

                                                    <td>
                                                        <div className="privacyAgentCol">
                                                            <p>
                                                                {item.channel}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="privacyAgentCol">
                                                            <p>
                                                                {item.username}
                                                            </p>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className='actionButtons'>
                                                            <button className='green' >
                                                                Edit
                                                            </button>
                                                            <button className='delete' onClick={() => { handleDelete(item.id) }}>
                                                                Delete
                                                            </button>
                                                            <button className='editUser' >
                                                                Edit User
                                                            </button>
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
            </BodyComponent>
        </React.Fragment>
    )
}
