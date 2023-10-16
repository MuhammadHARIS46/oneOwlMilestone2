import React from 'react'
import BodyComponent from '../../components/bodyComponent'
import StatsBar from '../../components/stats'
import ReactApexChart from 'react-apexcharts';


export const DashboardAdmin = () => {

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
        colors: ['#a8c5da', '#1c1c1c'],
        series: [
            {
                name: 'Current',
                data: [0, 3, 8, 2, 1, 7],
            },
            {
                name: 'Previous Week',
                data: [0, 2, 4, 5, 6, 7],
                strokeWidth: 1,
            }

        ],
        stroke: {
            curve: 'smooth',
            width: 4
        },
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
        legend: {
            position: 'top', // Set legend position to top
        },
    };

    const barChart = {
        series: [{
            name: 'Today',
            data: [44, 55, 57, 56, 61, 58]
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
                colors: {
                    ranges: [{
                        from: 0,
                        to: 44,
                        color: '#95a4fc'
                    }, {
                        from: 45,
                        to: 55,
                        color: '#baedbd'
                    }, {
                        from: 56,
                        to: 57,
                        color: '#1c1c1c'
                    }, {
                        from: 58,
                        to: 61,
                        color: '#B1E3FF'
                    }, {
                        from: 62,
                        to: 80,
                        color: '#A8C5DA'
                    },
                    {
                        from: 81,
                        to: 100,
                        color: '##A1E3CB'
                    }
                
                ]
                }
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Linux', 'Mac', 'IOS', 'Windows', 'Android', 'Other'],
        },
        yaxis: {
            show: true
        },
    };
    
    const chartOptions = {
        series: [100, 55, 20,20],
        labels: ['United States', 'Canada', 'Mexico', 'Others'],
        chart: {
          type: 'donut',
          toolbar: {
            show: true,
            tools: {
              download: true,
            },
          },
        },
        colors: ['#95a4fc', '#baedbd', '#1c1c1c','#B1E3FF'],
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
                    <StatsBar />
                    <div className="col-md-12 col-lg-9 col-xl-9 ">
                        <div className="card cardMargin darkModeCard">
                            <div className="card-body">

                                <div className="chartHeading1">
                                    <p>Total Users</p>
                                </div>

                            </div>
                            <div className='adminDashboardChart'>

                                <ReactApexChart options={LineChart} series={LineChart.series} type="line" height={300} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-3 col-xl-3 ">
                        <div className="card">
                            <div className="card-body">
                                <div className="chartHeading1">
                                    <p>Traffic by Channels</p>
                                </div>
                                <div className="adminTrafficMain">

                                    <div className='adminTrafficContain'>
                                        <span>Live chat</span>
                                        <progress max="100" value="50" />
                                    </div>
                                    <div className='adminTrafficContain'>
                                        <span>Whatsapp</span>
                                        <progress max="100" value="50" />
                                    </div>
                                    <div className='adminTrafficContain'>
                                        <span>Instagram</span>
                                        <progress max="100" value="50" />
                                    </div>
                                    <div className='adminTrafficContain'>
                                        <span>Email</span>
                                        <progress max="100" value="50" />
                                    </div>
                                    <div className='adminTrafficContain'>
                                        <span>Facebook</span>
                                        <progress max="100" value="50" />
                                    </div>
                                    <div className='adminTrafficContain'>
                                        <span>Twitter</span>
                                        <progress max="100" value="50" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-6 ">
                        <div className="card">
                            <div className="card-body">
                                <div className="chartHeading1">
                                    <p>Traffic by Channels</p>
                                </div>
                                <ReactApexChart options={barChart} series={barChart.series} type="bar" height={300} />

                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-6 ">
                        <div className="card">
                            <div className="card-body">
                                <div className="chartHeading1">
                                    <p>Traffic by Channels</p>
                                </div>
                                <div className='adminDashboardChart'>
                                <ReactApexChart options={chartOptions} series={chartOptions.series} type="donut" height={330} />
</div>
                            </div>
                        </div>
                    </div>
                </div>
            </BodyComponent>

        </React.Fragment>
    )
}
