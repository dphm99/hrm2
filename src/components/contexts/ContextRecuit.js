import React, { useState, createContext } from 'react'
const RecruitContext = createContext("")
 function RecruitProvider({ children }) {
  const [data, setData] = useState([])
  const [category, setCategory] = useState('')
  const [keySearch, setKeySearch] = useState('')
  React.useEffect(async () => {
    let isMounted = true;
    await fetch(`http://192.168.1.121:15000/api/v1/recruitment`)
      .then((results) => results.json())
      .then((data) => {
        if (isMounted) {
          setData(data.data);
        }
      });
    return () => {
      isMounted = false
    }
  }, []);
  const value = {
    data,
    category,
    setCategory,
    keySearch,
    setKeySearch
  }

  return (
    <RecruitContext.Provider value={value}>
      {children}
    </RecruitContext.Provider>
  )
}
export { RecruitProvider, RecruitContext }