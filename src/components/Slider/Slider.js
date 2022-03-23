import { useState } from "react";
import styles from "./Slider.module.css";
import { dataSlider } from "../dataSlider";
import BtnSlider from "./BtnSlider";

export default function Slider() {
  // Using a state with current image index and animation progress
  const [slideAnim, setSlideAnim] = useState({
    index: 0,
    inProgress: false,
  });

  const nextSlide = () => {
    if (slideAnim.index !== dataSlider.length - 1) {
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true });
    } else {
      setSlideAnim({ index: 0, inProgress: true });
    }
  };

  const prevSlide = () => {
    if (slideAnim.index !== 0) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true });
    } else {
      setSlideAnim({ index: dataSlider.length - 1, inProgress: true });
    }
  };

  return (
    <div className={styles.containerSlider}>
      {dataSlider.map((item, index) => {
        return (
          <div
            key={item.id}
            className={
              slideAnim.index === index
                ? `${styles.slide} ${styles.activeAnim}`
                : `${styles.slide}`
            }
          >
            <img
              src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`}
              alt="slider"
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
}
