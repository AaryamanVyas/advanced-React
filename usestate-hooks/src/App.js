import { useState } from "react";

export default function App() {
  const [restaurantName, setRestaurantName] = useState("Lemon");
  return (
    <h1>{restaurantName}</h1>
  );
};
