import React, { useState } from "react";
import "./index.css";
import SearchBar from "./components/SearchBar";
import Pyramid from "./components/Pyramid";
import Overlay from "./components/Overlay";
import chartData from "./data/chartData";
import Fuse from "fuse.js";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedBox, setSelectedBox] = useState(null);

  const fuse = new Fuse(chartData, {
    keys: ["title", "content"],
    threshold: 0.3, // 控制模糊程度
  });

  const results = query ? fuse.search(query).map(r => r.item) : [];

  const handleSelect = (title) => {
    setSelectedBox(title);
    setQuery(""); // 搜索后清空输入
  };

  const closeOverlay = () => {
    setSelectedBox(null);
  };

  return (
    <div>
      <div className="title">Categorization Chart</div>

      {/* 搜索框 */}
      <SearchBar value={query} onChange={setQuery} />

      {/* 搜索结果列表 */}
      {query && (
        <div className="search-results">
          {results.length > 0 ? (
            results.map((item) => (
              <div
                key={item.title}
                className="search-result-item"
                onClick={() => handleSelect(item.title)}
              >
                {item.title}
              </div>
            ))
          ) : (
            <div className="search-no-results">No matches found.</div>
          )}
        </div>
      )}

      {/* 金字塔图 */}
      <Pyramid onBoxClick={handleSelect} />

      {/* 弹窗内容 */}
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
