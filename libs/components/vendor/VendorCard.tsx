import React from "react";

const VendorCard = () => {
  return (
    <div className="vendor-card-main">
      <div className="vendor-card">
        <div className="vendor-img-container">
          <img src="/img/profile/defaultImg.jpg" alt="" />
        </div>
        <div className="vendor-info-container">
          <span className="vendor-name">Kevin Nematov</span>
          <span className="broker-of">
            Broker of: <span className="section">Meats</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
