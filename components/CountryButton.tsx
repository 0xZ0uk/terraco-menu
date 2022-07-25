import React from "react";
import styles from "../styles/components.module.scss";

interface ICountryButton {
  country: {
    short: string;
    long: string;
  };
  onClick: () => void;
}

const CountryButton: React.FC<ICountryButton> = ({ country, onClick }) => {
  return (
    <div className={styles.countryContainer} onClick={onClick}>
      <span
        className={"fi fis fi-" + country.short.toLowerCase()}
        style={{ width: 180, height: 180, borderRadius: "100%" }}
      ></span>
      <h2 className={styles.flagText}>{country.long}</h2>
    </div>
  );
};

export default CountryButton;
