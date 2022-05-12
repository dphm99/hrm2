import React, { useState, useEffect, createContext } from "react";
const RecruitContext = createContext("");
function RecruitProvider({ children }) {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [keySearch, setKeySearch] = useState("");
  const [targetSearch] = useState(['industry'])
  useEffect(() => {
    fetch("http://test.diligo.vn:15000/api/v1/recruitment")
      .then((result) => result.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  const value = {
    data,
    category,
    setCategory,
    keySearch,
    setKeySearch,
    targetSearch
  };

  return (
    <RecruitContext.Provider value={value}>{children}</RecruitContext.Provider>
  );
}
export { RecruitProvider, RecruitContext };
