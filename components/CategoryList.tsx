import React from "react";
import Item, { IItem } from "./Item";
import styles from "../styles/components.module.scss";

interface ICategoryList {
  title: string;
  items: any[];
  style?: any;
  wines?: boolean;
}

const CategoryList: React.FC<ICategoryList> = ({
  title,
  items,
  style,
  wines,
}) => {
  if (!!wines) {
    const wineGroups = [
      "Alentejo",
      "Bairrada",
      "Dão",
      "Rosés",
      "Vinho Verde",
      "Açores",
      "Lisboa",
    ];

    return (
      <div style={style}>
        <h2 style={{ textAlign: "center", padding: "40px 0" }}>{title}</h2>
        {title.includes("Vinho") || title.includes("Wine") ? (
          wineGroups.map((g) => (
            <div key={g} style={{ width: "100%" }}>
              <h3 style={{ textAlign: "center", fontSize: 26 }}>
                {items
                  .filter((p: any) => p.Categoria.value === title)
                  .filter((p: any) => p.Grupo?.value === g).length > 0
                  ? g
                  : ""}
              </h3>
              <div>
                {items
                  .filter((p: any) => p.Categoria.value === title)
                  .filter((p: any) => p.Grupo?.value === g)
                  .map((item: any) => (
                    <Item
                      key={item.id}
                      id={item.id}
                      name={item["Nome"]}
                      price={item["Preço"]}
                      gluten={item["Sem Gluten"]}
                      vegan={item["Vegan"]}
                      vegetarian={item["Vegetariano"]}
                      ingredients={item["Ingredientes"]}
                      castas={item["Castas"]}
                    />
                  ))}
              </div>
            </div>
          ))
        ) : (
          <div>
            <div>
              {items
                .filter((p: any) => p.Categoria.value === title)
                .map((item: any) => (
                  <Item
                    key={item.id}
                    id={item.id}
                    name={item["Nome"]}
                    price={item["Preço"]}
                    gluten={item["Sem Gluten"]}
                    vegan={item["Vegan"]}
                    vegetarian={item["Vegetariano"]}
                    ingredients={item["Ingredientes"]}
                    castas={item["Castas"]}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={style} className={styles.categoryContainer}>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      {items
        .filter((prato: any) => prato.Categoria.value === title)
        .map((item: any) => (
          <Item
            key={item.id}
            id={item.id}
            name={item["Nome"]}
            price={item["Preço"]}
            gluten={item["Sem Gluten"]}
            vegan={item["Vegan"]}
            vegetarian={item["Vegetariano"]}
            ingredients={item["Ingredientes"]}
            castas={item["Castas"]}
          />
        ))}
    </div>
  );
};

export default CategoryList;
