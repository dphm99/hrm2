import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SelectPicker } from "rsuite";

function Search() { 
  const [age, setAge] = React.useState(''); 

  const [userInput, setUserInput] = useState("");
  const [city, setCity] = useState([]); 


  const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  };
  const postAPI =
    "https://api-nextcrm.nextcrm.vn/api/public/provinces?search[parent_id]=0";

  useEffect(() => {
    fetch(postAPI)
      .then((result) => result.json())
      .then((city) => {
        setCity(city.data);
        // console.log(city.data);
      });
  }, []);

  return (
    <div className={`container d-none d-md-block ${styles.SearchBox}`}>
      <h3>Bạn đang tìm công việc gì?</h3>
      <form action="/tuyen-dung/">
        <div className={styles.SearchWrapper}>
          <div className={styles.InputBox} style={{ position: "relative" }}>
            <SearchIcon
              style={{ position: "absolute", color: "#ccc", margin: "4px" }}
            />
            <input
              type="text"
              placeholder="Nhập tên công việc yêu thích?"
              name="q"
              value={userInput}
              onChange={handleChange}
            />
          </div>
          <div
            className={styles.SelectWrapper}
            style={{ position: "relative",height: "48px",backgroundColor: "#fff"}}
          >
            <LocationOnIcon
              style={{ position: "absolute", color: "#ccc", margin: "4px" }}
            /> 
            <input
              type="text"
              placeholder="Nhập tên công việc yêu thích?"
              name="city"
              value={age} 
              style={{display:'none'}}
            />
                  <SelectPicker
                    onSelect={(e) => {
                      setAge(e)
                    }}  
                    placeholder="Tìm kiếm vị trí"
                    data={city.map((ele) => ({ label: ele.name.replace("Tỉnh ", "").replace("Thành phố ", ""), value: ele.name.replace("Tỉnh ", "").replace("Thành phố ", "") }))}
                    menuStyle={{ height: "200px" }}
                    searchable={false}
                    block
                  />
         
            
          </div>
          <button type="submit">Tìm kiếm</button>

        </div>
      </form> 
    </div>
  );
}

export default Search;
