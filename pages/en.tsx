import axios from "axios";
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Section from "../components/Section";
import styles from "../styles/pt.module.scss";

const EN: NextPage = (props: any) => {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (typeof window !== "undefined")
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    console.log(props.vinhos);
  }, []);

  return (
    <main className={styles.container}>
      <div style={{ width: "100%" }}>
        <Image
          src={"/assets/img/banner.svg"}
          alt="banner terraço da alta"
          layout="responsive"
          width={windowSize.width}
          height={windowSize.height}
        />
      </div>
      <div className={styles.tableContainer}>
        <Section
          title="Plate"
          categories={[
            "Appetizers",
            "Vegetarian",
            "Meat",
            "Fish",
            "For the Children",
            "Desserts",
          ]}
          allItems={props.plate}
          baseColor="#b67b44"
        />
        <Section
          title="Cocktails, Gins and Spirituous"
          categories={[
            "Cocktails",
            "Mocktails",
            "Gin",
            "Vodka",
            "Rum",
            "Whisky",
            "Liqueurs and Spirituous",
            "Aperitifs",
          ]}
          allItems={props.cockatils}
          baseColor="#aaab8b"
        />
        <Section
          title="Cafeteria, Soft Drinks & Beer"
          categories={["Beers", "Waters", "Soft Drinks", "Cafetaria"]}
          allItems={props.cafetaria}
          baseColor="#45586e"
        />
        <Section
          title="Wines and Sangrias"
          categories={[
            "Sangrias",
            "White Wine",
            "Red Wine",
            "Sparklings & Champagnes",
          ]}
          allItems={props.vinhos}
          baseColor="#a3777d"
          wines
        />
      </div>
    </main>
  );
};

export const getStaticProps = async (ctx: any) => {
  const plate = await axios({
    method: "GET",
    url: "https://api.baserow.io/api/database/rows/table/84462/?user_field_names=true",
    headers: {
      Authorization: `Token se4P6VjcqwTLRnstfIc1dFiVvmg5VutG`,
    },
  });

  const cocktails = await axios({
    method: "GET",
    url: "https://api.baserow.io/api/database/rows/table/84470/?user_field_names=true",
    headers: {
      Authorization: `Token se4P6VjcqwTLRnstfIc1dFiVvmg5VutG`,
    },
  });

  const cafetaria = await axios({
    method: "GET",
    url: "https://api.baserow.io/api/database/rows/table/84472/?user_field_names=true",
    headers: {
      Authorization: `Token se4P6VjcqwTLRnstfIc1dFiVvmg5VutG`,
    },
  });

  const vinhos = await axios({
    method: "GET",
    url: "https://api.baserow.io/api/database/rows/table/84474/?user_field_names=true",
    headers: {
      Authorization: `Token se4P6VjcqwTLRnstfIc1dFiVvmg5VutG`,
    },
  });

  return {
    props: {
      plate: JSON.parse(JSON.stringify(plate.data)).results,
      cockatils: JSON.parse(JSON.stringify(cocktails.data)).results,
      cafetaria: JSON.parse(JSON.stringify(cafetaria.data)).results,
      vinhos: JSON.parse(JSON.stringify(vinhos.data)).results,
    },
  };
};

export default EN;
