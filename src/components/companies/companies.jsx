import React from "react";
import "./companies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { sliderSettingss } from "../../utils/common";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Companies = () => {
  const companies = [
    { image: "/Roya-L.png", alt: "Roya Developments" },
    { image: "/Mountain-V-L.png", alt: "Mountain View" },
    { image: "/Misr-Italia-L.png", alt: "Misr Italia" },
    { image: "/Palm-Hills-L.png", alt: "Palm Hills" },
    { image: "/Sodic-L.png", alt: "Sodic" },
    { image: "/Tatweer-L.png", alt: "Cred Developments" },
    { image: "/THE-MARQ-L.png", alt: "Cred Developments" },
    { image: "/ORA-L.png", alt: "Cred Developments" },
    { image: "/MNHD-L.png", alt: "Cred Developments" },
    { image: "/Hassan-Allam-L.png", alt: "Cred Developments" },
    { image: "/IL-CAZAR-L.png", alt: "Cred Developments" },
  ];

  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth c-container">
          <div className="c-head flexColStart">
          <span className="flexColStart primaryText c-title">Top Developers</span>
        </div>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          freeMode={true}
          navigation={true}
          {...sliderSettingss}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
        >
          {/* <Sliderbutton /> */}
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="flexColStart i-companies">
                <img src={company.image} alt="logos" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Companies;

// const Sliderbutton = () => {
//   const swiper = useSwiper();
//   return (
//     <div className="flexCenter p-buttons">
//       <button onClick={() => swiper.slidePrev()}> &lt;</button>
//       <button onClick={() => swiper.slideNext()}> &gt;</button>
//     </div>
//   );
// };
