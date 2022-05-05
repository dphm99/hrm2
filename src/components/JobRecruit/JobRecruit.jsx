import styles from "./JobRecruit.module.css"
import SearchIcon from '@mui/icons-material/Search';
function JobRecruits() {
    return (
        <div className="container">
            <div className={`${styles.head_recruit} row`}>
                <div className={`${styles.head_col} ${styles.head_input_search} col-lg-4 col-md-4 col-sm-6`}>
                    <input className={`${styles.head_input}`}
                        placeholder="Bạn đang tìm việc gì?"
                    />
                    <div className={styles.input_icon}>
                        <p className={styles.sudoSearch}></p>
                        <SearchIcon className={styles.searchIcon}></SearchIcon>
                    </div>
                </div>
                <div className={`${styles.head_col} ${styles.head_input_location} col-lg-4 col-md-4 col-sm-6`}>
                    
                    <input className={`${styles.head_input}`}
                        placeholder="Địa điểm làm việc"
                    />
                    <div className={styles.input_icon}>
                        <p className={`${styles.sudoLocation}`}></p>

                    </div>
                </div>
                <div className={`${styles.head_col} col-lg-4 col-md-4 col-sm-6`}>item </div>
            </div>
        </div>
    )
}
export default JobRecruits