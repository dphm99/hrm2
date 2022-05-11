import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordion.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';
export default function SimpleAccordion() {
  const [changeIcon, setChangeIcon] = React.useState([])
  function change(i) {
    setChangeIcon(prev => {
      if (changeIcon.includes(i)) {
        return changeIcon.filter(item => item !== i)
      }
      else {
        return [...prev, i]
      }
    })
  }

  const data = [
    {
      q: "Ứng tuyển",
      a: [
        {
          title: "Vì sao hồ sơ của tôi có tình trạng Hồ sơ không phù hợp?",
          id: 0,
          content: `"Khi bạn ứng tuyển, hệ thống sẽ trả kết quả hồ sơ không phù hợp khi thuộc các trường hợp bên dưới:
            + Kết quả bài Test online không đạt (Đối với công việc có bài test online )
            + Khi sàng lọc hồ sơ, hồ sơ của bạn chưa đáp ứng các tiêu chí yêu cầu công việc
            + Hồ sơ của bạn SPAM ( đăng ký cùng lúc nhiều vị trí )
            + Công việc bạn ứng tuyển đã tạm ngưng tuyển dụng ( tuyển đủ hoặc đã chọn được hồ sơ phù hợp hơn)."`,
        },
        {
          title: "Vì sao hồ sơ của tôi có tình trạng Lưu Hồ Sơ ?",
          id: 1,
          content: `Khi bạn ứng tuyển, hệ thống sẽ trả kết quả Lưu Hồ Sơ khi thuộc các trường hợp bên dưới:
            + Khi sàng lọc hồ sơ, hồ sơ của bạn chưa đáp ứng các tiêu chí yêu cầu công việc hiện tại, PNS sẽ lưu hồ sơ cho vị trí phù hợp sau này
            + Công việc bạn ứng tuyển đã tạm ngưng tuyển dụng, PNS sẽ lưu hồ sơ của bạn nếu sau này có nhu cầu.`,
        },
        {
          title:
            "Làm cách nào để ứng tuyển việc làm tại tập đoàn Diligo Holdings ?",
          id: 2,
          content: `Để ứng tuyển/ đăng ký các công việc tại tập đoàn Thế Giới Di Động, bạn truy cập website và chọn công việc mong muốn làm việc, sau đó bấm nút ứng tuyển`,
        },
        {
          title:
            "Tôi đã phỏng vấn Đạt trước đây, nhưng vì việc cá nhân nên chưa tham dự nhận việc, Tôi có thể ứng tuyển lại được không ?",
          id: 3,
          content: `Bạn ứng tuyển lại bình thường.
            Sau khi đăng ký hồ sơ online tại website, Phòng Nhân Sự sẽ liên hệ mời bạn phỏng vấn nếu hồ sơ phù hợp ( 7- 10 ngày)`,
        },
        {
          title:
            "Sau bao lâu tôi có thể ứng tuyển lại nếu kết quả phỏng vấn hiện tại của tôi là Không Đạt ?",
          id: 4,
          content: `Bạn có thể ứng tuyển sau tối thiểu 3 tháng nếu cùng một vị trí công việc giống nhau với công việc trước đó
            Bạn có thể ứng tuyển lại ngay nếu đó là công việc khác với vị trí Không Đạt trước đó.`,
        },
        {
          title: "Tôi có thể ứng tuyển bao nhiêu vị trí công việc ?",
          id: 5,
          content: `Thông thường, bạn có thể ứng tuyển nhiều vị trí công việc khác nhau tại website. Trường hợp bạn đăng ký nhiều bộ hồ sơ cùng lúc, hệ thống có thể phân loại và chỉ xét duyệt hồ sơ bạn ứng tuyển cuối cùng.`,
        },
      ],
    },
    {
      q: "Phỏng vấn",
      a: [
        {
          title: "Vì sao hồ sơ của tôi có tình trạng Hồ sơ không phù hợp?",
          id: 6,
          content: `"Khi bạn ứng tuyển, hệ thống sẽ trả kết quả hồ sơ không phù hợp khi thuộc các trường hợp bên dưới:
            + Kết quả bài Test online không đạt (Đối với công việc có bài test online )
            + Khi sàng lọc hồ sơ, hồ sơ của bạn chưa đáp ứng các tiêu chí yêu cầu công việc
            + Hồ sơ của bạn SPAM ( đăng ký cùng lúc nhiều vị trí )
            + Công việc bạn ứng tuyển đã tạm ngưng tuyển dụng ( tuyển đủ hoặc đã chọn được hồ sơ phù hợp hơn)."`,
        },
        {
          title: "Vì sao hồ sơ của tôi có tình trạng Lưu Hồ Sơ ?",
          id: 7,
          content: `Khi bạn ứng tuyển, hệ thống sẽ trả kết quả Lưu Hồ Sơ khi thuộc các trường hợp bên dưới:
            + Khi sàng lọc hồ sơ, hồ sơ của bạn chưa đáp ứng các tiêu chí yêu cầu công việc hiện tại, PNS sẽ lưu hồ sơ cho vị trí phù hợp sau này
            + Công việc bạn ứng tuyển đã tạm ngưng tuyển dụng, PNS sẽ lưu hồ sơ của bạn nếu sau này có nhu cầu.`,
        },
        {
          title:
            "Làm cách nào để ứng tuyển việc làm tại tập đoàn Diligo Holdings ?",
          id: 8,
          content: `Để ứng tuyển/ đăng ký các công việc tại tập đoàn Thế Giới Di Động, bạn truy cập website và chọn công việc mong muốn làm việc, sau đó bấm nút ứng tuyển`,
        },
        {
          title:
            "Tôi đã phỏng vấn Đạt trước đây, nhưng vì việc cá nhân nên chưa tham dự nhận việc, Tôi có thể ứng tuyển lại được không ?",
          id: 9,
          content: `Bạn ứng tuyển lại bình thường.
            Sau khi đăng ký hồ sơ online tại website, Phòng Nhân Sự sẽ liên hệ mời bạn phỏng vấn nếu hồ sơ phù hợp ( 7- 10 ngày)`,
        },
        {
          title:
            "Sau bao lâu tôi có thể ứng tuyển lại nếu kết quả phỏng vấn hiện tại của tôi là Không Đạt ?",
          id: 10,
          content: `Bạn có thể ứng tuyển sau tối thiểu 3 tháng nếu cùng một vị trí công việc giống nhau với công việc trước đó
            Bạn có thể ứng tuyển lại ngay nếu đó là công việc khác với vị trí Không Đạt trước đó.`,
        },
        {
          title: "Tôi có thể ứng tuyển bao nhiêu vị trí công việc ?",
          id: 11,
          content: `Thông thường, bạn có thể ứng tuyển nhiều vị trí công việc khác nhau tại website. Trường hợp bạn đăng ký nhiều bộ hồ sơ cùng lúc, hệ thống có thể phân loại và chỉ xét duyệt hồ sơ bạn ứng tuyển cuối cùng.`,
        },
      ],
    },
  ];
  return (
    <div className={styles.accordion}
    >
      {data.map((ele, index) => {
        return (
          <Accordion key={index} TransitionProps={{ unmountOnExit: false }}>
            <Accordion key={index} >

              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#f47d20" }} />}
                className={`${styles.caption} caption1 `}
              // onClick={expandContent()}
              >
                <h5
                  className={`ms-3`}
                >
                  {ele.q}
                </h5>
              </AccordionSummary>

              <AccordionDetails
                className={`${styles.detail}`}
              >
                {ele.a.map((e, i) => {
                  return (
                    <Accordion
                      key={i}
                      sx={{ willChange: "auto", scrollBehavior: "smooth" }}
                    >
                      <AccordionSummary
                        onClick={() => { change(e.id) }}
                        style={{
                          height: `70px`,
                          borderBottom: `1px solid #ddd`,
                        }}
                      >
                        {changeIcon.includes(e.id) ?
                          <RemoveIcon
                            sx={{
                              color: `#bf202e`,
                              fontSize: "15px",
                              margin: "0 8px 7px 0",
                              marginRight: `15px`
                            }}

                          />
                          :
                          <AddIcon
                            sx={{
                              color: `#bf202e`,
                              fontSize: "15px",
                              margin: "0 8px 7px 0",
                              marginRight: `15px`
                            }}

                          />}
                        <h6
                          className="d-flex"
                          style={{ fontSize: "15px", fontWeight: `600` }}
                        >

                          {e.title}
                        </h6>
                      </AccordionSummary>
                      <AccordionDetails>

                        <p style={{ fontWeight: `600` }}>{e.content}</p>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </Accordion>
        );
      })}
    </div>
  );
}
