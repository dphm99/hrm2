import { useState } from "react"
import styles from "./JobRecruit.module.css"
import Breadcrumbs from "../../components/BreadCrumb/Breadcrumb"
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import kinhdoanh from "../../assets/img/Job-Icon-svg/1kinhdoanh.svg";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import marketing from "../../assets/img/Job-Icon-svg/2marketing.svg";
// import nhasanxuat from "../../assets/img/Job-Icon-svg/3nhasanxuat.svg";
// import taichinh from "../../assets/img/Job-Icon-svg/4taichinh.svg";
// import nhansu from "../../assets/img/Job-Icon-svg/5nhansu.svg";
// import congnghe from "../../assets/img/Job-Icon-svg/6congnghe.svg";
// import nhaphanphoi from "../../assets/img/Job-Icon-svg/7nhaphanphoi.svg";
import banner1 from '../../assets/img/Vacancies/banner2.png';
function JobRecruits() {
    const breadcrumItem = [
        {
            href: "/",
            title: "Trang chủ",
            isActive: false
        },

        {
            href: "/vi-tri-tuyen-dung",
            title: "Vị trí tuyển dụng",
            isActive: true
        }

    ]

    return (
        <div className="container" >
            <Breadcrumbs
                breadItem={breadcrumItem}
            />
            <div className={`${styles.head_recruit} row`}>
                <div className={`${styles.head_col} ${styles.head_input_search} col-lg-4 col-md-6 col-sm-6`}>
                    <input className={`${styles.head_input}`}
                        placeholder="Bạn đang tìm việc gì?"
                    />
                    <div className={styles.input_icon}>
                        <p className={styles.sudoSearch}></p>
                        <SearchIcon className={styles.searchIcon}></SearchIcon>
                    </div>
                </div>
                <div className={`${styles.head_col} ${styles.head_input_location} col-lg-4 col-md-6 col-sm-6`}>

                    <input className={`${styles.head_input}`}
                        placeholder="Địa điểm làm việc"
                    />
                    <div className={styles.input_icon}>
                        <p className={`${styles.sudoLocation}`}></p>
                        <FmdGoodIcon className={styles.searchIcon}></FmdGoodIcon>
                    </div>
                </div>
                <div className={`${styles.head_col} col-lg-4 col-md-6 col-sm-6`}>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className={styles.head_checkbox} />
                        <div className="overflow-hidden">
                            <h6 className={styles.head_title}>Tìm việc gần bạn</h6>
                            <p className={styles.head_text}>(Áp dụng tại Hà Nội, TP.HCM, Bắc Ninh)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.wrap_all}>
                <div className="row">
                    <div className={`${styles.wrap_border} col-lg-4 col-md-4`}>
                        <div className={`${styles.wrapCategory}`}>
                            <Accordion >
                                <AccordionSummary
                                    className={styles.ul_listFilter}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Việc làm theo phòng ban</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <ul className={styles.ul_listFilter}>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text} >kinh doanh</a></li>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography >Việc làm theo vi trí địa lí</Typography>
                                </AccordionSummary  >
                                <AccordionDetails>
                                    <Typography>
                                        <ul className={styles.ul_listFilter}>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Việc làm theo chuyên môn</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <ul className={styles.ul_listFilter}>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Việc làm theo thời gian</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <ul className={styles.ul_listFilter}>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                            <li className={styles.filter_item}><a href="#" className={styles.filter_text}>kinh doanh</a></li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>


                            <div className={styles.joinJob}>
                                <h4 className={styles.joinText}>Ứng tuyển </h4>
                                <h4 className={styles.joinText}>theo chuyên môn</h4>

                            </div>
                            <div className={styles.wrap_banner}>
                                <img className={styles.banner_cate} src={banner1} alt='/' />
                                <div className={styles.overlay}>
                                    <div className={styles.overlay_center}>
                                        <h5>Banner tuyển TTS</h5>
                                        <h5> (Demo)</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.col_wrap} col-lg-8 col-md-8`}>
                        <div className={`${styles.wrapListJob}`}>
                            <div className={styles.head_listJob}>
                                <div className={`${styles.sortJob_sm} d-flex align-items-center justify-content-between`}>
                                    <p className={styles.listJob_count}>Tìm thấy <span className={styles.higlight_text}>1001</span> công việc</p>
                                    <div className={`${styles.wrap_selectSort} d-flex align-items-center`}>
                                        <p >Xếp theo:</p>
                                        <select className={styles.priority}>
                                            <option value="">Độ ưu tiên</option>
                                            <option value="">Xếp theo </option>
                                            <option value="">Xếp theo </option>
                                            <option value="">Xếp theo </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.listJob_item}>
                                <JobItem />
                                <JobItem />
                                <JobItem />
                            </div>

                        <div className={`${styles.pagination} d-flex align-items-center justify-content-center`}>
                            <KeyboardArrowLeftIcon className={styles.btn_pagi}></KeyboardArrowLeftIcon>
                            <p className={`${styles.btn_pagi} ${styles.btn_pagiActive}`}>1</p>
                            <p className={styles.btn_pagi}>2</p>
                            <p className={styles.btn_pagi}>3</p>
                            <p className={styles.btn_pagi}>4</p>
                            <p className={styles.btn_pagi}>5</p>
                            <p className={styles.btn_pagi}>...</p>
                            <p className={styles.btn_pagi}>29</p>
                            <p className={styles.btn_pagi}>30</p>
                            <ChevronRightIcon className={styles.btn_pagi}></ChevronRightIcon>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.banner_recruit}>
                <img className={styles.banner_foot} src="https://hdwallsource.com/img/2014/8/keyboard-background-38996-39892-hd-wallpapers.jpg" alt="" />
                <div className={styles.overlay}>
                    <div className={styles.overlay_center}>
                        <h5>Banner tuyển dụng</h5>
                        <h5> (Demo)</h5>
                    </div>
                </div>
            </div>
        </div>

    )
}
function JobItem() {
    const [active, setActive] = useState(false);

    return (
        <>
            <div className={active ? `${styles.warpItem} ${styles.active_item}`
                : `${styles.warpItem}`}
                onMouseOut={e => setActive(false)}
                onMouseOver={e => setActive(true)}
            >
                <div className={`${styles.head_item} d-flex align-items-center`}>
                    <div className={styles.warpIcon_job}>
                        <img className={styles.icon_job} src={kinhdoanh} alt="" />
                    </div>
                    <div className="overflow-hidden">
                        <h5 className={styles.title_job}>1.Nhân viên kinh doanh (nhãn hàng LIPZO) </h5>
                        <p className={`${styles.text_job} `}>Số lượng 101 người | Nơi làm việc: Hà Nội TP.HCM và 62 tỉnh thành khác</p>
                        <p className={styles.text_job}><AttachMoneyIcon
                            className={`${styles.money_icon} rounded-circle`}
                        ></AttachMoneyIcon> 800.000 - 1500.000 ++VNĐ</p>
                    </div>
                </div>
                <div className={styles.foot_item}>
                    <div className={`d-flex justify-content-between align-items-center ${styles.foot_text}`}>
                        <p className={styles.text_job}>Ngày đăng tuyển 27/04/2022</p>

                        <p className={styles.text_job}>
                            <span className={styles.foot_space}> | </span>
                            Ngày hết hạn 27/04/2030</p>
                        <button className={styles.apply_job}>Ứng tuyển ngay</button>
                    </div>
                </div>
            </div>


        </>
    )
}
export default JobRecruits