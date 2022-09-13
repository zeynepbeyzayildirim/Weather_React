import "./styles.css";
import {React, useState, Component } from "react";
import Provider from "./components/context/Context";
import Weather from "./components/Weather";
import Header from "./components/Header";


function App() {
  const [selected, setSelected] = useState("İzmir");
  return (
    <div>
      <Provider>
        <Header />
        <Weather />
      </Provider>
    </div>
  );
}

export default App;
