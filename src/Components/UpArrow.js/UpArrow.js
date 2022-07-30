import { useState, useEffect } from "react";
import { BiChevronUpCircle } from "react-icons/bi";
import { animateScroll as scroll } from "react-scroll";
import "./UpArrow.scss";
function UpArrow() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  });

  const scrollHandler = (e) => {
    e.target.documentElement.scrollTop > 250
      ? setVisible(true)
      : setVisible(false);
  };
  return (
    visible && (
      //   <div className="up-arrow" onClick={() => scroll.scrollToTop()}>
      <BiChevronUpCircle
        onClick={() => scroll.scrollToTop()}
        className="up-arrow"
      />
      //   </div>
    )
  );
}

export default UpArrow;
