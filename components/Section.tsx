import React from "react";
import CategoryList from "./CategoryList";
import Values from "values.js";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styles from "../styles/components.module.scss";

interface ISection {
  title: string;
  categories: string[];
  allItems: any;
  baseColor?: string;
  wines?: boolean;
}

const Section: React.FC<ISection> = ({
  title,
  categories,
  allItems,
  baseColor,
  wines,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const color = new Values(baseColor);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      style={{ backgroundColor: baseColor }}
      className={styles.sectionContainer}
    >
      <>
        <div className={styles.sectionTitleContainer}>
          <h1 className={styles.sectionTitle}>{title}</h1>
          {open ? (
            <BsChevronUp
              size={30}
              onClick={toggleOpen}
              className={styles.sectionCaret}
            />
          ) : (
            <BsChevronDown
              size={30}
              onClick={toggleOpen}
              className={styles.sectionCaret}
            />
          )}
        </div>
        {open && (
          <div>
            {categories.map((c, i) => (
              <CategoryList
                style={{ backgroundColor: color.shade(i * 5).hexString() }}
                key={c}
                title={c}
                items={allItems}
                wines={wines}
              />
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default Section;
