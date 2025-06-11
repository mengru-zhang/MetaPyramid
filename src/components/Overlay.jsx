import React, { useEffect, useState } from "react";
import "../index.css";
import boxFileMap from "../data/boxFileMap.js";


// ✅ 写在组件外，提升性能和打包正确性
const modules = import.meta.glob("../data/boxes/*.json");

export default function Overlay({ title, onClose }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // 👇 添加这两行调试输出
    console.log("Trying to load:", title);
    console.log("Available module keys:", Object.keys(modules));

    const fileName = boxFileMap[title];

    if (!fileName) {
      setError(true);
      setData(null);
      return;
    }

    const path = `../data/boxes/${fileName}`;
    const loader = modules[path];

    if (loader) {
      setData(null); // 开始加载，先清空旧数据
      setError(false);
      loader()
        .then((module) => {
          setData(module.default);
        })
        .catch(() => {
          setData(null);
          setError(true);
        });
    } else {
      setError(true);
      setData(null);
    }
  }, [title]);

  return (
    <div className="overlay-backdrop" onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <div className="overlay-header">
          <h2>{title}</h2>
          <button className="overlay-close" onClick={onClose}>✕</button>
        </div>
        <div className="overlay-body">
          {error ? (
            <p>No data found for this box.</p>
          ) : data ? (
            <>
              <p>{data.description}</p>
              {data.relatedPapers?.length > 0 && (
                <>
                  <h4>Related Papers:</h4>
                  <ul>
                    {data.relatedPapers.map((paper, idx) => (
                      <li key={idx}>
                        <strong>{paper.title}</strong> ({paper.file})
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
