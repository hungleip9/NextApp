"use client";
import React, { useEffect, useState } from "react";

export default function useEffectPage() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("users");
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("re render useEffect");
    return () => {
      console.log("useEffect - count - cleanup");
    };
  }, [count]);
  useEffect(() => {
    fetch(`https://reqres.in/api/${action}`, {
      headers: {
        "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
      },
    })
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((error) => console.log("error: ", error));
  }, [action]);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    // componentnDidMount
    document.addEventListener("scroll", () => {
      handleScroll();
    });

    return () => {
      // componentWillUnmount
      document.removeEventListener("scroll", () => {
        handleScroll();
      });
    };
  }, []);
  return (
    <>
      <div className="border h-[5000px] overflow-auto">
        <p>You clicked {count} times</p>
        <button className="block border" onClick={() => setCount(count + 1)}>
          Click me
        </button>

        <button className="border block" onClick={() => setAction("users")}>
          Get Users
        </button>
        <button className="border block" onClick={() => setAction("comments")}>
          Get Comments
        </button>
        <p
          style={{
            position: "fixed",
            right: "100px",
            bottom: "100px",
            color: "red",
          }}
        >
          {scrollPosition}
        </p>
      </div>
    </>
  );
}
