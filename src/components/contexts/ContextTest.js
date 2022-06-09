import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const TestContext = createContext();
function TestProvider({ children }) {
  const [test, setTest] = useState([]);

  useEffect(() => {
    const bodyFormData = new FormData();
    // bodyFormData.append("title", "TESTTTTTTTTTTTTT");
    // bodyFormData.append("category_id", 1);
    // bodyFormData.append("user_ids", [1, 2]);
    // bodyFormData.append("user_request", 1);
    // bodyFormData.append("vehicle", "coach");
    // bodyFormData.append("date_start", "2022-03-20");
    // bodyFormData.append("description_request", "Luki Nguyen");
    // bodyFormData.append("time_need", "");
    // bodyFormData.append("proposed_date", "");
    // bodyFormData.append("requirer_document", "");
    // bodyFormData.append("intended_use", "");
    // bodyFormData.append("resource", "");
    // bodyFormData.append("quantity", "");
    // bodyFormData.append("partner", "");
    // bodyFormData.append("date_end", "2022-03-27");
    // bodyFormData.append("approver_ids", [
    //   { user_id: 25, status: "new" },
    //   { user_id: 2, status: "new" },
    // ]);
    // bodyFormData.append("period", "");
    // bodyFormData.append("location", "test");
    axios
      .post(
        "http://test.diligo.vn:15000/api/v1/approvals/suggest",
        bodyFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          params: {
            "access_token":
              "access_token_80cecece2190852aa76be08667d022258b4b6718",
            "title": "AXIOS",
            "category_id": "1",
            "requirer_document": "",
            "user_ids": "[1,2]",
            "user_request": "1",
            "vehicle": "coach",
            "date_start": "2022-03-20",
            "description_request": "Luki Nguyen",
            "time_need": "",
            "proposed_date": "",
            "intended_use": "",
            "resource": "",
            "period": "",
            "location": "",
            "partner": "",
            "date_end": "2022-03-27",
            "approver_ids": '[{ "user_id": "25", "status": "new" },{ "user_id": 2, "status": "new" },]',
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const value = {
    test,
  };
  console.log(test);

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
}
export { TestProvider, TestContext };
