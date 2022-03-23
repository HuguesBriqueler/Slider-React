import { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import { dataSlider } from "../dataSlider";
import BtnSlider from "./BtnSlider";

export default function Slider() {
  // Using a state with current image index and animation progress
  const [slideAnim, setSlideAnim] = useState({
    index: 0,
    inProgress: false,
  });

  // This hook prevent 'spam click' by adding a delay before reseting 'slideAnim.inProgress' state to false.
  // It only occures everytime 'inProgress state' is set to true.
  useEffect(() => {
    if (slideAnim.inProgress) {
      setTimeout(() => {
        setSlideAnim((prevState) => ({ ...prevState, inProgress: false }));
      }, 500);
    }
  }, [slideAnim.inProgress]);

  // Those two function (nextSlide and prevSlide) handle arrow buttons by simply increnting or decrementing
  // images index and setting 'inProgress state' to true in order to prevent 'spam click'
  const nextSlide = () => {
    if (slideAnim.index !== dataSlider.length - 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true });
    } else if (!slideAnim.inProgress) {
      setSlideAnim({ index: 0, inProgress: true });
    }
  };
  const prevSlide = () => {
    if (slideAnim.index !== 0 && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true });
    } else if (!slideAnim.inProgress) {
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
