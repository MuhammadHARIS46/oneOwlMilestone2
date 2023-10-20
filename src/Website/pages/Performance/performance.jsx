/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react'
import BodyComponent from '../../components/bodyComponent'
import AgentImg from '../../../assets/images/guy.png'
import ReactApexChart from 'react-apexcharts';
import { BsFillChatDotsFill, BsFillMicFill, BsThreeDotsVertical } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import starImg from '../../../assets/images/plusSign.svg'
import { AiFillStar } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { PerformanceApi } from '../../../services/agentApis/Performance';
export const Performance = () => {
    const { getReview } = PerformanceApi()

    const [review,setReview] = useState([])
    const getReviews = async()=>{
        try {
            const response = await getReview();
            setReview(response?.data?.data);
            console.log(response.data.data)
          } catch (err) {
            console.log("error", err);
          }
    }
    useEffect(() => {
        getReviews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const barChart = {
        series: [{
            name: 'Today',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 32, 53, 64, 74, 42, 12]
        }],
        chart: {
            type: 'bar',
            height: 350
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'],
        },
        yaxis: {
            show: false
        },
        fill: {
            opacity: 1,
            colors: ['#E6E8EC']
        },
        theme: {
            palette: 'custom',
            monochrome: {
                enabled: true,
                color: '#0B2360'
            },
        },
    };
    const barChart1 = {
        series: [{
            name: 'Today',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 32, 53, 64, 74]
        }],
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
                roundedBars: true,
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        },
        yaxis: {
            show: true
        },
        fill: {
            opacity: 1,
            colors: ['#0B2360']
        },
        theme: {
            palette: 'custom',
            monochrome: {
                enabled: true,
                color: '#0B2360'
            },
        },
    };
    const options = {
        series: [
            {
                name: 'Series 1',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 32, 53, 64, 74]
            },
        ],
        chart: {
            id: 'gradient-line',
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 7,
        },
        xaxis: {
            categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        },
        colors: ['#0B2360'],
        fill: {
            colors: ['#0B2360'],
            type: 'gradient',
            gradient: {
                shadeIntensity: 0,
                opacityFrom: 0.4,
                opacityTo: 0.9,
                stops: [0, 90, 100],
            },
        },
    };




    const [currentPage, setCurrentPage] = useState(0); // Current page state
    const perPage = 6; // Number of items per page
    const data = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`);
    // Sample data array
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
        // setData(updatedData);
    };

    return (
        <React.Fragment>

            <BodyComponent>
                <div className="row g-3 AgentApp">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                        <div className="card cardMargin">
                            <div className="card-body performanceCard">
                                <div className="cardSpaceBetween">

                                    <div className="chartHeading2">
                                        <p className='chartHeading2InnerFourth'>Total Visits</p>
                                        <p className='chartHeading2InnerThird'> 01 - 25 March, 2020</p>
                                    </div>
                                    <div className="overlappingUser">
                                        <img className='img1' src={AgentImg} alt="" />
                                        <img className='img2' src={AgentImg} alt="" />
                                        <img className='img3' src={AgentImg} alt="" />
                                        <img className='img4' src={AgentImg} alt="" />
                                    </div>
                                </div>
                                <ReactApexChart options={barChart} series={barChart.series} type="bar" height={150} />
                                <div className="cardSpaceBetween">
                                    <div className="chartHeading2">
                                        <p className='chartHeading2InnerSecond'>Total Visits</p>
                                    </div>
                                </div>
                                <div className="performanceTotalVisits">
                                    <div className="performanceSingleVisit">
                                        <div className="leftSide">
                                            <BsFillChatDotsFill />
                                            <div className='leftSidePara'>
                                                <p>Live Chat</p>
                                                <p className='leftSideLast'>5:12 pm  •  Location</p>
                                            </div>
                                        </div>
                                        <div className="rightSide">
                                            <div className="overlappingUser">
                                                <img className='img1' src={AgentImg} alt="" />
                                                <img className='img2' src={AgentImg} alt="" />
                                                <img className='img3' src={AgentImg} alt="" />
                                                <img className='img4' src={AgentImg} alt="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="performanceSingleVisit">
                                        <div className="leftSide">
                                            <FaVideo />
                                            <div className='leftSidePara'>
                                                <p>Live Chat</p>
                                                <p className='leftSideLast'>5:12 pm  •  Location</p>
                                            </div>
                                        </div>
                                        <div className="rightSide">
                                            <div className="overlappingUser">
                                                <img className='img1' src={AgentImg} alt="" />
                                                <img className='img2' src={AgentImg} alt="" />
                                                <img className='img3' src={AgentImg} alt="" />
                                                <img className='img4' src={AgentImg} alt="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="performanceSingleVisit">
                                        <div className="leftSide">
                                            <BsFillMicFill />
                                            <div className='leftSidePara'>
                                                <p>Live Chat</p>
                                                <p className='leftSideLast'>5:12 pm  •  Location</p>
                                            </div>
                                        </div>
                                        <div className="rightSide">
                                            <div className="overlappingUser">
                                                <img className='img1' src={AgentImg} alt="" />
                                                <img className='img2' src={AgentImg} alt="" />
                                                <img className='img3' src={AgentImg} alt="" />
                                                <img className='img4' src={AgentImg} alt="" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <ReactPaginate
                                    previousLabel={'Previous'}
                                    nextLabel={'Next'}
                                    breakLabel={'...'}
                                    pageCount={Math.ceil(data.length / perPage)}
                                    marginPagesDisplayed={1}
                                    pageRangeDisplayed={3}
                                    onPageChange={handlePageChange}
                                    containerClassName={'pagination'}
                                    activeClassName={'active'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="card cardMargin">
                            <div className="card-body customerReview">
                                <div className="cardSpaceBetween borderBottomMargin">
                                    <div className="LeftSide">
                                        <img src={starImg} alt="" />
                                        <div className="chartHeading2">
                                            <p className='chartHeading2InnerSecond'>Customer Reviews</p>
                                            <p className='chartHeading2InnerThird'>Messages</p>
                                        </div>
                                    </div>
                                    <div className="RightSide">
                                        <button>
                                            <BsThreeDotsVertical />
                                        </button>
                                    </div>
                                </div>
                                <div className="cardSpaceBetween borderBottomMargin">
                                    <div className="left">
                                        <div className='name'>
                                            <span>Sally.D</span> <span>20m ago</span>
                                        </div>
                                        <div>
                                            <AiFillStar /> <span>5/5</span>
                                        </div>
                                    </div>
                                    <p className='bottom'>
                                        It is over qualified and easy to use, thank you.
                                    </p>
                                </div>
                                <div className="cardSpaceBetween borderBottomMargin">
                                    <div className="left">
                                        <div className='name'>
                                            <span>Sally.D</span> <span>20m ago</span>
                                        </div>
                                        <div>
                                            <AiFillStar /> <span>5/5</span>
                                        </div>
                                    </div>
                                    <p className='bottom'>
                                        It is over qualified and easy to use, thank you.
                                    </p>
                                </div>
                                <div className="cardSpaceBetween borderBottomMargin">
                                    <div className="left">
                                        <div className='name'>
                                            <span>Sally.D</span> <span>20m ago</span>
                                        </div>
                                        <div>
                                            <AiFillStar /> <span>5/5</span>
                                        </div>
                                    </div>
                                    <p className='bottom'>
                                        It is over qualified and easy to use, thank you.
                                    </p>
                                </div>
                                <div className="cardSpaceBetween seeAllButtonDiv">

                                    <button className='seeAllButton'>
                                        SEE ALL REVIEWS <span><MdKeyboardArrowRight /></span>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="cardSpaceBetween">
                                    <div className="chartHeading2">
                                        <p className='chartHeading2InnerSecond'>Overall User Acquisition</p>
                                    </div>
                                    <select className='customerReviewSelect' name="" id="">
                                        <option value="">Today</option>
                                        <option value="">Yesterday</option>
                                    </select>
                                </div>
                                <ReactApexChart options={barChart1} series={barChart1.series} type="bar" height={300} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="cardSpaceBetween">
                                    <div className="chartHeading2">
                                        <p className='chartHeading2InnerSecond'>Overall User Acquisition</p>
                                    </div>
                                    <select className='customerReviewSelect' name="" id="">
                                        <option value="">Today</option>
                                        <option value="">Yesterday</option>
                                    </select>
                                </div>
                                <ReactApexChart options={options} series={options.series} type="line" height={300} />
                            </div>
                        </div>
                    </div>
                </div>

            </BodyComponent>
        </React.Fragment >
    )
}
