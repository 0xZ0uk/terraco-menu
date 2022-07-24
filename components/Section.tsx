import React from "react";
import CategoryList from "./CategoryList";
import Values from "values.js";

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
  const color = new Values(baseColor);

  return (
    <div style={{ backgroundColor: baseColor }}>
      <>
        <h1 style={{ paddingTop: "150px" }}>{title}</h1>
        {categories.map((c, i) => (
          <CategoryList
            style={{ backgroundColor: color.shade(i * 5).hexString() }}
            key={c}
            title={c}
            items={allItems}
            wines={wines}
          />
        ))}
      </>
    </div>
  );
};

export default Section;
