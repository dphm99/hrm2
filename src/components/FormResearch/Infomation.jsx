import React from 'react'
import styles from "./FormResearch.module.css"

function Infomation() {
    return (
        <>
            <div style={{ textAlign: "center" }} className={styles.Recruit}>
                <div className={styles.formInfo}>
                    <form action="" style={{width:"590px"}}>
                        <p className={styles.titleInfo}>Xin chào anh (chị) <span className={styles.higlight_text}>Nguyễn Văn A</span></p>
                        <p className={styles.titleInfo}>Cảm ơn anh chị đã ứng tuyển ở vị trí <span className={styles.higlight_text}>Chuyên viên bán hàng và tuyển dụng</span>,<span className={styles.higlight_light}> Phòng kinh doanh, </span>Công ty CP Diligo Holdlings.</p>
                        <p className={styles.titleInfo}>Xin chúc mừng hồ sơ anh (chị) <span className={styles.higlight_text}>đã được phê duyệt.</span></p>
                        <p className={styles.titleInfo}>Bộ phận tuyển dụng sẽ liên hệ anh (chị) theo số điện thoại đã cung cấp! Trong thời gian chờ anh chị có thể tham khảo thêm Quy trình tuyển dụng <a href="">Tại đây.</a></p>
                    

                    </form>
                </div>
            </div>
        </>
    )
}

export default Infomation