import React from "react";
import styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Search() {
  return (
    <div className={`container ${styles.SearchBox}`}>
      <h3>Bạn đang tìm công việc gì?</h3>
      <form>
        <div className={styles.SearchWrapper}>
          <div className={styles.InputBox} style={{position: 'relative'}}>
            <SearchIcon style={{position: 'absolute',color: '#ccc',margin:"4px"}}/>
            <input type="text" placeholder="Nhập tên công việc yêu thích?" />
          </div>
          <div className={styles.SelectWrapper} style={{position: 'relative'}}>
            <LocationOnIcon style={{position: 'absolute',color: '#ccc',margin:"4px"}}/>
            <select type="select">
              <option>1</option>
            </select>
          </div>
          <button type="submit">Tìm kiếm</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
