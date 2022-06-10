import React, { useState, useEffect, createContext } from "react";
// import axios from "axios";
const RecruitContext = createContext("");
function RecruitProvider({ children }) {
  const [category, setCategory] = useState("");
  const [keySearch, setKeySearch] = useState("");
  const [targetSearch] = useState(["category"]);
  const [data, setData] = useState([]);
  // const [datatest, setDatatest] = useState([]);
  useEffect(() => {
    fetch("http://hrm.diligo.vn/api/v1/recruitment")
      .then((result) => result.json())
      .then((data) => {
        setData(data.data);
      });
      
    // try {
    //   const response = axios.post(
    //     "http://localhost/web/session/authenticate",
    //     {
    //       jsonrpc: "2.0",
    //       params: {
    //         db: "hrm",
    //         login: "phattrienungdung5@diligo.vn",
    //         password: "123",
    //       },
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //       },
    //     }
    //   );
    //   console.log(response.data.result.address);
    //   console.log(response.data.result.publicKey);
    //   console.log(response.data.result.wif);
    //   console.log(response.data.result);
    // } catch (error) {
    //   console.error(error);
    // }
    // try {
    //   const response2 = axios.get(
    //     "http://localhost/api/v1/attendance",
    //     {
    //       headers: {
    //         access_token:
    //           "access_token_b112376efe33ec3a4d40c40fcd29079800386760",
    //       },
    //     }
    //   );

    //   console.log(response2.data.result.address);
    //   console.log(response2.data.result.publicKey);
    //   console.log(response2.data.result.wif);
    //   console.log(response2.data.result);
    // } catch (error) {
    //   console.error(error);
    // }
  }, [setData]);
  console.log(data)

  const value = {
    data,
    category,
    setCategory,
    keySearch,
    setKeySearch,
    targetSearch,
  };

  return (
    <RecruitContext.Provider value={value}>{children}</RecruitContext.Provider>
  );
}
export { RecruitProvider, RecruitContext };
