import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="parent-box">
        <div className="result-box">
          <h1 className="title">Your result</h1>
          <div className="circle">
            <h1 className="large-number">76</h1>
            <h3 className="smaller-number">of 100</h3>
          </div>
          <p>
            Great You scored higher than 65% of the people who have taken these
            tests.
          </p>
          result
        </div>

        <div className="summary-box"></div>
      </div>
    </div>
  );
}

export default App;
