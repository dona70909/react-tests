
import React from 'react';

import './App.css';
import Main from './components/main/Main';
import Header from './components/header/Header';

/* elemento principale di react. può essere suddiviso in altri component */
/**
 * Da qui parte l'applicazione:
 * App è composto da Header e Main
 */

class App extends React.Component {

  render() {

    return (

      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
