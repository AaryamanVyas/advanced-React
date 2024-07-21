import React from 'react';
import './App.css';

function App() {
  const focusInput = () => {
    formInputRef.current.focus();
  }

  return (
    <>
    <h1>Using useRef to access underlying DOM</h1>
    <input type='text' />
    <button onClick={focusInput}>
      Focus input
    </button>
    </>
  );
}

export default App;
