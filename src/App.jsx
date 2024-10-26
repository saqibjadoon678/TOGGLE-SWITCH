import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="outer-container" style={{ backgroundColor: isOn ? '#96e6a1' : '#ff6a88' }}>
      <h1>Toggle Switch Button</h1>
      <div className="inner-container">
        <ToggleSwitch isOn={isOn} onToggle={handleToggle} />
      </div>
    </div>
  );
}

export default App;
