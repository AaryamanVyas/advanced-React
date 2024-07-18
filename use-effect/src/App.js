import React from 'react';
import './App.css';

function App() {
  const [toggle, setToggle] = React.useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  }

  React.useEffect(() => {
    document.title = toggle ? "welcome to Little Lemon" : "using the useEffect hook"
  }, []);

  return (
    <div>
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>
        Toggle message
      </button>
      {toggle && <h2>welcome to little Lemon</h2>}
    </div>
  );
}

export default App;
