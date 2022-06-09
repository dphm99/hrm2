import React, { useEffect, useState, useRef } from "react";
// import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
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

import { useForm } from "react-hook-form";
// import { RecruitContext } from "../../components/contexts/ContextRecuit";

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
  });

  const [fileName, setFileName] = useState("");

  const inputFileRef = useRef(null);

  const onFileChange = (e) => {
    /*Selected files data can be collected here.*/
    setFileName(e.target.files[0].name);
  };
  const onBtnClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click();
  };
  // React.useEffect(() => {
  //   if(name !== '' && phone !=="" && email!=="") {
  //     handleLogin()
  //   }
  // },[])

  // const { getValues } = useForm({
  //   mode: "onChange",
  // });
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleDone = () => {
    setActiveStep(0);
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
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setHeader(false);
    } else {
      setHeader(true);
    }
  }, []);
  // register,
  const { handleSubmit } = useForm({});
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));
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
                        <form className={`${styles.FormPosition}`} novalidate>
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
                              onChange={(e) =>
                                setCheckList({
                                  ...checkList,
                                  fullname: e.target.value,
                                })
                              }
                              required
                            />
                            <div class="invalid-feedback">
                              Please provide a valid city.
                            </div>
                          </div>
                          <div className={styles.inputGroup}>
                            <div className={styles.inputGroupLine}>
                              <div className={styles.input}>
                                <label htmlFor="dob">
                                  Ngày tháng năm sinh <span>*</span>
                                </label>
                                <input
                                  type="date"
                                  id="dob"
                                  required
                                  onChange={(e) =>
                                    setCheckList({
                                      ...checkList,
                                      dob: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className={styles.input}>
                                <label htmlFor="ccid">
                                  Số CCCD / CMND <span>*</span>
                                </label>
                                <input
                                  type="text"
                                  id="ccid"
                                  required
                                  onChange={(e) =>
                                    setCheckList({
                                      ...checkList,
                                      ccid: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                            <div className={styles.inputGroupLine}>
                              <div className={styles.input}>
                                <label htmlFor="phone">
                                  Số điện thoại <span>*</span>
                                </label>
                                <input
                                  type="number"
                                  id="phone"
                                  required
                                  onChange={(e) =>
                                    setCheckList({
                                      ...checkList,
                                      phone: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className={styles.input}>
                                <label htmlFor="email">
                                  Email <span>*</span>
                                </label>
                                <input
                                  type="text"
                                  id="email"
                                  required
                                  onChange={(e) =>
                                    setCheckList({
                                      ...checkList,
                                      email: e.target.value,
                                    })
                                  }
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
                                    placeholder="Tỉnh/Thành phố"
                                    onChange={(e) =>
                                      setCheckList({
                                        ...checkList,
                                        city: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className={styles.input}>
                                  <input
                                    type="text"
                                    id="district"
                                    placeholder="Quận/Huyện"
                                    onChange={(e) =>
                                      setCheckList({
                                        ...checkList,
                                        district: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>
                              <div className={styles.inputGroupLine}>
                                <div className={styles.input}>
                                  <input
                                    type="text"
                                    id="street"
                                    placeholder="Phường/ Xã"
                                    onChange={(e) =>
                                      setCheckList({
                                        ...checkList,
                                        street: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className={styles.input}>
                                  <input
                                    type="text"
                                    id="housenumber"
                                    placeholder="Số nhà"
                                    onChange={(e) =>
                                      setCheckList({
                                        ...checkList,
                                        housenumber: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>
                              <div className={styles.input}>
                                <label htmlFor="link">
                                  Link Facebook | KinkedIn | Instagram
                                </label>
                                <input
                                  type="text"
                                  id="link"
                                  onChange={(e) =>
                                    setCheckList({
                                      ...checkList,
                                      link: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </>
                    ) : index === 1 ? (
                      <form className={`${styles.FormPosition}`}>
                        <div className={styles.input}>
                          <label htmlFor="level">
                            Trình độ học vấn <span>*</span>
                          </label>
                          <select
                            name="level"
                            id="level"
                            required
                            style={{ padding: "10px" }}
                          >
                            <option value="TH">Trung học</option>
                            <option value="THPT">Trung học phổ thông</option>
                            <option value="CD/DH">Đại học / Cao đẳng</option>
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
                            style={{ height: "200px", padding: "10px" }}
                            placeholder="Kỹ năng chuyên môn chính"
                          ></textarea>
                        </div>
                        <div className={styles.input}>
                          <label htmlFor="other">Các kỹ năng khác nếu có</label>
                          <textarea
                            type="option"
                            id="skill"
                            required
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
                                    checked={
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
                            placeholder="Ghi rõ vị trí cao nhất từng làm"
                          />
                        </div>
                        <div className={styles.input}>
                          <label htmlFor="link">
                            Thông tin nơi làm việc gần nhất <span>*</span>
                          </label>
                          <input
                            type="text"
                            id="link"
                            placeholder="Tên công ty"
                          />
                          <input type="text" id="link" placeholder="Địa chỉ" />
                          <input
                            type="text"
                            id="link"
                            placeholder="Ngành nghề, lĩnh vực"
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
                              onSubmit={onSubmit}
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
