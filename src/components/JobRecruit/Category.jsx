import React, { useState } from "react";
import styles from "./JobRecruit.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import banner1 from "../../assets/img/Vacancies/banner2.png";
import { jobCategory, timeWork } from "./JobRecruit";
import { Link } from "react-router-dom";

function Category({ category, address, industry, timing }) {
  const [job, setJob] = useState(0);
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={`${styles.wrapCategory}`}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
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
          <Typography className={styles.ul_listFilterbot}>
            <li className={styles.filter_item}>
              <a
                onClick={() => setJob(-1)}
                href={`#`}
                className={
                  job === -1
                    ? `${styles.filter_text} ${styles.ftActive}`
                    : `${styles.filter_text}`
                }
              >
                Tất cả
              </a>
            </li>
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
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          className={styles.ul_listFilter}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.accordi_title}>
            Việc làm theo vị trí địa lý
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
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
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
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
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
            {timing.map(
              (ele, index) =>
                ele && (
                  <li className={styles.filter_item} key={index}>
                    <a href={`?timing=${ele}`} className={styles.filter_text}>
                      {timeWork.find((e) => e.short === ele).name}
                    </a>
                  </li>
                )
            )}
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
            <h5 style={{ fontWeight: "bold" }}>Ứng tuyển ngay</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;
