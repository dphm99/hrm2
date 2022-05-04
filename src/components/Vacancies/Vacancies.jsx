import styles from "./Vancancies.module.css"
import { useState} from "react"
import kinhdoanh from "../../assets/img/Job-Icon-svg/1kinhdoanh.svg";
import marketing from "../../assets/img/Job-Icon-svg/2marketing.svg";
import nhasanxuat from "../../assets/img/Job-Icon-svg/3nhasanxuat.svg";
import taichinh from "../../assets/img/Job-Icon-svg/4taichinh.svg";
import nhansu from "../../assets/img/Job-Icon-svg/5nhansu.svg";
import congnghe from "../../assets/img/Job-Icon-svg/6congnghe.svg";
// import nhaphanphoi from "../../assets/img/Job-Icon-svg/7nhaphanphoi.svg";
function Vancancies() {
    const listVancanies = [
        {
            id: 1,
            image: kinhdoanh,
            vancanies: "Nhân viên kinh doanh",
            address: "Hà nội",
            minSalary: 8000000,
            maxSalary: 15000000
        },
        {
            id: 2,
            image: marketing,
            vancanies: "Trường ekip Truyền thông",
            address: "Hà nội",
            minSalary: 10000000,
            maxSalary: 20000000
        },
        {
            id: 3,
            image: nhasanxuat,
            vancanies: "Công nhân đóng gói",
            address: "Bắc Ninh",
            minSalary: 6000000,
            maxSalary: 7000000
        },
        {
            id: 4,
            image: taichinh,
            vancanies: "Nhân viên kinh doanh",
            address: "Hà nội",
            minSalary: 8000000,
            maxSalary: 15000000
        },
        {
            id: 5,
            image: nhansu,
            vancanies: "Thiết kế 2D",
            address: "Hà nội",
            minSalary: 12000000,
            maxSalary: 14000000
        },
        {
            id: 6,
            image: congnghe,
            vancanies: "Quản lí chuỗi cung ứng",
            address: "Bắc Ninh",
            minSalary: 12000000,
            maxSalary: 14000000
        },
        {
            id: 7,
            image: kinhdoanh,
            vancanies: "Nhân viên kinh doanh",
            address: "Hà nội",
            minSalary: 8000000,
            maxSalary: 15000000
        },
        {
            id: 8,
            image: kinhdoanh,
            vancanies: "Nhân viên kinh doanh",
            address: "Hà nội",
            minSalary: 8000000,
            maxSalary: 15000000
        },
        {
            id: 9,
            image: kinhdoanh,
            vancanies: "Nhân viên kinh doanh",
            address: "Hà nội",
            minSalary: 8000000,
            maxSalary: 15000000
        },
    ]
    const handleOnclick = () => {
        const a = document.querySelector(".vancancieBtn")
    }
    return (
        <div className="container">
            <h3 className={styles.title}>Vị trí tuyển dụng nổi bật</h3>
            <div className={`row`}>
                {listVancanies.map((vancancies, index) => (
                    <VancaniesItem
                        key={index}
                        index={index}
                        props={vancancies} />
                ))}
            </div>
            <div className={styles.overlay}>
            <button
            onClick={handleOnclick()}
            className={styles.vancanciesBtn}>Xem thêm</button>
            </div>
        </div>
    )
}
function formatNumber(a, b, c, d) {
    var e = isNaN(b = Math.abs(b)) ? 2 : b;
    b = void 0 === c ? "," : c;
    d = void 0 === d ? "," : d;
    c = 0 > a ? "-" : "";
    var g = parseInt(a = Math.abs(+a || 0).toFixed(e)) + "",
        n = 3 < (n = g.length) ? n % 3 : 0;
    return c + (n ? g.substr(0, n) + d : "") + g.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + d) + (e ? b + Math.abs(a - g).toFixed(e).slice(2) : "")
}
function VancaniesItem({ props, index }) {
   const [active,setActive] =useState(false)
    return (
        <div className={
        active ? `${styles.containerItem} ${styles.active} col-sm-6 col-md-6 col-lg-4`
        :`${styles.containerItem}  col-sm-6 col-md-6 col-lg-4`}
        onMouseOver={e=>setActive(true)}
        onMouseOut={e=>setActive(false)}
        >
            <div className={`${styles.vancanciesGroup} d-flex`}>
                <div className={styles.containerImage}>
                <img className={styles.vancancieImage} src={props.image} alt={props.vancanies} />
                </div>
                <div className={styles.vancanciesText}>
                    <h4 className={styles.vancancieTitle}>{props.vancanies}</h4>
                    <p className={styles.vancancieAddress}>Tại: {props.address}</p>
                    <p className={styles.vancancieSalary}>{formatNumber(props.minSalary, 0, ",", ".")} - {formatNumber(props.maxSalary, 0, ",", ".")} ++VNĐ</p>
                </div>
            </div>
        </div>

    )
}
export default Vancancies