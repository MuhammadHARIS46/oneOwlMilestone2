import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { BsCash } from 'react-icons/bs'
import ReactApexChart from 'react-apexcharts';

import { LuUsers } from 'react-icons/lu'
import { BiBarChartSquare } from 'react-icons/bi'
import { FaDollarSign } from 'react-icons/fa'
import BodyComponent from '../../components/bodyComponent';
import StatsBar from '../../components/stats';
import { useContext } from 'react';
import { ThemeContext } from '../../../services/contextFile';

export const Dashboard = () => {

  const LineChart = {
    chart: {
      type: 'line',
      toolbar: {
        show: true,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
        },
        stroke: 1,
      },
    },
    colors: ['#E0712F', '#9A8053', '#71589F'],
    series: [
      {
        name: 'Today',
        data: [0, 2, 4, 5, 6, 7],
        strokeWidth: 1,
      },
      {
        name: 'Yesterday',
        data: [0, 3, 8, 2, 1, 7],
      },
      {
        name: 'Same Day Last Week',
        data: [0, 1, 4, 3, 7, 0],
      },
    ],
    xaxis: {
      categories: ['0', '1', '2', '3', '4', '5'],
    },
    yaxis: {
      axisBorder: {
        show: true,
        color: '#e0e0e0',
        width: 1,
        offsetX: 0,
        offsetY: 0,
      },
    },
  };
  const LineChart1 = {
    chart: {
      type: 'line',
      toolbar: {
        show: true,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
        },
        stroke: 1,
      },
    },
    colors: ['#E0712F', '#9A8053', '#71589F'],
    series: [
      {
        name: 'Facebook',
        data: [0, 2, 4, 5, 6, 6],
        strokeWidth: 1,
      },
      {
        name: 'Live Chat',
        data: [0, 3, 7, 2, 3, 6],
      },
      {
        name: 'SMS',
        data: [0, 1, 4, 3, 7, 3],
      },
    ],
    xaxis: {
      categories: ['0', '1', '2', '3', '4', '5'],
    },
    yaxis: {
      axisBorder: {
        show: true,
        color: '#e0e0e0',
        width: 1,
        offsetX: 0,
        offsetY: 0,
      },
    },
  };

  const chartOptions = {
    series: [100, 55, 20],
    labels: ['Social Media', 'Voice/SMS', 'Live Chats'],
    chart: {
      type: 'donut',
      toolbar: {
        show: true,
        tools: {
          download: true,
        },
      },
    },
    colors: ['#4050B5', '#FB8C00', '#E53835'],
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

  const darkMode = useContext(ThemeContext)

  return (
    <React.Fragment>
      <BodyComponent>
        <div className="row g-3">
          <StatsBar />
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <div className="card cardMargin darkModeCard">
              <div className="card-body">
                <div className="chart">
                  <div className="chartHeading1">
                    <p>Total Usage</p>
                  </div>
                </div>
              </div>
              <ReactApexChart options={LineChart} series={LineChart.series} type="line" height={350} />
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <div className="card cardMargin">
              <div className="card-body">
                <div className="chart">
                  <div className="chartHeading1">
                    <p>Channel Sentiments</p>
                  </div>
                </div>
              </div>
              <ReactApexChart options={LineChart1} series={LineChart1.series} type="line" height={350} />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 ">
            <div className="card donutChartCard">
              <div className="card-body">
                <div className="chart">
                  <div className="chartHeading1">
                    <p>Traffic by Channels</p>
                  </div>
                </div>
              </div>
              <ReactApexChart options={chartOptions} series={chartOptions.series} type="donut" height={300} />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7 ">
            <div className="row g-3">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <div className="card ">
                  <div className="card-body">
                    <div className="statsRow">
                      <div className="statsColumn statCol">
                        <span>BUDGET</span>
                        <h6>
                          $24k
                        </h6>

                      </div>
                      <div className="statsColumn">
                        <div className="columnIcon redBackground">
                          <BsCash />
                        </div>
                      </div>
                    </div>
                    <p className='redArrow'>
                      <AiOutlineArrowDown />  12% <span>Since Last month</span>
                    </p>

                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <div className="card">
                  <div className="card-body">
                    <div className="statsRow">
                      <div className="statsColumn statCol">
                        <span>TOTAL CUSTOMERS</span>
                        <h6>
                          $1,6k
                        </h6>
                      </div>
                      <div className="statsColumn">
                        <div className="columnIcon greenBackground">
                          <LuUsers />
                        </div>
                      </div>
                    </div>
                    <p className='greenArrow'>
                      <AiOutlineArrowUp />  16% <span>Since Last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-3 py-3">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <div className="card">
                  <div className="card-body">
                    <div className="statsRow">
                      <div className="statsColumn statCol">
                        <span>TASKS PROGRESS</span>
                        <h6>
                          75.5%
                        </h6>
                      </div>
                      <div className="statsColumn">
                        <div className="columnIcon yellowBackground">
                          <BiBarChartSquare />
                        </div>
                      </div>
                    </div>
                    <progress className='purpleBar' value="32" max="100" />

                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <div className="card">
                  <div className="card-body">
                    <div className="statsRow ">
                      <div className="statsColumn statCol">
                        <span>Total Profile</span>
                        <h6>
                          $24k
                        </h6>
                      </div>
                      <div className="statsColumn">
                        <div className="columnIcon purpleBackground">
                          <FaDollarSign />
                        </div>
                      </div>
                    </div>
                    <progress className='purpleBarProf' value="32" max="100" />

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
