
import React from 'react';

import './App.css';
import Main from './components/main/Main';
import Header from './components/header/Header';
import SideBar from './components/header/SideBar';

/* elemento principale di react. può essere suddiviso in altri component */
/**
 * Da qui parte l'applicazione:
 * App è composto da Header e Main
 */

class App extends React.Component {

  render() {

    return (

      <section className="App d-flex p-2">
        
        <div className='left-side my-sidebar-wrapper col-2'>
          <SideBar/>
        </div>

        <div className='right-side my-main-content-wrapper col-10'>
          <Header/>
          <Main/>
        </div>

      </section>
    );
  }
}

export default App;
