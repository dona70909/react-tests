
import React from 'react';

import './App.css';
import Main from './components/main/Main';
import Header from './components/header/Header';

/* elemento principale di react. può essere suddiviso in altri component */

class App extends React.Component {

  

  render() {

    //const Main = React.lazy(() => import('./components/main/Main'));

    return (

      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
