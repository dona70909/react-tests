
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
                title: <td>Fixing bug</td>,
                isBillable: <td>Billable</td>,
                time: <td>3:00 - 3.30 PM</td>,
                duration: <td>0.30</td>,
                icon: <td><i className="bi bi-play-circle-fill"></i> <i className="bi bi-three-dots"></i></td>
            },

            {
                id:1, 
                title: <td>Illustration</td>,
                isBillable: <td>Billable</td>,
                time: <td>3:00 - 3.30 PM</td>,
                duration: <td>0.30</td>,
                icon: <td><i className="bi bi-play-circle-fill"></i><i className="bi bi-three-dots"></i></td>
            },

            {
                id:2, 
                title:<td>Filling tax return</td>,
                isBillable: <td>Billable</td>,
                time: <td>3:00 - 3.30 PM</td>,
                duration: <td>0.30</td>,
                icon: <td><i className="bi bi-play-circle-fill"></i><i className="bi bi-three-dots"></i></td>
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

                        <Bar className='bar-chart-bg mb-4' data={state} options={{
                            title: {
                                display:true,
                                text:"average",
                                fontSize:20
                            },
                        }}/>

                        <div className='wrapper-table'>
                            <table>
                                <tbody>
                                    {this.state.tableRows.length > 0 ? this.state.tableRows.map(
                                        tbRow => <tr key={tbRow.id}>{tbRow.title} {tbRow.isBillable}</tr>
                                    ) : <tr>Nessun contenuto </tr>}
                                </tbody>
                            </table>
                        </div>
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