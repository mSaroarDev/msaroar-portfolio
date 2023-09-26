import { useState, useEffect } from "react";

function Arrow() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#navbar">
      <div className={`up-arrow ${isActive ? "active" : ""}`}>
        <i className="bx bx-up-arrow-alt"></i>
      </div>
    </a>
  );
}

export default Arrow;
