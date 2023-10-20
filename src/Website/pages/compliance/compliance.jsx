/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import BodyComponent from '../../components/bodyComponent'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import ReactApexChart from 'react-apexcharts';
// import { BsThreeDotsVertical } from 'react-icons/bs';
// import { AiFillStar } from 'react-icons/ai';
// MdKeyboardArrowRight bottom
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import agentImg from '../../../assets/images/guy.png'
import {ComplianceApi} from "../../../services/agentApis/Compliance"

export const Compliance = () => {

    const { getConversationAnalytics, getUserAgentConvo } = ComplianceApi()

    const [analytics,setAnalytics] = useState([])
    const [convo,setConvo] = useState([])
    const getConvoAnalytics = async()=>{
        try{
            const response = await getConversationAnalytics();
            setAnalytics(response?.data?.data)
          }
          catch(err){
            console.log("error",err)
          }
    }
    const getConvo = async()=>{
        try{
            const response = await getUserAgentConvo();
            setConvo(response?.data?.data)
          }
          catch(err){
            console.log("error",err)
          }
    }

    useEffect(() => {
        getConvoAnalytics()
        getConvo()
    }, []);

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
    const LineChart = {
        chart: {
            id: 'spark1',
            group: 'sparks',
            type: 'area',
            //   height: 40,
            sparkline: {
                enabled: true
            },
            //   dropShadow: {
            //     enabled: true,
            //     top: 1,
            //     left: 1,
            //     blur: 2,
            //     opacity: 0.5,
            //   },
            toolbar: {
                show: false, // Hide the toolbar
            },
        },
        series: [{
            data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
        }],
        stroke: {
            curve: 'smooth',
            width: 1
        },
        markers: {
            size: 0
        },
        grid: {
            show: false, // Hide the grid lines
        },
        xaxis: {
            show: false, // Hide the x-axis
        },
        yaxis: {
            show: false, // Hide the y-axis
        },
        colors: ['#0b2360'],
        tooltip: {
            x: {
                show: false
            },
        }
    };
    return (
        <React.Fragment>
            <BodyComponent>
                <div className="row g-3 AgentApp">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="SortingContainer">
                                    <span>Timeframe:</span>
                                    <div className="customSelectCompliance">
                                        <select className='complianceSelect'>
                                            <option value="">All-time</option>
                                            <option value="">Single-time</option>
                                        </select>
                                        <span className='carretArrowSelect'>
                                            <BiSolidDownArrow />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="SortingContainer">
                                    <span>People:</span>
                                    <div className="customSelectCompliance">
                                        <select className='complianceSelect'>
                                            <option value="">All</option>
                                            <option value="">Single</option>
                                        </select>
                                        <span className='carretArrowSelect'>
                                            <BiSolidDownArrow />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
                        <div className="card cardMargin">
                            <div className="card-body">
                                <div className="SortingContainer">
                                    <span>Topic:</span>
                                    <div className="customSelectCompliance">
                                        <select className='complianceSelect'>
                                            <option value="">All</option>
                                            <option value="">Single</option>
                                        </select>
                                        <span className='carretArrowSelect'>
                                            <BiSolidDownArrow />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="row g-3">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card">
                                    <div className="card-body">

                                        <div className="containerGraphCompliance">
                                            <div className="chartHeading2">
                                                <p className='chartHeading2InnerFirst'>Total Customer</p>
                                            </div>
                                            <div className="percentage">
                                                60%
                                            </div>
                                            <ReactApexChart options={LineChart} series={LineChart.series} type="area" height={30} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card">
                                    <div className="card-body">

                                        <div className="containerGraphCompliance">
                                            <div className="chartHeading2">
                                                <p className='chartHeading2InnerFirst'>Engage Customer</p>
                                            </div>
                                            <div className="percentage">
                                                86%
                                            </div>
                                            <ReactApexChart options={LineChart} series={LineChart.series} type="area" height={30} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card">
                                    <div className="card-body">

                                        <div className="containerGraphCompliance">
                                            <div className="chartHeading2">
                                                <p className='chartHeading2InnerFirst'>Rejected</p>
                                            </div>
                                            <div className="percentage">
                                                30%
                                            </div>
                                            <ReactApexChart options={LineChart} series={LineChart.series} type="area" height={30} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
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

                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card">
                                    <div className="card-body">

                                        <div className="containerGraphCompliance">
                                            <div className="chartHeading2">
                                                <p className='chartHeading2InnerFirst'>Active Customers</p>
                                            </div>
                                            <div className="percentage">
                                                60%
                                            </div>
                                            <ReactApexChart options={LineChart} series={LineChart.series} type="area" height={30} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card">
                                    <div className="card-body">

                                        <div className="containerGraphCompliance">
                                            <div className="chartHeading2">
                                                <p className='chartHeading2InnerFirst'>Avg Session lengths</p>
                                            </div>
                                            <div className="percentage">
                                                86%
                                            </div>
                                            <ReactApexChart options={LineChart} series={LineChart.series} type="area" height={30} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="card">
                                    <div className="card-body">

                                        <div className="containerGraphCompliance">
                                            <div className="chartHeading2">
                                                <p className='chartHeading2InnerFirst'>Avg Handle time</p>
                                            </div>
                                            <div className="percentage">
                                                30%
                                            </div>
                                            <ReactApexChart options={LineChart} series={LineChart.series} type="area" height={30} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="card ">
                            <div className="card-body  complianceeReview">
                                <div className="chartHeading2 complianceHeading">
                                    <p className='chartHeading2InnerFirst'>Customers</p>
                                </div>
                                <div className="cardSpaceBetween">
                                    <div className="LeftSide">
                                        <img src={agentImg} alt="" />
                                        <div className="chartHeading2">
                                            <p className='chartHeading2InnerSecond'>Jesse Thomas</p>
                                            <p className='chartHeading2InnerThird'>637 Points - 98% Correct</p>
                                        </div>
                                    </div>
                                    <div className="RightSide">
                                        1
                                        <BiSolidDownArrow className='carrotGreen' />
                                    </div>
                                </div>
                                <div className="cardSpaceBetween ">
                                    <div className="LeftSide">
                                        <img src={agentImg} alt="" />
                                        <div className="chartHeading2">
                                            <p className='chartHeading2InnerSecond'>Jesse Thomas</p>
                                            <p className='chartHeading2InnerThird'>637 Points - 98% Correct</p>
                                        </div>
                                    </div>
                                    <div className="RightSide">
                                        1
                                        <BiSolidUpArrow className='carrotRed' />
                                    </div>
                                </div>
                                <div className="cardSpaceBetween ">
                                    <div className="LeftSide">
                                        <img src={agentImg} alt="" />
                                        <div className="chartHeading2">
                                            <p className='chartHeading2InnerSecond'>Jesse Thomas</p>
                                            <p className='chartHeading2InnerThird'>637 Points - 98% Correct</p>
                                        </div>
                                    </div>
                                    <div className="RightSide">
                                        1
                                        <BiSolidUpArrow className='carrotRed' />
                                    </div>
                                </div>
                                <div className="cardSpaceBetween ">
                                    <div className="LeftSide">
                                        <img src={agentImg} alt="" />
                                        <div className="chartHeading2">
                                            <p className='chartHeading2InnerSecond'>Jesse Thomas</p>
                                            <p className='chartHeading2InnerThird'>637 Points - 98% Correct</p>
                                        </div>
                                    </div>
                                    <div className="RightSide">
                                        1
                                        <BiSolidUpArrow className='carrotRed' />
                                    </div>
                                </div>
                                <div className="cardSpaceBetween ">
                                    <div className="LeftSide">
                                        <img src={agentImg} alt="" />
                                        <div className="chartHeading2">
                                            <p className='chartHeading2InnerSecond'>Jesse Thomas</p>
                                            <p className='chartHeading2InnerThird'>637 Points - 98% Correct</p>
                                        </div>
                                    </div>
                                    <div className="RightSide">
                                        1
                                        <BiSolidUpArrow className='carrotRed' />
                                    </div>
                                </div>
                                <div className="cardSpaceBetween ">
                                    <div className="LeftSide">
                                        <img src={agentImg} alt="" />
                                        <div className="chartHeading2">
                                            <p className='chartHeading2InnerSecond'>Jesse Thomas</p>
                                            <p className='chartHeading2InnerThird'>637 Points - 98% Correct</p>
                                        </div>
                                    </div>
                                    <div className="RightSide">
                                        1
                                        <BiSolidUpArrow className='carrotRed' />
                                    </div>
                                </div>
                                <div className="cardSpaceBetween ">
                                    <div className="LeftSide">
                                        <img src={agentImg} alt="" />
                                        <div className="chartHeading2">
                                            <p className='chartHeading2InnerSecond'>Jesse Thomas</p>
                                            <p className='chartHeading2InnerThird'>637 Points - 98% Correct</p>
                                        </div>
                                    </div>
                                    <div className="RightSide">
                                        1
                                        <BiSolidUpArrow className='carrotRed' />
                                    </div>
                                </div>
                                <div className="cardSpaceBetween ">
                                    <div className="LeftSide">
                                        <img src={agentImg} alt="" />
                                        <div className="chartHeading2">
                                            <p className='chartHeading2InnerSecond'>Jesse Thomas</p>
                                            <p className='chartHeading2InnerThird'>637 Points - 98% Correct</p>
                                        </div>
                                    </div>
                                    <div className="RightSide">
                                        1
                                        <BiSolidUpArrow className='carrotRed' />
                                    </div>
                                </div>
                                <div className="cardSpaceBetween ">
                                    <div className="LeftSide">
                                        <img src={agentImg} alt="" />
                                        <div className="chartHeading2">
                                            <p className='chartHeading2InnerSecond'>Jesse Thomas</p>
                                            <p className='chartHeading2InnerThird'>637 Points - 98% Correct</p>
                                        </div>
                                    </div>
                                    <div className="RightSide">
                                        1
                                        <BiSolidUpArrow className='carrotRed' />
                                    </div>
                                </div>
                                <div className="cardSpaceBetween ">
                                    <div className="LeftSide">
                                        <img src={agentImg} alt="" />
                                        <div className="chartHeading2">
                                            <p className='chartHeading2InnerSecond'>Jesse Thomas</p>
                                            <p className='chartHeading2InnerThird'>637 Points - 98% Correct</p>
                                        </div>
                                    </div>
                                    <div className="RightSide">
                                        1
                                        <BiSolidUpArrow className='carrotRed' />
                                    </div>
                                </div>
                                <button className='viewAllButton'>
                                    View All Customers <MdOutlineKeyboardArrowRight/>
                                </button>

                            </div>
                        </div>
                    </div>

                </div>

            </BodyComponent>
        </React.Fragment>
    )
}
