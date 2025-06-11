import React, { useEffect, useState } from "react";
import "../index.css";
import boxFileMap from "../data/boxFileMap";

export default function Overlay({ title, onClose }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fileName = boxFileMap[title]; // 从映射表中获取 JSON 文件名

    if (!fileName) {
      setError(true);
      setData(null);
      return;
    }

    import(`../data/boxes/${fileName}`)
      .then((module) => {
        setData(module.default);
        setError(false);
      })
      .catch(() => {
        setData(null);
        setError(true);
      });
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
