
import React from 'react';

import './css/SideBar.css';


/**
 * Questo è il componente sidebar
 */

class SideBar extends React.Component {

    render() {
        return (

            <nav className='my-side-bar d-flex flex-column justify-space-between '>


                <h2 className='mb-5 text-center'> 
                    <i className="bi bi-pie-chart" id='bi-pie-chart'></i>
                </h2>
    
                <ul className='list-unstyled d-flex flex-column align-items-center'>

                    <li>
                        <i className="bi bi-clock" id='my-clock-icon'></i>
                    </li>

                    <li>
                        <i className="bi bi-chart"></i>
                    </li>

                    <li>
                        <i className="bi bi-journal-text"></i>
                    </li>

                    <li>
                        <i className="bi bi-gear-wide-connected"></i>
                    </li>

                    <li>
                        <i className="bi bi-calendar4-week"></i>
                    </li>

                    <li>
                        <i className="bi bi-gear-fill"></i>
                    </li>
                </ul>

                <ul className='list-unstyled d-flex flex-column align-items-center justify-content-end'>
                    <li>
                        <i id='my-plus-circle' className="bi bi-plus-circle"></i>
                    </li>
                </ul>
            </nav>

        )
    }
}

export default SideBar;