import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ isOn, onToggle }) => {
  return (
    <div className="toggle-container" onClick={onToggle}>
      <div className={`toggle-switch ${isOn ? "on" : "off"}`}>
        <div className="toggle-thumb" />
      </div>
      <p>{isOn ? "ON" : "OFF"}</p>
    </div>
  );
};

export default ToggleSwitch;
