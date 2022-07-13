
import './App.css';

function App() {

  const name = 'Josh Perez';
  const element = <h1>Hello, {name}</h1>;

  return (
    <div className="App">
      <header className="App-header">
        Hello React! 
        {element}
      </header>
    </div>
  );
}

export default App;
