import styles from "./Slider.module.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function BtnSlider({ moveSlide, direction }) {
  return (
    <button
      onClick={moveSlide}
      className={
        direction === "next"
          ? `${styles.btnSlide} ${styles.next}`
          : `${styles.btnSlide} ${styles.prev}`
      }
    >
      <img
        src={direction === "next" ? rightArrow : leftArrow}
        alt="Arrow icon"
      />
    </button>
  );
}
