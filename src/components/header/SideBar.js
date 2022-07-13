
import React from 'react';

import './css/SideBar.css';


/**
 * Questo è il componente sidebar
 */

class SideBar extends React.Component {

    render() {
        return (

            <nav className='d-flex flex-column justify-space-between align-items-center'>


                <h2 className='mb-5 text-center'> 
                    <i class="bi bi-pie-chart" id='bi-pie-chart'></i>
                </h2>
    
                <ul className='list-unstyled d-flex flex-column align-items-center'>

                    <li>
                        <i class="bi bi-clock" id='my-clock-icon'></i>
                    </li>

                    <li>
                        <i class="bi bi-chart"></i>
                    </li>

                    <li>
                        <i class="bi bi-journal-text"></i>
                    </li>

                    <li>
                        <i class="bi bi-gear-wide-connected"></i>
                    </li>

                    <li>
                        <i class="bi bi-calendar4-week"></i>
                    </li>

                    <li>
                        <i class="bi bi-gear-fill"></i>
                    </li>
                </ul>
            </nav>

        )
    }
}

export default SideBar;