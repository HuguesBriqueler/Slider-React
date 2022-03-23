import { useState } from "react";
import styles from "./Slider.module.css";
import { dataSlider } from "../dataSlider";

export default function Slider() {
  // Using a state with current image index and animation progress
  const [slideAnim, setSlideAnim] = useState({
    index: 0,
    inProgress: false,
  });

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
    </div>
  );
}
