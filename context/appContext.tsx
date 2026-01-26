"use client";
import React, { useEffect, useState, createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = ({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme: string;
}) => {
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
  const [userData, setUserData] = useState<Partial<UserInfo>>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<string>(initialTheme);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/1`)
      .then(async (response) => {
        const res = await response.json();
        setUserData(res);
      })
      .catch((error) => console.log("error: ", error));
  }, []);

  return (
    <AppContext.Provider value={{ userData, isOpen, setIsOpen, mode, setMode }}>
      {children}
    </AppContext.Provider>
  );
};
