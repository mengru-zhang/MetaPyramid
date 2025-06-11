import React, { useState } from "react";
import "../index.css";
import Overlay from "./Overlay";


const Box = ({ text, className = "", onClick }) => (
  <div className={`blue-box ${className}`} onClick={() => onClick?.(text)}>
    {text}
  </div>
);

export default function Pyramid({ onBoxClick }) {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleClick = (text) => {
    setSelectedBox(text);
  };

  const closeOverlay = () => {
    setSelectedBox(null);
  };

  return (
    <div className="pyramid-container">
      <div className="title">Categorization Chart</div>

      <div className="pyramid">
        {/* 第一层 */}
        <div className="pyramid-layer layer1">
          <div className="primary-title">Tunability</div>
          <div>
            <Box text="Active" onClick={onBoxClick} />
            <Box text="Passive" onClick={onBoxClick} />
          </div>
        </div>

        {/* 第二层 */}
        <div className="pyramid-layer layer2">
          <div className="primary-title">Function Type</div>
          <div>
            <Box text="Transmissive" onClick={onBoxClick} />
            <Box text="Reflective" onClick={onBoxClick} />
            <Box text="Combined" onClick={onBoxClick} />
          </div>
        </div>

        {/* 第三层 */}
        <div className="pyramid-layer layer3">
          <div className="primary-title">Phase Profile</div>
          <div>
            <Box text="Linear" onClick={onBoxClick} />
            <Box text="Parabolic" onClick={onBoxClick} />
            <Box text="Hyperbolic" onClick={onBoxClick} />
            <Box text="Freeform or higher" onClick={onBoxClick} />
          </div>
        </div>

        {/* 第四层 */}
        <div className="pyramid-layer layer4">
          <Box text="Meta-atom material type" className="framed-title" onClick={onBoxClick} />
          <div>
            <Box text="Metallic" onClick={onBoxClick} />
            <Box text="Dielectric" onClick={onBoxClick} />
          </div>
          <Box text="Meta-atom geometry" className="framed-title" onClick={onBoxClick} />
          <div>
            <Box text="Nanopillar" onClick={onBoxClick} />
            <Box text="Nanofin" onClick={onBoxClick} />
            <Box text="Nanohole" onClick={onBoxClick} />
            <Box text="Other shapes" onClick={onBoxClick} />
          </div>
        </div>

        {/* 第五层 */}
        <div className="pyramid-layer layer5">
          <div className="primary-title">Polarization sensitivity</div>
          <div>
            <Box text="Sensitive" onClick={onBoxClick} />
            <Box text="Insensitive" onClick={onBoxClick} />
          </div>
        </div>

        {/* 第六层 */}
        <div className="pyramid-layer layer6">
          <Box text="Wave type" className="framed-title" onClick={onBoxClick} />
          
          <div>
            <Box text="Light" onClick={onBoxClick} />
            <Box text="Acoustic" onClick={onBoxClick} />
          </div>
          <Box text="Bandwidth" className="framed-title" onClick={onBoxClick} />
          <div>
            <Box text="Monochromatic" onClick={onBoxClick} />
            <Box text="Broadband" onClick={onBoxClick} />
            <Box text="Discrete wavelengths" onClick={onBoxClick} />
          </div>
          <Box text="Wavelength range" className="framed-title" onClick={onBoxClick} />
          <div>
            <Box text="Visible" onClick={onBoxClick} />
            <Box text="Near IR" onClick={onBoxClick} />
            <Box text="Deep IR" onClick={onBoxClick} />
          </div>
        </div>

        {/* 第七层 */}
        <div className="pyramid-layer layer7">
          <Box text="Layer number" className="framed-title" onClick={onBoxClick} />
          <div>
            <Box text="1" onClick={onBoxClick} />
            <Box text="2" onClick={onBoxClick} />
            <Box text="3" onClick={onBoxClick} />
            <Box text="more" onClick={onBoxClick} />
          </div>
          <Box text="Layer structure" className="framed-title" onClick={onBoxClick} />
          <div>
            <Box text="Metallic-Insulator-Metallic" onClick={onBoxClick} />
            <Box text="All-dielectric" onClick={onBoxClick} />
            <Box text="More structures" onClick={onBoxClick} />
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <div className="footer">
        <div>5/10/2024</div>
        <div>II-VI Mini Conference | University of Rochester</div>
      </div>

      {/* 弹窗 */}
      {selectedBox && (
        <Overlay title={selectedBox} onClose={closeOverlay}>
          {
            chartData.find((item) => item.title === selectedBox)?.content
              || <p>No content available.</p>
          }
        </Overlay>
      )}
    </div>
  );
}
