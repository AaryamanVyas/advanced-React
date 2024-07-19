import React from "react";

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
    .then(response => response.json())
    .then(data => setUser(data));
  }

  
}

export default App;
