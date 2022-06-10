import React, { useEffect, useState, useRef } from "react";
import filesCV from "../../assets/files/CV Diligo Holdings.doc";
import "./RecruitPosition.scss";
import styles from "./RecruitPosition.module.css";
import Header2 from "../../components/Header/Header2";
import Slogan from "../../components/Header/Slogan";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/BreadCrumb/Breadcrumb";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";

const steps = [
  {
    label: "Thông tin cá nhân",
    description: `Vui lòng nhập đầy đủ thông tin bên dưới`,
  },
  {
    label: "Kỹ năng chuyên môn",
    description: "Kỹ năng chuyên môn",
  },
  {
    label: "Kinh nghiệm làm việc",
    description: `Kinh nghiệm làm việc`,
  },
  {
    label: "Ứng tuyển",
    description: `Xác nhận ứng tuyển`,
  },
];

function RecruitPosition() {
  const [checkList, setCheckList] = React.useState({
    gender: "male",
    status: "single",
    fullname: "",
    dob: "",
    email: "",
    phone: "",
    city: "",
    housenumber: "",
    street: "",
    district: "",
    ccid: "",
    skill: "",
    level: "Trung học",
    exp: "under1"
  });
  const [fileName, setFileName] = useState("");

  const inputFileRef = useRef(null);

  const onFileChange = (e) => {
    setFileName(e.target.files[0].name);
  };
  const onBtnClick = () => {
    inputFileRef.current.click();
  };
  const [activeStep, setActiveStep] = React.useState(0);

  const [errors, setErrors] = useState([]);
  const [errors2, setErrors2] = useState([]);

  const handleNext = (event) => {
    event.preventDefault();
    setCheckList({
      ...checkList,
      fullAddress: `${checkList.housenumber} ${checkList.street} ${checkList.district} ${checkList.city}`,
    });
    const errors = validate();
    if (errors.length > 0) {
      setErrors(errors);
      return;
    }
    event.preventDefault();

    const errors2 = validate2();
    if (errors2.length > 0) {
      setErrors2(errors2);
      return;
    }
    console.log(checkList);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleDone = () => {
    console.log("done");
  };

  const breadcrumItem = [
    {
      href: "/",
      title: "Trang chủ",
      isActive: false,
    },

    {
      href: "/tuyen-dung",
      title: "Ứng tuyển",
      isActive: false,
    },
    {
      href: "/ung-tuyen-nang-luc",
      title: "Ứng tuyển theo năng lực",
      isActive: true,
    },
  ];
  const [header, setHeader] = useState(true);

  function validate() {
    const { fullname, dob, phone, ccid, email, skill } = checkList;
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];

    if (fullname.length === "") {
      errors.push("Tên là bắt buộc");
    }
    if (skill.length === "") {
      errors.push("Kỹ năng chuyên môn là bắt buộc");
    }
    if (ccid.length < 5) {
      errors.push("Tên là bắt buộc");
    }
    if (phone.length < 6) {
      errors.push("Số điện thoại là bắt buộc");
    }
    if (email.length === "") {
      errors.push("Email là bắt buộc");
    }
    if (email.split("").filter((x) => x === "@").length !== 1) {
      errors.push("Email phải bao gồm @");
    }
    if (email.indexOf(".") === -1) {
      errors.push("Email phải có ít nhất một dấu '.'");
    }
    if (dob.length < 8) {
      errors.push("Ngày sinh là bắt buộc");
    }
    return errors;
  }
  function validate2() {
    const { skill } = checkList;
    // we are going to store errors for all fields
    // in a signle array
    const errors2 = [];
    if (skill.length === "") {
      errors2.push("Kỹ năng chuyên môn là bắt buộc");
    }
    return errors2;
  }

  const handleChange = (event) => {
    event.persist();
    setCheckList({ ...checkList, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setHeader(false);
    } else {
      setHeader(true);
    }
  }, []);
  // register,
  const handleSubmit = (data) => alert(JSON.stringify(data));
  return (
    <>
      <Helmet>
        <title>Ứng tuyển theo năng lực</title>
        <meta name="description" content="Ứng tuyển theo năng lực - Diligo" />
      </Helmet>
      {!header && <Header />}
      {header && <Header2 />}
      <Slogan />
      <div
        className={`${styles.main} container`}
        style={{ margin: "90px auto 90px" }}
      >
        <Breadcrumbs separator=">" breadItem={breadcrumItem} />
        <div className={`RecruitPosition`}>
          <Box sx={{ width: "40%" }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === steps.length - 1 ? (
                        <Typography variant="caption">
                          Bước cuối cùng
                        </Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    {index === 0 ? (
                      <>
                        <form className={`${styles.FormPosition}`}>
                          {errors.map((error) => (
                            <p className={styles.errors} key={error}>
                              Lỗi: {error}
                            </p>
                          ))}
                          <div className={`${styles.inputRadio} `}>
                            <div className={`${styles.inputRadioSide}`}>
                              <div className={`${styles.inputRadioItemTitle}`}>
                                Giới tính <span>*</span>
                              </div>
                              <div className={`${styles.inputRadioItems}`}>
                                <div
                                  className={`${styles.inputRadioItem}`}
                                  onClick={() =>
                                    setCheckList({
                                      ...checkList,
                                      gender: "male",
                                    })
                                  }
                                >
                                  <p>
                                    <input
                                      type="radio"
                                      id="sex"
                                      name="radio-sex"
                                      value="male"
                                      defaultChecked={
                                        checkList.gender === "male"
                                          ? true
                                          : false
                                      }
                                      className={styles.inputRadioButton}
                                      required
                                    />
                                    <label
                                      className={styles.labelRadio}
                                      for="sex"
                                    >
                                      Nam
                                    </label>
                                    <div class="invalid-feedback">
                                      Please provide a valid city.
                                    </div>
                                  </p>
                                </div>
                                <div
                                  className={`${styles.inputRadioItem}`}
                                  onClick={() =>
                                    setCheckList({
                                      ...checkList,
                                      gender: "female",
                                    })
                                  }
                                >
                                  <p>
                                    <input
                                      required
                                      type="radio"
                                      id="sex"
                                      name="radio-sex"
                                      value={
                                        checkList.gender === "female"
                                          ? true
                                          : false
                                      }
                                      className={styles.inputRadioButton}
                                    />
                                    <label
                                      className={styles.labelRadio}
                                      for="sex"
                                    >
                                      Nữ
                                    </label>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className={`${styles.inputRadioSide} `}>
                              <div className={`${styles.inputRadioItemTitle}`}>
                                Tình trạng <span>*</span>
                              </div>
                              <div className={`${styles.inputRadioItems}`}>
                                <div
                                  className={`${styles.inputRadioItem}`}
                                  onClick={() =>
                                    setCheckList({
                                      ...checkList,
                                      status: "single",
                                    })
                                  }
                                >
                                  <p>
                                    <input
                                      required
                                      type="radio"
                                      id="alone"
                                      name="radio-relation"
                                      value="alone"
                                      defaultChecked={
                                        checkList.status === "single"
                                          ? true
                                          : false
                                      }
                                      className={styles.inputRadioButton}
                                    />
                                    <label
                                      className={styles.labelRadio}
                                      for="alone"
                                    >
                                      Độc thân
                                    </label>
                                  </p>
                                </div>
                                <div
                                  className={`${styles.inputRadioItem}`}
                                  onClick={() =>
                                    setCheckList({
                                      ...checkList,
                                      status: "married",
                                    })
                                  }
                                >
                                  <p>
                                    <input
                                      required
                                      type="radio"
                                      id="married"
                                      name="radio-relation"
                                      value={
                                        checkList.status === "married"
                                          ? true
                                          : false
                                      }
                                      className={styles.inputRadioButton}
                                    />
                                    <label
                                      className={styles.labelRadio}
                                      style={{ fontSize: "15px" }}
                                      for="married"
                                    >
                                      Đã kết hôn
                                    </label>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.input}>
                            <label htmlFor="name">
                              Họ và tên đầy đủ <span>*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="fullname"
                              onChange={handleChange}
                              required
                              value={checkList.fullname}
                            />
                          </div>
                          <div className={styles.inputGroup}>
                            <div className={styles.inputGroupLine}>
                              <div className={styles.input}>
                                <label htmlFor="dob">
                                  Ngày tháng năm sinh <span>*</span>
                                </label>
                                <input
                                  name="dob"
                                  type="date"
                                  id="dob"
                                  required
                                  onChange={handleChange}
                                  value={checkList.dob}
                                />
                              </div>
                              <div className={styles.input}>
                                <label htmlFor="ccid">
                                  Số CCCD / CMND <span>*</span>
                                </label>
                                <input
                                  name="ccid"
                                  type="text"
                                  id="ccid"
                                  required
                                  onChange={handleChange}
                                  value={checkList.ccid}
                                />
                              </div>
                            </div>
                            <div className={styles.inputGroupLine}>
                              <div className={styles.input}>
                                <label htmlFor="phone">
                                  Số điện thoại <span>*</span>
                                </label>
                                <input
                                  name="phone"
                                  type="number"
                                  id="phone"
                                  required
                                  onChange={handleChange}
                                  value={checkList.phone}
                                />
                              </div>
                              <div className={styles.input}>
                                <label htmlFor="email">
                                  Email <span>*</span>
                                </label>
                                <input
                                  name="email"
                                  type="text"
                                  id="email"
                                  required
                                  onChange={handleChange}
                                  value={checkList.email}
                                />
                              </div>
                            </div>
                            <div className={styles.inputGroupAddress}>
                              <p className={styles.inputAddressTitle}>
                                Nơi ở hiện nay
                              </p>
                              <div className={styles.inputGroupLine}>
                                <div className={styles.input}>
                                  <input
                                    type="text"
                                    id="province"
                                    name="city"
                                    placeholder="Tỉnh/Thành phố"
                                    onChange={handleChange}
                                    value={checkList.city}
                                  />
                                </div>
                                <div className={styles.input}>
                                  <input
                                    type="text"
                                    id="district"
                                    name="district"
                                    placeholder="Quận/Huyện"
                                    onChange={handleChange}
                                    value={checkList.district}
                                  />
                                </div>
                              </div>
                              <div className={styles.inputGroupLine}>
                                <div className={styles.input}>
                                  <input
                                    type="text"
                                    id="street"
                                    name="street"
                                    placeholder="Phường/ Xã"
                                    onChange={handleChange}
                                    value={checkList.street}
                                  />
                                </div>
                                <div className={styles.input}>
                                  <input
                                    type="text"
                                    id="housenumber"
                                    name="housenumber"
                                    placeholder="Số nhà"
                                    onChange={handleChange}
                                    value={checkList.housenumber}
                                  />
                                </div>
                              </div>
                              <div className={styles.input}>
                                <label htmlFor="link">
                                  Link Facebook | KinkedIn | Instagram
                                </label>
                                <input
                                  name=""
                                  type="text"
                                  id="link"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </>
                    ) : index === 1 ? (
                      <form className={`${styles.FormPosition}`}>
                        {errors2.map((error) => (
                          <p className={styles.errors} key={error}>
                            Lỗi: {error}
                          </p>
                        ))}
                        <div className={styles.input}>
                          <label htmlFor="level">
                            Trình độ học vấn <span>*</span>
                          </label>
                          <select
                            name="level"
                            id="level"
                            required
                            style={{ padding: "10px" }}
                            defaultChecked={checkList.level}
                            onChange={handleChange}
                            value={checkList.level}
                          >
                            <option
                              value="TH"
                              onClick={() =>
                                setCheckList({
                                  ...checkList,
                                  level: "Trung học",
                                })
                              }
                            >
                              Trung học
                            </option>
                            <option
                              onClick={() =>
                                setCheckList({
                                  ...checkList,
                                  level: "THPT",
                                })
                              }
                              value="THPT"
                            >
                              Trung học phổ thông
                            </option>
                            <option
                              onClick={() =>
                                setCheckList({
                                  ...checkList,
                                  level: "CD/DH",
                                })
                              }
                              value="CD/DH"
                            >
                              Đại học / Cao đẳng
                            </option>
                          </select>
                        </div>
                        <div className={styles.input}>
                          <label htmlFor="skill">
                            Kỹ năng chuyên môn <span>*</span>
                          </label>
                          <textarea
                            name="skill"
                            cols="40"
                            rows="5"
                            required
                            onChange={handleChange}
                            value={checkList.skill}
                            style={{ height: "200px", padding: "10px" }}
                            placeholder="Kỹ năng chuyên môn chính"
                          ></textarea>
                        </div>
                        <div className={styles.input}>
                          <label htmlFor="other">Các kỹ năng khác nếu có</label>
                          <textarea
                            type="option"
                            name="subskill"
                            required
                            onChange={handleChange}
                            value={checkList.subskill}
                            style={{ height: "200px", padding: "10px" }}
                            placeholder="Liệt kê thêm các kỹ năng khác (kỹ năng mềm, kỹ năng chuyên môn,...) nếu có. Việc thông thạo nhiều kỹ năng sẽ giúp hồ sơ của bạn được xem xét và ưu tiên hơn"
                          />
                        </div>
                      </form>
                    ) : index === 2 ? (
                      <form className={`${styles.FormPosition}`}>
                        <div className={`${styles.inputRadio} `}>
                          <div
                            className={`${styles.inputRadioSide}`}
                            style={{ width: "100%" }}
                          >
                            <div className={`${styles.inputRadioItemTitle}`}>
                              Số năm kinh nghiệm <span>*</span>
                            </div>
                            <div className={`${styles.inputRadioItems}`}>
                              <div
                                className={`${styles.inputRadioItem}`}
                                onClick={() =>
                                  setCheckList({
                                    ...checkList,
                                    exp: "under1",
                                  })
                                }
                              >
                                <p>
                                  <input
                                    type="radio"
                                    id="under1"
                                    name="radio-exp"
                                    value="under1"
                                    defaultChecked={
                                      checkList.exp === "under1" ? true : false
                                    }
                                    className={styles.inputRadioButton}
                                    required
                                  />
                                  <label
                                    className={styles.labelRadio}
                                    for="under1"
                                  >
                                    {`< 1 năm`}
                                  </label>
                                </p>
                              </div>
                              <div
                                className={`${styles.inputRadioItem}`}
                                onClick={() =>
                                  setCheckList({
                                    ...checkList,
                                    exp: "1to2",
                                  })
                                }
                              >
                                <p>
                                  <input
                                    required
                                    type="radio"
                                    id="1to2"
                                    name="radio-exp"
                                    value={
                                      checkList.exp === "1to2" ? true : false
                                    }
                                    className={styles.inputRadioButton}
                                  />
                                  <label
                                    className={styles.labelRadio}
                                    for="1to2"
                                  >
                                    {`1-2 năm`}
                                  </label>
                                </p>
                              </div>
                              <div
                                className={`${styles.inputRadioItem}`}
                                onClick={() =>
                                  setCheckList({
                                    ...checkList,
                                    exp: "3to4",
                                  })
                                }
                              >
                                <p>
                                  <input
                                    required
                                    type="radio"
                                    id="3to4"
                                    name="radio-exp"
                                    value={
                                      checkList.exp === "3to4" ? true : false
                                    }
                                    className={styles.inputRadioButton}
                                  />
                                  <label
                                    className={styles.labelRadio}
                                    for="3to4"
                                  >
                                    {`3-4 năm`}
                                  </label>
                                </p>
                              </div>
                              <div
                                className={`${styles.inputRadioItem}`}
                                onClick={() =>
                                  setCheckList({
                                    ...checkList,
                                    exp: "5more",
                                  })
                                }
                              >
                                <p>
                                  <input
                                    required
                                    type="radio"
                                    id="exp"
                                    name="radio-exp"
                                    value={
                                      checkList.exp === "5more" ? true : false
                                    }
                                    className={styles.inputRadioButton}
                                  />
                                  <label
                                    className={styles.labelRadio}
                                    for="exp"
                                  >
                                    {`5+ năm`}
                                  </label>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className={styles.input}>
                          <label htmlFor="link">
                            Vị trí công việc cao nhất từng làm <span>*</span>
                          </label>
                          <input
                            type="text"
                            id="link"
                            name="oldjob"
                            value={checkList.oldjob}
                            placeholder="Ghi rõ vị trí cao nhất từng làm"
                            onChange={handleChange}
                          />
                        </div>
                        <div className={styles.input}>
                          <label htmlFor="link">
                            Thông tin nơi làm việc gần nhất <span>*</span>
                          </label>
                          <input
                            type="text"
                            id="link"
                            name="oldcompany"
                            value={checkList.oldcompany}
                            placeholder="Tên công ty"
                            onChange={handleChange}
                          />
                          <input
                            type="text"
                            id="link"
                            placeholder="Địa chỉ"
                            name="oldaddress"
                            value={checkList.oldaddress}
                            onChange={handleChange}
                          />
                          <input
                            type="text"
                            id="link"
                            value={checkList.oldmajor}
                            placeholder="Ngành nghề, lĩnh vực"
                            name="oldmajor"
                            onChange={handleChange}
                          />
                        </div>
                      </form>
                    ) : (
                      <form style={{ textAlign: "center" }}>
                        <div className={styles.inputFile}>
                          <input
                            type="file"
                            id="file"
                            ref={inputFileRef}
                            onChange={onFileChange}
                            name="file"
                            accept="image/*,video/*,.pdf,.doc, .docx"
                            style={{ display: "none" }}
                          />
                          <div
                            onClick={onBtnClick}
                            className={`${styles.buttonSubmit} ${styles.active}`}
                            style={{ cursor: "pointer" }}
                          >
                            Đính kèm file CV của bạn
                          </div>
                          {`Bạn đang gửi CV: ${fileName}`}
                        </div>
                        <div>
                          <p className="m-0">
                            {" "}
                            {`hoặc sử dụng biểu mẫu CV của Diligo`}{" "}
                          </p>
                          <p className="mt-1">
                            {" "}
                            {`Ấn `}
                            <a
                              href={filesCV}
                              style={{
                                color: "#c50c0c",
                                textDecoration: "none",
                              }}
                              download
                            >
                              vào đây
                            </a>{" "}
                            để tải về
                          </p>
                        </div>
                        {fileName !== "" ? (
                          <div
                            className={`${styles.buttonSubmit} ${styles.active}`}
                            style={{ cursor: "pointer" }}
                          >
                            ỨNG TUYỂN
                          </div>
                        ) : (
                          <div
                            className={`${styles.buttonSubmit} ${styles.active}`}
                            style={{
                              cursor: "pointer",
                              backgroundColor: "#d7cfcf",
                            }}
                          >
                            ỨNG TUYỂN
                          </div>
                        )}

                        {/* <button>Quay lại</button> */}

                        {/* <div className={styles.noCV}>
                    <a href={filesCV}  download>
                      Tải CV tiêu chuẩn của Diligo
                    </a>
                  </div> */}
                      </form>
                    )}
                    <Box sx={{ mb: 2 }}>
                      <div>
                        {index < steps.length ? (
                          <>
                            <Button
                              variant="contained"
                              onClick={handleNext}
                              sx={{ mt: 1, mr: 1 }}
                              onSubmit={handleSubmit}
                            >
                              {index === steps.length - 1
                                ? "Hoàn thành"
                                : "Bước tiếp theo"}
                            </Button>
                            <Button
                              disabled={index === 0}
                              onClick={handleBack}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              Quay lại
                            </Button>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography></Typography>
                <Button onClick={handleDone} sx={{ mt: 1, mr: 1 }}>
                  Hoàn thành
                </Button>
              </Paper>
            )}
          </Box>
        </div>

        {activeStep === 3 ? (
          <div
            className={` container ${styles.desc}`}
            style={{
              width: "40%",
              marginTop: "2rem",
              color: "rgb(145 145 145)",
            }}
          >
            <ul>
              Lưu ý khi đăng CV
              <li>
                1. Chỉ đăng tải file CV dưới dạng PDF, có kích thước không vượt
                100mb
              </li>
              <li>2. Lưu tên cần đảm bảo thực hiện theo thứ tự:</li>
              <p className="text-center">
                CV_[Tên vị trí ứng tuyển]_Họ tên đầy đủ
              </p>
              <p className="text-center">Ví dụ: CV_TPHCNS_Nguyễn Văn A</p>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </>
  );
}

export default RecruitPosition;
