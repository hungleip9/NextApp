"use client";
import React, { useReducer, useRef, useState } from "react";
import { useFetch } from "@/hooks/useFetch";

export default function UseReducerPage() {
  interface UserInfo {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
  const { data: users, loading, error, execute } = useFetch();
  const [count, setCount] = useState(0);
  console.log("render");
  if (error) {
    return <>{error}</>;
  }
  async function getUser() {
    await execute("https://jsonplaceholder.typicode.com/users");
  }
  return (
    <div>
      <button className="border block" onClick={() => getUser()}>
        GET USER
      </button>
      <button onClick={() => setCount(0)}>ClickMe@@@@</button>
      {loading
        ? "Loading..."
        : users.map((user: UserInfo) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}
