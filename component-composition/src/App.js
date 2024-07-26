import './App.css';
const Button = ({ children, backgroundColor }) => {
  return <button style={{backgroundColor}}>{children}</button>;
};

const Alert = ({children}) => {
  return (
    <>
      <div className='Overlay' />
      <div className='Alert'>{children}</div>
    </>
  );
};
function App() {
  return (
    
  );
}

export default App;
