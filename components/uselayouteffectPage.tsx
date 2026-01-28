"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";

export default function UselayouteffectPage() {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  // cập nhật lại state
  // Cập nhật lại DOM
  // Render lại UI
  // Gọi cleanup nếu deps thay đổi
  // Gọi useEffect callback
  //   if (count > 3) {
  //     setCount(0);
  //   }
  // }, [count]);
  useLayoutEffect(() => {
    // cập nhật lại state
    // Cập nhật lại DOM
    // Gọi cleanup nếu deps thay đổi (sync)
    // Gọi useLayoutEffect callback (sync)
    // Render lại UI
    if (count > 3) {
      setCount(0);
    }
  }, [count]);
  return (
    <div>
      <p>count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
