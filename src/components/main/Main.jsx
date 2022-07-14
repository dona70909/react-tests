
import React from 'react';
import {Bar} from 'react-chartjs-2';

import './css/main.css';


const state = {
    
    labels: ['Sun', 'Mon', 'Tue','Wed', 'Thu', 'Fri'],
    datasets: [
        {
            label: 'Project x',
            backgroundColor: 'rgb(33, 34, 43)',
            borderRadius:10,
            data: [65, 59, 80, 81, 56,34]
        },

        {
            label: 'Project y',
            backgroundColor: 'rgb(227, 227, 227)',
            border: 'none',
            borderRadius:10,
            data: [65, 59, 80, 81, 56,78]
        }
    ]
}


class Main extends React.Component {

    render() {
        return (
    
            <main className='d-flex justify-conent-center p-2'>

                <div className='col-7 p-3 wrapper-bar-chart'>
                    <div className='d-flex justify-content-between'>
                        <h6 className='m-0'>Time Spend on projects</h6>
                        <button className='my-btn btn-bar-chart'>
                            <p className='m-0 p-0'>Last 6 days</p>
                        </button>
                    </div>
                    <Bar data={state} options={{
                        title: {
                            display:true,
                            text:"average",
                            fontSize:20
                        },
                    }}/>
                </div>

                <div className="col-3 wrapper-left-charts">

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
                
            </main>

        )
    }
}

export default Main;