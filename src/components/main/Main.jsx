
import React from 'react';
import Chart from 'chart.js/auto';
import {Bar} from 'react-chartjs-2';

import './css/main.css';


const state = {
    
    labels: ['Sun', 'Mon', 'Tue','Wed', 'Thu', 'Fri'],
    datasets: [
        {
            label: 'Project x',
            backgroundColor: 'rgb(33, 34, 43)',
            borderRadius:10,
            data: [11, 35, 27, 41, 28,20]
        },

        {
            label: 'Project y',
            backgroundColor: 'rgb(227, 227, 227)',
            border: 'none',
            borderRadius:10,
            data: [38, 28, 25, 41, 26,20]
        }
    ]
}


class Main extends React.Component {

    state = {

        tableRows : [

            {
                id:0, 
                title: <td><h6>Fixing bug</h6></td>,
                isBillable: <td><h6>Billable</h6></td>,
                time: <td><h6>3:00 - 3.30 PM</h6></td>,
                duration: <td><h6>0.30</h6></td>,
                icon: <td className='d-flex'><i className="bi bi-play-circle-fill"></i> <i className="bi bi-three-dots"></i></td>
            },

            {
                id:1, 
                title: <td><h6>Illustration</h6></td>,
                isBillable: <td><h6>Billable</h6></td>,
                time: <td><h6>3:00 - 3.30 PM</h6></td>,
                duration: <td><h6>0.30</h6></td>,
                icon: <td className='d-flex'><i className="bi bi-play-circle-fill "></i><i className="bi bi-three-dots"></i></td>
            },

            {
                id:2, 
                title:<td><h6>Filling tax return</h6></td>,
                isBillable: <td><h6>Billable</h6></td>,
                time: <td><h6>3:00 - 3.30 PM</h6></td>,
                duration: <td><h6>0.30</h6></td>,
                icon: <td className='d-flex'><i className="bi bi-play-circle-fill"></i><i className="bi bi-three-dots"></i></td>
            }
        ]
    }

    render() {
        return (
    
            <main className='container-fluid py-3'>

                <section className="row justify-content-center">

                    <div className='col-7 p-3 wrapper-bar-chart'>

                        <div className='d-flex justify-content-between mb-5'>
                            <h6 className='m-0'>Time Spend on projects</h6>
                            <button className='my-btn btn-bar-chart'>
                                <p className='m-0 p-0'>Last 6 days</p>
                            </button>
                        </div>

                        <Bar className='bar-chart-bg mb-5' data={state} options={{
                            title: {
                                display:true,
                                text:"average",
                                fontSize:20
                            },
                        }}/>

                        <div className="wrapper-title-table d-flex justify-content-between mb-3">
                            <h4>Time tracker</h4>
                            <div className='wrapper-btn-table'>
                                <button className='btn-today mx-2'>Today</button>
                                <button><i className="bi bi-funnel-fill" id='btn-filter'></i></button>
                            </div>
                        </div>

                        <table className='table'>
                            <tbody>
                                {this.state.tableRows.length > 0 ? this.state.tableRows.map(
                                    tbRow => <tr className='d-flex justify-content-between align-items-center my-row-border mb-4' key={tbRow.id}>
                                        {tbRow.title} {tbRow.isBillable} {tbRow.time} {tbRow.duration} {tbRow.icon}
                                        </tr>
                                ) : <tr>Nessun contenuto </tr>}
                            </tbody>
                        </table>
                    </div>

                    <div className="col-4 wrapper-left-charts">
                        <div className="welcome-box">
                            <div className="title">
                                <p className="m-0 p-0">
                                    Welcome back to ypur
                                </p>
                                <h6 className='mb-3 p-0'>
                                    Daily time tracker
                                </h6>

                                <button className='tracking-btn my-btn'>
                                    <p className="m-0 p-0">
                                        Start tracking
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>

                </section>
            </main>

        )
    }
}

export default Main;