import React from "react";
import "../index.css";
import chartData from "../data/chartData";


  
export default function Overlay({ title, onClose, children }) {
  return (
    <div className="overlay-backdrop" onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <div className="overlay-header">
          <h2>{title}</h2>
          <button className="overlay-close" onClick={onClose}>✕</button>
        </div>
        <div className="overlay-body">
          {children || <p>[This area will show detailed text, data, or charts]</p>}
        </div>
      </div>
    </div>
  );
}
