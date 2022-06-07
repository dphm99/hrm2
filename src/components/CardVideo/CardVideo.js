import React from 'react'
import './CardVideo.css'
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Highlight from 'react-highlight'

function CardVideo({ image, title,iframe, onClick,content,show ,onClose}) {
    const style = {
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        boxShadow: 24,
        borderRadius: 2.5,
        p: 4,
        minWidth: "40vw",
        outline: "none",
        zIndex:3,
      };

      
  return ( 
      <>
          <div style={{zIndex: "99"}} className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="col  bordered d-flex justify-content-start align-items-start">
              <div className="col position-relative">
              <div
              className={`row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative`}
            >
                <iframe
                height="220"
                  src="https://www.youtube.com/embed/3V0jdXteJdQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
                  </div>
                </Box>
              </Fade>
            </Modal>
)
} </> )}

export default CardVideo