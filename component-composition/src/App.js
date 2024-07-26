import './App.css';

const Button = ({ children, backgroundColor }) => {
  return <button style={{backgroundColor}}>{children}</button>;
};

const Alert = ({children}) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  );
};

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>;
}
function App() {
  return (
    <div className="App">
      <header>Little Lemon Restaurant</header>
      <Alert>
        <h4>Delete Account</h4>
        <p>
          are you sure you want to proceed
        </p>
      </Alert>
    </div>
  );
}

export default App;
