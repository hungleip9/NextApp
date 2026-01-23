"use client";
import { useState, useEffect, useRef } from "react";
import Time from "@/components/time";
import UserProfile from "@/components/userProfile";
import TserProfile from "@/components/trafficLight";
import PageTitle from "@/components/pageTitle";
import AnswerButton from "@/components/answerButton";
import HandleFetchUsers from "@/components/handleFetchUsers";
import CounterComponent from "@/components/counterComponent";
import BaseModal from "@/components/baseModal";
import { DatePicker, Button } from "antd";

export default function Demo() {
  const colors = ["red", "green", "blue"];
  const [count, setCount] = useState(0);
  const [isHappy, setIsHappy] = useState(true);
  const inputElement = useRef<HTMLInputElement | null>(null);

  function onAnswerNo() {
    setIsHappy(false);
  }

  function onAnswerYes() {
    setIsHappy(true);
  }

  function incrementCount() {
    setCount((count) => count + 1);
  }

  const showModal = () => {
    // setIsModalOpen(true);
  };

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  return (
    <div>
      <DatePicker />
      <Time />
      <hr className="my-5" />
      <UserProfile
        name="John"
        age={20}
        favouriteColors={["green", "blue", "red"]}
        isAvailable
      />
      <hr className="my-5" />
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
      <hr className="my-5" />
      <p>Counter: {count}</p>
      <button onClick={incrementCount} className="border cursor-pointer">
        +1
      </button>
      <hr className="my-5" />
      <input type="text" className="border" ref={inputElement} />

      <hr className="my-5" />
      <TserProfile />

      <hr className="my-5" />
      <PageTitle />

      <hr className="my-5" />
      <p>Are you happy?</p>
      <AnswerButton onYes={onAnswerYes} onNo={onAnswerNo} />
      <p style={{ fontSize: 50 }}>{isHappy ? "😀" : "😥"}</p>

      <hr className="my-5" />
      <p>Call API</p>
      <HandleFetchUsers />

      <hr className="my-5" />
      <p>Store</p>
      <CounterComponent />
      <hr className="my-5" />
      <p>BaseModal</p>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <BaseModal />
    </div>
  );
}
