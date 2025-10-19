import './App.css';
import Count from './components/Count';

function App() {
  return (
    <div className="App">
      <Count>
        <h2>
          Congragulations you have hit 100!!!!
        </h2>
        <h2>
          Congragulations WINNER you have hit 200!!!!
        </h2>
      </Count>
    </div>
  );
}

export default App;
