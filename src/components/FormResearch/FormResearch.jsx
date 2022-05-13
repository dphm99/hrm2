import React from 'react'
import styles from "./FormResearch.module.css"
function FormResearch() {
    return (
        <div className="container">
            <div style={{ textAlign: "center" }} className={styles.Recruit}>
                <div className={styles.formRecruit}>
                    <form encType="multipart/form-data" style={{ marginTop: "18rem" }}>
                    <h2 className={styles.title}>Tra cứu kết quả ứng tuyển</h2>
                    <p className={styles.text}>Anh / Chị vui lòng nhập cả 2 thông tin sau đây</p>
                        <div className={styles.inputName}>
                            <input
                                type="text"
                                id="inputName"
                                name="fullname"
                                className={styles.inputField}
                                // onChange={(e) => setName(e.target.value)}
                                placeholder="Số CCCD"
                                required
                            />
                        </div>
                        <div className={styles.inputName}>

                            <input
                                type="text"
                                id="inputName"
                                name="fullname"
                                className={styles.inputField}
                                // onChange={(e) => setName(e.target.value)}
                                placeholder="Số điện thoại"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            // onClick={handleLogin}
                            className={`${styles.buttonSubmit} ${styles.active}`}
                        >
                            Tra cứu
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormResearch