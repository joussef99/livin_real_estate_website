import React from "react";
import "./Districts.css";

const districts = [
  { name: "New Cairo", properties: 100, image: "/newcairo.jpg"},
  { name: "North Coast", properties: 48, image: "/northcoast1.jpg" },
  { name: "Ain El Sokhna", properties: 14, image: "/ainsokhna.jpg" },
  { name: "New Capital", properties: 78, image: "/newcapital1.jpg" },
  { name: "6 October & Zayed", properties: 75, image: "/zayed.jpg" },
  { name: "Mostkbal City", properties: 1, image: "/mostakbl.jpg" },
  { name: "Red Sea", properties: 1, image: "/redsea.jpg" },
];

const Districts = () => {
  return (
    <section className="d-wrapper">
      <div className="d-head innerWidth paddings flexColStart">
        <span className="primaryText">Top Districts</span>
        {/* <span className="secondaryText">We always ready to help by providing the best services for you.</span> */}
      </div>
      <div className="paddings innerWidth d-container">
        <div className="district-card large">
          <img
            src={districts[0].image}
            alt={districts[0].name}
            className="district-image"
          />
          <div className="district-info">
            <h3>{districts[0].name}</h3>
            <p>{districts[0].properties} PROPERTIES</p>
          </div>
        </div>
        <div className="small-cards">
          <div className="district-card">
            <img
              src={districts[1].image}
              alt={districts[1].name}
              className="district-image"
            />
            <div className="district-info">
              <h3>{districts[1].name}</h3>
              <p>{districts[1].properties} PROPERTIES</p>
            </div>
          </div>
          <div className="district-card">
            <img
              src={districts[2].image}
              alt={districts[2].name}
              className="district-image"
            />

            <div className="district-info">
              <h3>{districts[2].name}</h3>
              <p>{districts[2].properties} PROPERTIES</p>
            </div>
          </div>
          <div className="district-card">
            <img
              src={districts[4].image}
              alt={districts[4].name}
              className="district-image"
            />

            <div className="district-info">
              <h3>{districts[4].name}</h3>
              <p>{districts[4].properties} PROPERTIES</p>
            </div>
          </div>
          <div className="district-card">
            <img
              src={districts[3].image}
              alt={districts[3].name}
              className="district-image"
            />

            <div className="district-info">
              <h3>{districts[3].name}</h3>
              <p>{districts[3].properties} PROPERTIES</p>
            </div>
          </div>
          <div className="district-card">
            <img
              src={districts[5].image}
              alt={districts[5].name}
              className="district-image"
            />

            <div className="district-info">
              <h3>{districts[5].name}</h3>
              <p>{districts[5].properties} PROPERTY</p>
            </div>
          </div>
          <div className="district-card">
            <img
              src={districts[6].image}
              alt={districts[6].name}
              className="district-image"
            />

            <div className="district-info">
              <h3>{districts[6].name}</h3>
              <p>{districts[6].properties} PROPERTY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Districts;
