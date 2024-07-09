import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <fieldset>
          <h2>Feedback form</h2>
          <div className='Field'>
            <label>Score: </label>
            <input type='range' min="0" max="10" />
          </div>
          <button type='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
