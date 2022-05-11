import React, { useContext } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import "./RecruitPosition.scss";
import styles from "./RecruitPosition.module.css";
import Header2 from "../../components/Header/Header2";
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
import { useForm } from "react-hook-form";
import { RecruitContext } from "../../components/contexts/ContextRecuit";

const steps = [
  {
    label: "Thông tin cá nhân",
    description: `Vui lòng nhập đầy đủ thông tin bên dưới`,
  },
  {
    label: "Kỹ năng chuyên môn",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Kinh nghiệm làm việc",
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
  {
    label: "Ứng tuyển",
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
];

function RecruitPosition() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const { register, handleSubmit, formState, getValues } = useForm({
    mode: "onChange",
  });

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

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("attachment", data.file[0]);
    console.log(formData);

    const values = getValues();
    console.log(values["attachment"][0]);

    handleNext();
    const output = JSON.stringify(values);
    console.log(output);

    // props.history.push('/')
  };
  const { data } = React.useContext(RecruitContext);

  const id = useLocation().search.replace("?", "");
  const currentData = data.find((val) => val.id === +id);
  let title;
  if (currentData) {
    title = currentData.name.name;
  }

  return (
    <>
      <Header2 />
      <div className="container" style={{ margin: "286px auto 90px" }}>
        <Breadcrumbs separator=">" breadItem={breadcrumItem} />
        <div className={`RecruitPosition`}>
          <Box sx={{ maxWidth: "40%" }}>
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
                          <div className={`${styles.inputRadio}`}>
                            <div className={`${styles.inputRadioSide}`}>
                              <div className={`${styles.inputRadioItemTitle}`}>
                                Giới tính
                              </div>
                              <div className={`${styles.inputRadioItems}`}>
                                <div className={`${styles.inputRadioItem}`}>
                                  <p>
                                    <input
                                      type="radio"
                                      id="sex"
                                      name="radio-sex"
                                      checked
                                      className={styles.inputRadioButton}
                                    />
                                    <label
                                      className={styles.labelRadio}
                                      for="sex"
                                    >
                                      Nam
                                    </label>
                                  </p>
                                </div>
                                <div className={`${styles.inputRadioItem}`}>
                                  <p>
                                    <input
                                      type="radio"
                                      id="sex"
                                      name="radio-sex"
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
                            <div className={`${styles.inputRadioSide}`}>
                              <div className={`${styles.inputRadioItemTitle}`}>
                                Tình trạng
                              </div>
                              <div className={`${styles.inputRadioItems}`}>
                                <div className={`${styles.inputRadioItem}`}>
                                  <p>
                                    <input
                                      type="radio"
                                      id="alone"
                                      name="radio-alone"
                                      checked
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
                                <div className={`${styles.inputRadioItem}`}>
                                  <p>
                                    <input
                                      type="radio"
                                      id="married"
                                      name="radio-married"
                                      className={styles.inputRadioButton}
                                    />
                                    <label
                                      className={styles.labelRadio}
                                      style={{fontSize: "15px"}}
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
                            <label htmlFor="name">Họ và tên đầy đủ</label>
                            <input type="text" id="name" />
                          </div>
                          <div className={styles.inputGroup}>
                            <div className={styles.inputGroupLine}>
                              <div className={styles.input}>
                                <label htmlFor="dob">Ngày tháng năm sinh</label>
                                <input type="text" id="dob" />
                              </div>
                              <div className={styles.input}>
                                <label htmlFor="name">Số CCCD / CMND</label>
                                <input type="text" id="name" />
                              </div>
                            </div>
                            <div className={styles.inputGroupLine}>
                              <div className={styles.input}>
                                <label htmlFor="phone">Số điện thoại</label>
                                <input type="text" id="phone" />
                              </div>
                              <div className={styles.input}>
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" />
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
                                  />
                                </div>
                                <div className={styles.input}>
                                  <input
                                    type="text"
                                    id="district"
                                    placeholder="Quận/Huyện"
                                  />
                                </div>
                              </div>
                              <div className={styles.inputGroupLine}>
                                <div className={styles.input}>
                                  <input
                                    type="text"
                                    id="street"
                                    placeholder="Phường/ Xã"
                                  />
                                </div>
                                <div className={styles.input}>
                                  <input
                                    type="text"
                                    id="housenumber"
                                    placeholder="Số nhà"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </>
                    ) : null}
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1
                            ? "Ứng tuyển"
                            : "Bước tiếp theo"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
              </Paper>
            )}
          </Box>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RecruitPosition;
