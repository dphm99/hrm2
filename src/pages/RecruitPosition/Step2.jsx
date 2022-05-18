import React from "react";
import styles from "./RecruitPosition.module.css";

function Step2() {
  return (
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
  );
}

export default Step2;
