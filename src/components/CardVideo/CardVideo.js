import React from 'react'
import './CardVideo.css'

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
function CardVideo({ image, title,iframe, onClick,content,show ,onClose}) {
    const style = {
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        boxShadow: 24,
        borderRadius: 2.5,
        p: 4,
        minWidth: "40vw",
        outline: "none",
        zIndex:9999,
      };
  return ( 
      <>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" onClick={onClick}>
            <div className="col-sm-3 crs_grid bordered d-flex justify-content-start align-items-start">
              <div className="col-sm-4 crs_grid_thumb  position-relative">
                <div
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: " var(--main-color-content)",
                    zIndex: "1",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="circle-play"
                    className="svg-inline--fa fa-circle-play CourseDetail_icon__sLJtd"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"
                    />
                  </svg>
                </div>
                <p className="crs_detail_link">
                  <img
                    src={image}
                    className="img-fluid rounded"
                    alt="course_poster"
                  />
                </p>
              </div>
              <div className="crs_grid_caption">
                <div className="crs_title">
                  <h4 className="m-0">
                    <p className="crs_title_link">{title}</p>
                  </h4>
                    <p className="text">{content}</p>
                </div>
              </div>
            </div>
          </div> 
          {show && (
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={show}
              onClose={onClose}
              closeAfterTransition
              onBackdropClick={onClose}
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={true}>
                <Box sx={style} textAlign="center">
                  <div className="position-relative">
                    {/* <img className="position-absolute" src={IconCheck} alt='icon' style={{width:'75px',top: '-100%',left: '50%',transform: 'translate(-50%, -50%)'}}/> */}
                    <h4
                      className="text-center fw-bold my-0"
                      style={{ fontSize: "1.4rem", color: "#000" }}
                    >
                      {title}
                    </h4>
                    <div className="my-4">
                      <iframe
                        width="710"
                        height="300"
                        src={iframe}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div
                    className="text-center d-flex justify-content-center"
                    style={{ gap: "20px" }}
                  >
                    {/* <Button
                      status="active"
                      text="Thoát"
                      onClick={() => setShowAlert(prev => ({
                        ...prev,
                        show:false,
                      }))}
                      width={"140px"}
                    /> */}
                  </div>
                </Box>
              </Fade>
            </Modal>
)
} </> )}

export default CardVideo