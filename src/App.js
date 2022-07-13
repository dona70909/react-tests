
import React from 'react';

import './App.css';
import Main from './components/main/Main';

/* elemento principale di react. può essere suddiviso in altri component */

class App extends React.Component {

  

  render() {

    //const Main = React.lazy(() => import('./components/main/Main'));

    return (

      <div className="App">
        <Main/>
      </div>
    );
  }
}

export default App;
