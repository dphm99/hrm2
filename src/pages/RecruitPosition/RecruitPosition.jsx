import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

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
import Header from "../../components/Header/Header";
import Step2 from "./Step2";
import Step1 from "./Step1";
import Step3 from "./Step3";
import Step4 from "./Step4";
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
  const {handleSubmit} = useForm({}); 
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));
  return (
    <>
      <Helmet>
        <title>Ứng tuyển theo năng lực</title>
        <meta name="description" content="Ứng tuyển theo năng lực - Diligo" />
      </Helmet>
      {!header && <Header />}
      {header && <Header2 />}
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
                        <Step1 />
                      </>
                    ) : index === 1 ? (
                      <Step2 />
                    ) : index === 2 ? (
                      <Step3 />
                    ) :  (
                      <Step4 />
                    )}
                    <Box sx={{ mb: 2 }}>
                      <div>
                        {index < steps.length  ? (
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
