import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi there! This is Araschs Test FE app!</p>
        <p>Run 'docker compose -f docker-compose.dev.yml up --build' for development.</p>
      </header>
    </div>
  );
}

export default App;