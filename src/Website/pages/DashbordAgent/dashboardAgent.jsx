import React from 'react'
import BodyComponent from '../../components/bodyComponent';
import StatsBar from '../../components/stats';
import ReactApexChart from 'react-apexcharts';
import { useEffect } from 'react';
import { useRef } from 'react';


export const DashboardAgent = () => {


  const options = {
    series: [{
      name: 'Today',
      data: [44, 55, 57, 56, 61, 58, 63, 60]
    }, {
      name: 'Yesterday',
      data: [76, 85, 101, 98, 87, 105, 91, 114]
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
        endingShape: 'rounded'
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['01', '02', '03', '04', '05', '06', '07', '08'],
    },
    yaxis: {
      show: false
    },
    fill: {
      opacity: 1,
      colors: ['#0B2360', '#E6E8EC']
    },
    theme: {
      palette: 'custom',
      monochrome: {
        enabled: true,
        color: '#0B2360'
      },
    },
  };
  const options1 = {
    series: [{
      name: 'Today',
      data: [44, 55, 57, 56]
    },
      // {
      //   name: 'Yesterday',
      //   data: [76, 85, 101, 98, 87, 105, 91, 114]
      // }
    ],
    chart: {
      type: 'bar',
      height: 350
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Customer 1', 'Customer 2', 'Customer 3', 'Customer 4'],
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    yaxis: {
      show: true
    },
    fill: {
      opacity: 1,
      colors: ['#0B2360', '#E6E8EC']
    },
    theme: {
      palette: 'custom',
      monochrome: {
        enabled: true,
        color: '#0B2360'
      },
    },
  };

  const chartOptions = {
    series: [100, 55, 20],
    labels: ['Afternoon', 'Evening', 'Morning'],
    chart: {
      type: 'donut',
      toolbar: {
        show: true,
        tools: {
          download: true,
        },
      },
    },
    colors: ['#0B2360', '#c2f8ff', '#39D2EE'],
    dataLabels: {
      enabled: true
    },
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

  const radialChartOptions1 = {
    series: [70],
    chart: {
      type: 'radialBar',
    },
    colors: ['#f9a644'],
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'SMS',
          },
        },
      },
    },
    labels: ['Progress'],
  };
  const radialChartOptions2 = {
    series: [85],
    chart: {
      type: 'radialBar',
    },
    colors: ['#5361bc'],
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'Facebook',
          },
        },
      },
    },
    labels: ['Progress'],
  };
  const radialChartOptions3 = {
    series: [92],
    chart: {
      type: 'radialBar',
    },
    colors: ['#ea605d'],
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'Live chats',
          },
        },
      },
    },
    labels: ['Progress'],
  };
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
    colors: ['#5A6ACF', '#D8D9DB'],
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



  return (
    <React.Fragment>
      <BodyComponent>
        <div className="row g-3 AgentApp">
          <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7 ">
            <div className="card cardMargin">
              <div className="card-body">
                <div className="chart">
                  <div className="chartHeading2">
                    <p className='chartHeading2InnerFirst'>Revenue</p>
                    <p className='chartHeading2InnerSecond'> IDR 7.852.000</p>
                  </div>

                </div>
              </div>
              <ReactApexChart options={options} series={options.series} type="bar" height={300} />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 ">
            <div className="card cardMargin">
              <div className="card-body">
                <div className="chart">
                  <div className="chartHeading2">
                    <p className='chartHeading2InnerFirst'>Order Time</p>
                    <p className='chartHeading2InnerThird'> From 1-6 Dec, 2020</p>
                  </div>

                </div>
              </div>
              <ReactApexChart options={chartOptions} series={chartOptions.series} type="donut" height={359} />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 ">
            <div className="card cardMargin">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                  <div className="card-body">
                    <div className="chart">
                      <div className="chartHeading2">
                        <p className='chartHeading2InnerFirst'>Your Rating</p>
                        <p className='chartHeading2InnerThird'>Agent work by different channels</p>
                      </div>

                    </div>
                  </div>
                  <div className="radialChartrelative">
                    <div className="radialChartAbsolute radial1">
                      <ReactApexChart options={radialChartOptions1} series={radialChartOptions1.series} type="radialBar" height={270} />

                    </div>
                    <div className="radialChartAbsolute radial2">
                      <ReactApexChart options={radialChartOptions2} series={radialChartOptions2.series} type="radialBar" height={210} />
                    </div>
                    <div className="radialChartAbsolute radial3">
                      <ReactApexChart options={radialChartOptions3} series={radialChartOptions3.series} type="radialBar" height={180} />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                  <div className="card-body">
                    <div className="chart">
                      <div className="chartHeading2">
                        <p className='chartHeading2InnerFirst'>Average Response Time by Agent</p>
                        {/* <p className='chartHeading2InnerThird'>Agent work by different channels</p> */}
                      </div>

                    </div>
                  </div>
                  <div className="">
                    <div className=" ">
                      <ReactApexChart options={options1} series={options1.series} type="bar" width={300} height={300} />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5 ">
          <div className="card cardMargin">
              <div className="card-body">
                <div className="chart">
                  <div className="chartHeading2">
                    <p className='chartHeading2InnerFirst'>Order Time</p>
                    <p className='chartHeading2InnerThird'> From 1-6 Dec, 2020</p>
                  </div>

                </div>
              </div>
              <ReactApexChart options={LineChart} series={LineChart.series} type="line" height={336} />
            </div>
          </div>
        </div>
      </BodyComponent>
    </React.Fragment>
  )
}
