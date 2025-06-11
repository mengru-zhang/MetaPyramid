import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div style={{ margin: "1rem auto", textAlign: "center" }}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
        style={{
          padding: "8px 16px",
          fontSize: "1rem",
          width: "60%",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}
