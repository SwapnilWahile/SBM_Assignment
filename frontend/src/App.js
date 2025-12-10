import React from "react";
import ItemList from "./ItemList";
import "./index.css";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>TODO App</h1>
      <ItemList />
    </div>
  );
}
