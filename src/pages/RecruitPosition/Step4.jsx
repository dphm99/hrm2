import React, { useState, useRef } from "react";
import styles from "./RecruitPosition.module.css";
import filesCV from "../../assets/files/CV Diligo Holdings.doc";
// import Button from "@mui/material/Button";

function Step4() {
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

  return (
    <form style={{textAlign:"center"}}>
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
        <p className="m-0"> {`hoặc sử dụng biểu mẫu CV của Diligo`} </p>
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
  );
}

export default Step4;
