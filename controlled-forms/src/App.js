import './App.css';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState("10");
  return (
    <div className="App">
      <form>
        <fieldset>
          <h2>Feedback form</h2>
          <div className='Field'>
            <label>Score: {score}⭐</label>
            <input 
              type='range' 
              min="0" 
              max="10" 
              value={score} 
              onChange={e => setScore(e.target.value)} />
          </div>
          <button type='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
