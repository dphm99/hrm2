import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Search() {
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
    <div className={`container ${styles.SearchBox}`}>
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
            style={{ position: "relative" }}
          >
            <LocationOnIcon
              style={{ position: "absolute", color: "#ccc", margin: "4px" }}
            />
            <select
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
            </select>
          </div>
          <button type="submit">Tìm kiếm</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
