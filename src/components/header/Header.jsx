
import React from 'react';

import './css/TopNav.css';

/**
 * Questo è il componente header 
 */

class Header extends React.Component {

    render() {
        return (
    
            <nav className='my-top-nav-wrapper d-flex justify-content-between align-items-center px-3'>

                <div className='title'>
                    <h4>Dashboard</h4>
                    <h6>date</h6>
                </div>

                <div className='search-bar'>
                    <input className='px-5' type="text" placeholder='Search or type a command'/>
                </div>

                <div className='wrapper-left-side d-flex align-items-center'>

                    {/* icons */}
                    <div className='my-wrapper-icons d-flex justify-content-around mx-4'>
                        <i className="bi bi-chat-left-dots mx-2"></i>
                        <i className="bi bi-ui-radios-grid mx-2"></i>
                        <i className="bi bi-bell-fill mx-2"></i>
                    </div>

                    {/* profile btn menu */}
                    <div className='d-flex justify-content-between align-items-center box-profile'>

                        <div className='box-image'>
                            <img src="#" alt="" />
                        </div>

                        <div>
                            <h6 className='m-0 p-0'>Stepheni</h6>
                            <p className='m-0 p-0'>Designer</p>
                        </div>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Header;