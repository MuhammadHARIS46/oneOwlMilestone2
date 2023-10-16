import React from 'react'

const StatsBar = () => {
    return (
        <React.Fragment>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                <div className="card cardMargin">
                    <div className="card-body">
                        <div className="chart">
                            <div className="chartHeading">
                                <p>Incoming Sessions</p>
                            </div>
                            <div className="box box1">
                                <p>234600</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                <div className="card cardMargin">
                    <div className="card-body">
                        <div className="chart">
                            <div className="chartHeading">
                                <p>Total Converstations</p>
                            </div>
                            <div className="box box1">
                                <p>16738</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                <div className="card cardMargin">
                    <div className="card-body">
                        <div className="chart">
                            <div className="chartHeading">
                                <p>Total Transaction</p>
                            </div>
                            <div className="box box1">
                                <p>286320</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                <div className="card cardMargin">
                    <div className="card-body">
                        <div className="chart">
                            <div className="chartHeading">
                                <p>Average Waiting Time</p>
                            </div>
                            <div className="box box1">
                                <p>286320</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default StatsBar