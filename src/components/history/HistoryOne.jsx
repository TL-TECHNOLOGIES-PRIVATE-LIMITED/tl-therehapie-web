import React, { useEffect } from "react";
import $ from "jquery";

export const HistoryOne = () => {
  const historyItems = [
    { id: "1", year: "1972", title: "For Manufacturers", content:"We help you expand your market reach, identify the right distributors, and navigate complex regulations" },
    { id: "2", year: "2000", title: "For Distributors",content:" We connect you with leading manufacturers, optimize your product portfolio, and help you establish a strong foothold in the market." },
    { id: "3", year: "2022", title: " For Healthcare Providers",content:"We assist hospitals, clinics, and rehab centers in acquiring cost-effective, high-quality rehabilitation solutions tailored to their needs." },
    // { id: "4", year: "2024", title: "archive 1000+ awards" },
  ];

  useEffect(() => {
    $("#section-time").onePageNav({
      currentClass: "current",
      scrollSpeed: 950,
    });
  }, []);

  return (
    <div className="td-history-area pb-60 pt-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="td-history-title-wrap mb-80">
              <span className="td-section-title-pre mb-10">
                Started From 1972
              </span>
              <h2 className="td-section-title">
              What We Do
              </h2>
              <p>
              At theREHApie Consultants, we connect manufacturers, distributors, and healthcare providers with cutting-edge rehabilitation technology in the Middle East. From market entry strategies to regulatory compliance, distribution management, and sales optimization, we help businesses expand, grow, and thrive in the rehab industry.
              </p>
              <p>
              By bridging the gap between innovation and accessibility, we ensure that patients receive the best rehabilitation solutions, while businesses maximize their market potential and profitability. 

              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="td-history-wrapper p-relative">
              <div className="td-history-navebar d-none d-sm-block">
                <ul id="section-time">
                  {historyItems.map((item, index) => (
                    <li key={index} className={index == 0 ? "current" : ""}>
                      <span></span>
                      <a href={`#${item.id}`} title="">
                        {`0${item.id}`}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {historyItems.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="td-history-item mb-80"
                >
                  {/* <h2 className="td-history-year mb-35">{item.year}</h2> */}
                  <h4 className="td-history-title mb-20">{item.title}</h4>
                  <p>
                 {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
