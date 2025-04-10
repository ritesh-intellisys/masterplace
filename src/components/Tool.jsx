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
    <section className="insights-section">
      <div className="section-header">
        <h2>Insights & Tools</h2>
        <p>Go from browsing to buying</p>
        <button className="view-btn">View all Insights</button>
      </div>
      <div className="tools-scroll">
        {toolsData.map((tool, index) => (
          <div key={index} className="tool-card">
            <div className="icon-box">{tool.icon}</div>
            <h4>{tool.title}</h4>
            <p>{tool.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsightsTools;