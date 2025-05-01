import { FreeMode } from "swiper/modules";

export const sliderSettings = {
  slidesPerView: 5,
  spaceBetween: 30,
  grid: {
    rows: 2,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
};
export const sliderSettingss = {
  slidesPerView: 6,
  sliderSpaceBetween: 50,
  breakpoints: {
    480: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 3,
    },
    750: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 6,
    },
  },
};

export const sliderLunches = {
  slidesPerView: 4,
  spaceBetween: 30,
  grid: {
    rows: 2,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
};

const handleMouseMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left; // Mouse X within the card
  const y = e.clientY - rect.top;  // Mouse Y within the card
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = ((y - centerY) / centerY) * 10; // Max 10 deg
  const rotateY = ((x - centerX) / centerX) * 10;
  
  const img = card.querySelector('img');
  img.style.transform = `scale(1.1) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
};

const handleMouseLeave = (e) => {
  const img = e.currentTarget.querySelector('img');
  img.style.transform = "scale(1) rotateX(0deg) rotateY(0deg)";
};

