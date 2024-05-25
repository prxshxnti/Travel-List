import { useState } from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You have got everything!! Now You are ready to got✈️</em>
      ) : (
        <em>
          🧳 You have {numItems} items on your List, and you have already packed{" "}
          {numPacked}({percentage}%)
        </em>
      )}
    </footer>
  );
}
