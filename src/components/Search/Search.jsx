import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";




import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Search() {

  const [age, setAge] = React.useState('');

  const handleChangeLocations = (event) => {
    setAge(event.target.value);
  };

  const [userInput, setUserInput] = useState("");
  const [city, setCity] = useState([]);
  const [currentCity, setCurrentCity] = useState("");
  const changeCity = (city) => {
    setCurrentCity(city);
  };

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
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120,maxHeight: 100 }}>
        {/* <InputLabel id="demo-simple-select-filled-label">Tìm việc theo vị trí</InputLabel> */}
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChangeLocations}
          
        > 
        {city.map((ele, index)=> {
          return <MenuItem key={index} value={10}>{ele.name.replace("Tỉnh ", "").replace("Thành phố ", "")}</MenuItem>
        })} 
        </Select>
      </FormControl>
            {/* <select
              name="city"
              className="selectpicker"
              id="cities"
              defaultValue={"disabled"}
              onChange={(event) => changeCity(event.target.value)}
              value={currentCity}
            >
              <option  default value="">
                Tìm việc theo vị trí
              </option>
              {city &&
                city.map((e, index) => (
                  <option
                    key={index}
                    value={e.name
                      .replace("Tỉnh ", "")
                      .replace("Thành phố ", "")}
                  >
                    {e.name.replace("Tỉnh ", "").replace("Thành phố ", "")}
                  </option>
                ))}
            </select> */}
            
          </div>
          <button type="submit">Tìm kiếm</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
