"use client";
import Cookies from "js-cookie";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Layout } from "antd";
import { usePathname } from "next/navigation";
import { AppContext } from "@/context/appContext";
const { Header } = Layout;

export default function HeaderPage() {
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
  const { userData, isOpen, setIsOpen, mode, setMode } = useContext(
    AppContext
  ) as {
    userData: UserInfo;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    mode: string;
    setMode: (value: string) => void;
  };
  const pathname = usePathname();
  const tables = [
    { title: "Trang chủ", path: "/" },
    { title: "Demo", path: "/demo" },
    { title: "Demo2", path: "/demo2" },
    { title: "Sản phẩm 1", path: "/products/1" },
    { title: "Sản phẩm 2", path: "/products/2" },
    { title: "Table", path: "/table" },
  ];
  useEffect(() => {
    Cookies.set("theme", mode, { expires: 7 });
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);
  return (
    <>
      <Header className="flex justify-between" style={{ padding: 0 }}>
        <div
          className="border cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Đóng" : "Mở"}
        </div>
        {/* Navigation */}
        <nav>
          <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
            {tables.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={
                  pathname === item.path
                    ? "text-color-active border"
                    : "text-color border"
                }
              >
                {item.title}
              </Link>
            ))}
            <li></li>
          </ul>
        </nav>
        <div className="flex justify-center">
          <div className="info-user mr-2">Xin chào {userData?.name}</div>
          {/* THAY ĐỔI PHẦN NÀY */}
          <button
            className="border cursor-pointer"
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            suppressHydrationWarning // THÊM DÒNG NÀY
          >
            {mode === "dark" ? "light" : "dark"}
          </button>
        </div>
      </Header>
    </>
  );
}
