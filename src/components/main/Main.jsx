
import React from 'react';
import {Bar} from 'react-chartjs-2';


const state = {
    
    labels: ['Sun', 'Mon', 'Tue','Wed', 'Thu', 'Fri'],
    datasets: [
        {
            label: 'Project x',
            backgroundColor: 'black',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56,34]
        },

        {
            label: 'Project y',
            backgroundColor: 'gray',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56,78]
        }
    ]
}


class Main extends React.Component {

    render() {
        return (
    
            <div className='w-50'>
                <Bar data={state} options={{
                    title: {

                        display:true,
                        text:"average",
                        fontSize:20
                    },
                }}/>
            </div>

        )
    }
}

export default Main;