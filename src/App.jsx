import React, { useState } from "react";
import "./index.css";
import SearchBar from "./components/SearchBar";
import Pyramid from "./components/Pyramid";
import Overlay from "./components/Overlay";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (title) => {
    setSelectedBox(title);
    setQuery(""); // 搜索后清空输入
  };

  const closeOverlay = () => {
    setSelectedBox(null);
  };

  return (
    <div>
      <div className="title">Categorization Chart</div>

      {/* 搜索框（功能待实现） */}
      <SearchBar value={query} onChange={setQuery} />

      {/* 金字塔图 */}
      <Pyramid onBoxClick={handleBoxClick} />

      {/* 弹窗 */}
      {selectedBox && (
        <Overlay title={selectedBox} onClose={closeOverlay} />
      )}
    </div>
  );
}
