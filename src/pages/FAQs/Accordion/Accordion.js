import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordion.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function SimpleAccordion() {
  const [changeIcon, setChangeIcon] = React.useState([]);
  function change(i) {
    setChangeIcon((prev) => {
      if (changeIcon.includes(i)) {
        return changeIcon.filter((item) => item !== i);
      } else {
        return [...prev, i];
      }
    });
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
          content: `Để ứng tuyển/ đăng ký các công việc tại tập đoàn Diligo Holdings, bạn truy cập website và chọn công việc mong muốn làm việc, sau đó bấm nút ứng tuyển`,
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
          title: "Đến phỏng vấn tôi cần mang theo gì?",
          id: 6,
          content: `Hồ sơ xin việc là vật dụng quan trọng nhất mà bạn cần chuẩn bị cho cuộc phỏng vấn của mình, in ra một vài bản của phiên bản cập nhật mới nhất của bạn. Bạn cũng nên có thêm bản sao trong trường hợp bạn cần tham khảo nó trong cuộc phỏng vấn hoặc nếu xuất hiện thêm người phỏng vấn.`,
        },
        {
          title: "Nộp hồ sơ bao lâu thì được gọi phỏng vấn?",
          id: 7,
          content: `Tuyển dụng nhân sự là công việc của phòng nhân sự, trải qua rất nhiều quy trình, giai đoạn từ việc đăng tin tuyển dụng, liên lạc với các ứng viên, phỏng vấn cho đến khi tìm được ứng viên phù hợp nhất. Ở mỗi giai đoạn, nhà tuyển dụng cần dành nhiều thời gian để sàng lọc và xem xét kỹ lưỡng hồ sơ của các ứng viên. Đặt biệt ở những doanh nghiệp lớn hoặc khi tuyển dụng những vị trí quan trọng của công ty, nhà tuyển dụng sẽ cần nhiều thời gian hơn để lựa chọn được một ứng viên phù hợp.
          Thông thường thì khi bạn nộp hồ sơ, nhà tuyển dụng sẽ cân nhắc và xem xét hồ sơ của bạn xem có phù hợp với tiêu chí của công ty, với công việc hay không. Họ sẽ liên lạc lại với các  ứng viên sau 2 đến 3 ngày.
          Nếu như có nhiều hồ sơ ứng tuyển cùng một vị trí thì khoảng thời gian thường mất đến 1 tuần. Do đó, chờ đợi từ 2 đến 3 ngày sau khi nộp hồ sơ là điều rất bình thường, bạn không nên nóng vội liên lạc với nhà tuyển dụng mà làm ảnh hưởng đến công việc của họ.
          `,
        },
        {
          title:
            "Tôi lỡ lịch phỏng vấn do có việc bận thì có thể tham gia lại được không?",
          id: 8,
          content: `Nếu bạn được hẹn phỏng vấn, tuy nhiên bạn không tham gia được vì có việc cá nhân thì bạn có thể đăng ký lại hồ sơ mới tại Website để có cơ hội được đi hỏng vấn lần sau. Hoặc bạn liên hệ SĐT liên hệ trong thư mời phỏng vấn để được hướng dẫn.`,
        },
        {
          title:
            "Địa điểm phỏng vấn của Diligo ở đâu ?",
          id: 9,
          content: `Công ty sẽ có các địa điểm phỏng vấn tùy vị trí địa lý/ công việc khác nhau.
          Tuy nhiên, Công ty thường phỏng vấn tại địa điểm sau :
          Văn phòng/ Trụ sở chính của Công ty: Tầng 2, Toà nhà N03T5, Đoàn Ngoại giao, Phường Xuân Tảo, Quận Bắc Từ Liêm, Hà Nội.
          `,
        },
        {
          title:
            "Làm cách nào để xem kết quả Phỏng Vấn ?",
          id: 10,
          content: `Bạn sẽ nhận được thông báo trúng tuyển qua điện thoại hoặc email của CTCP Diligo Holdings. Nêú không bạn có thể liên hệ trong mục Trợ giúp trên Website để được giải đáp.`,
        },
      ],
    },
  ];
  return (
    <div className={styles.accordion}>
      {data.map((ele, index) => {
        return (
          <Accordion
            key={index}
            className={`${styles.captionWrapper}  `}
            TransitionProps={{ unmountOnExit: false }}
          >
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#f47d20" }} />}
                className={`${styles.caption} caption1 `}
              >
                <h5 className={`ms-3`}>{ele.q}</h5>
              </AccordionSummary>

              <AccordionDetails className={`${styles.detail}`}>
                {ele.a.map((e, i) => {
                  return (
                    <Accordion
                      key={i}
                      sx={{ willChange: "auto", scrollBehavior: "smooth" }}
                    >
                      <AccordionSummary
                        onClick={() => {
                          change(e.id);
                        }}
                        style={{
                          minHeight: `70px`,
                          borderBottom: `1px solid #ddd`,
                          marginLeft: `15px`,
                          marginRight: `15px`,
                        }}
                      >
                        {changeIcon.includes(e.id) ? (
                          <RemoveIcon
                            sx={{
                              color: `#bf202e`,
                              fontSize: "15px",
                              margin: "0 8px 7px 0",
                              marginRight: `15px`,
                            }}
                          />
                        ) : (
                          <AddIcon
                            sx={{
                              color: `#bf202e`,
                              fontSize: "15px",
                              margin: "0 8px 7px 0",
                              marginRight: `15px`,
                            }}
                          />
                        )}
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
