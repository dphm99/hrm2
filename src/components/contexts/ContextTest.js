import React, { useState, useEffect, createContext } from "react";
// import axios from "axios";

const TestContext = createContext();
function TestProvider({ children }) {
  const [test, setTest] = useState([]);

  useEffect(() => {
    fetch("http://192.168.12.109:2023/api/v1/attendance", {
      method: "GET",
      headers: {
        access_token: "access_token_b112376efe33ec3a4d40c40fcd29079800386760",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setTest(data);
        console.log(data);
      });
  }, []);

  const value = {
    test,
  };
  console.log(test);

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
}
export { TestProvider, TestContext };
