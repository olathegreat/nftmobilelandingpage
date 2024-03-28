import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";

const SectionWrapper = ({reverse, title, description, banner, showBtn, mockupImg }) => {
  return (
    <div
      className={`min-h-screen  ${styles.section} ${banner}
      
      ${reverse ? styles.bgWhite : styles.bgPrimary}`}
    >
      <div className={`flex items-center 
      ${reverse ? styles.boxReverseClass : styles.boxClass} w-11/12 sm:w-full minmd:w-3/4`}>
        <div className={`${styles.descDiv} ${reverse ? "fadeRightMini" : "fadeLeftMini"}
            ${reverse ? styles.textRight : styles.textLeft}`}>
          <h1 className={`${styles.h1Text} 
          ${reverse ? styles.blackText : styles.whiteText}
         
            
          `}>{title}</h1>
          <p className={`${styles.description}
           ${reverse ? styles.blackText : styles.whiteText}
          `}>{description}</p>

          {showBtn && (
            <Button assetUrl={assets.expo} link="https://expo.dev/accounts/olathegreat/projects/nftplacemobile/builds/7c1f4b98-9261-40df-b666-0b42e1a0d463" />
          )}
        </div>
        <div className={`p-8 sm:px-0 flex-1 ${styles.flexCenter}`}>
          <img className={`${styles.sectionImg} 
          ${reverse ? "fadeLeftMini" : "fadeRightMini"}
          `} src={mockupImg} alt="mockup" />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
