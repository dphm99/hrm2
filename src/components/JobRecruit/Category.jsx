import { useState } from "react";
import styles from "./JobRecruit.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import banner1 from "../../assets/img/Vacancies/banner2.png";
import { jobCategory } from "./JobRecruit";
import { Link } from 'react-router-dom'


function Category({ category, address, industry }) {
  const [job, setJob] = useState(0);
  return (
    <div className={`${styles.wrapCategory}`}>
      <Accordion>
        <AccordionSummary
          className={styles.ul_listFilter}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.accordi_title}>
            Việc làm theo phòng ban
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography className={styles.ul_listFilterbot} >
            {category.map((depar, index) => (
              <li key={index} className={styles.filter_item}>
                <a
                  onClick={(e) => setJob(index)}
                  href={`#${depar}`}
                  className={
                    job === index
                      ? `${styles.filter_text} ${styles.ftActive}`
                      : `${styles.filter_text}`
                  }
                >
                  {jobCategory.find((ele) => ele.short === depar).name}
                </a>
              </li>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={styles.ul_listFilter}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.accordi_title}>
            Việc làm theo vi trí địa lý
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography className={styles.ul_listFilterbot}>
            {address.map((depar, index) => (
              <li key={index} className={styles.filter_item}>
                <a href={`?city=${depar}`} className={styles.filter_text}>
                  {depar}
                </a>
              </li>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={styles.ul_listFilter}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.accordi_title}>
            Việc làm theo chuyên môn
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.ul_listFilterbot}>
            {industry.map(
              (ele, index) =>
                ele && (
                  <li className={styles.filter_item} key={index}>
                    <a href={`?major=${ele}`} className={styles.filter_text}>
                      {ele}
                    </a>
                  </li>
                )
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={styles.ul_listFilter}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.accordi_title}>
            Việc làm theo thời gian
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.ul_listFilterbot}>
            <li className={styles.filter_item}>
              <a href="/" className={styles.filter_text}>
                kinh doanh
              </a>
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <div className={styles.joinJob}>
        <Link to="/ung-tuyen-nang-luc">
          <h4 className={styles.joinText}>Ứng tuyển </h4>
          <h4 className={styles.joinText}>theo chuyên môn</h4>
        </Link>
      </div>
      <div className={styles.wrap_banner}>
        <img className={styles.banner_cate} src={banner1} alt="/" />
        <div className={styles.overlay}>
          <div className={styles.overlay_center}>
            <h5>Banner tuyển TTS</h5>
            <h5> (Demo)</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;
