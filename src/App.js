
import React from 'react';

/* //# css */
import './css/App.css'; 

/* //# components */
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

      <section className="App wrapper-app d-flex">
        
        <section className='left-side my-sidebar-wrapper col-1 p-2'>
          <SideBar/>
        </section>

        <section className='right-side my-main-content-wrapper col-11'>
          <Header/>
          <Main/>
        </section>

      </section>
    );
  }
}

export default App;
