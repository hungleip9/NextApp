"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Form from "@/components/form";

export default function UseMemoAndUseCallback() {
  const [count, setCount] = useState(0);
  const [total] = useState(0);
  function fibonacci(n: number): number {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  console.time("fibonacci");
  const result = useMemo(() => {
    return fibonacci(10);
  }, []);
  console.timeEnd("fibonacci");
  // có 2 cách dùng
  const submitForm = useCallback(() => {
    console.log("submited !");
  }, []);
  // const submitForm = useMemo(() => {
  //   return () => {
  //     console.log("submited !");
  //   };
  // }, []);
  return (
    <>
      <p>Result: {result}</p>
      <div
        className="border block w-[50px]"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </div>
      <Form total={total} submit={submitForm} />
    </>
  );
}
