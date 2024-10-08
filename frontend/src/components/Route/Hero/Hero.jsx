import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[30px] leading-[1.2] 800px:text-[30px] text-[#3d3a3a] font-[600] capitalize`}
        >
          For manufacturers <br />  hiring robots.
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
         Cut labor cost and Scale production by hiring service robots! <br /> 
          We offer a vast variety of labor service specific to different business needs.
        </p>
        <Link to="/services" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Buy Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
