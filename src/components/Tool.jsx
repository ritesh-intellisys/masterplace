import React from "react";
import "./Tool.css";
import {
  FaChartLine,
  FaMapMarkerAlt,
  FaUserFriends,
  FaFileInvoiceDollar,
  FaHome,
  FaNewspaper,
  FaBookOpen,
  FaCalculator,
  FaRupeeSign,
  FaRulerCombined,
} from "react-icons/fa";

const toolsData = [
  { icon: <FaChartLine />, title: "Price Trends", desc: "Check property rates and prices" },
  { icon: <FaMapMarkerAlt />, title: "Locality Insights", desc: "Know more about different localities" },
  { icon: <FaUserFriends />, title: "Resident Reviews", desc: "Know what residents are saying" },
  { icon: <FaFileInvoiceDollar />, title: "Transaction Prices", desc: "Check property transaction values" },
  { icon: <FaHome />, title: "About My Property", desc: "Track prices & analyse market demand" },
  { icon: <FaNewspaper />, title: "Latest News", desc: "Real estate & allied industry updates" },
  { icon: <FaBookOpen />, title: "User Guides", desc: "Help for buyers, tenants, sellers" },
  { icon: <FaCalculator />, title: "EMI Calculator", desc: "Calculate your home loan EMI" },
  { icon: <FaRupeeSign />, title: "Loan Eligibility", desc: "Check what you can borrow" },
  { icon: <FaRulerCombined />, title: "Area Converter", desc: "Convert area units easily" },
];

const InsightsTools = () => {
  return (
    <section className="toolx-section">
      <div className="toolx-header">
        <h2 className="toolx-title">Insights & Tools</h2>
        <p className="toolx-subtitle">Go from browsing to buying</p>
        <button className="toolx-view-btn">View all Insights</button>
      </div>
      <div className="toolx-scroll-container">
        {toolsData.map((tool, index) => (
          <div key={index} className="toolx-card">
            <div className="toolx-icon-box">{tool.icon}</div>
            <h4 className="toolx-card-title">{tool.title}</h4>
            <p className="toolx-card-desc">{tool.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsightsTools;