import './App.css';

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} />;
  };
};

const PanelMouseLogger = ({ mousePosition}) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className='BasicTracker'>
      <p>Mouse position:</p>
      <div className='Row'>
        <span>X: {mousePosition.x}</span>
        <span>y: {mousePosition.y} </span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

function App() {
  return (
    <div className="App">
      <header className='Header'>Little Lemon Restaurant</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
