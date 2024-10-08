import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Section from "../components/Section";
import { getBaserow } from "../lib/baserowApi";
import {
  cafeteriaList,
  cocktailList,
  plateList,
  winesList,
} from "../lib/sections";
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
  }, []);

  return (
    <div>
      <Head>
        <title>Menu - TERRAÇO DA ALTA</title>
        <meta name="description" content="Menu do Terraço da Alta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div style={{ width: "100%" }}>
          <Image
            src={"/assets/img/banner.svg"}
            alt="banner terraço da alta"
            layout="responsive"
            width={windowSize.width}
            height={
              windowSize.width > 600
                ? windowSize.height
                : windowSize.width / 1.8
            }
          />
        </div>
        <div className={styles.tableContainer}>
          <Section
            title="Plate"
            categories={plateList.en}
            allItems={props.plate}
            baseColor="#b67b44"
            notes={props.notes}
          />
          <Section
            title="Cocktails, Gins and Spirituous"
            categories={[...cocktailList.base, ...cocktailList.en]}
            allItems={props.cockatils}
            baseColor="#aaab8b"
            notes={props.notes}
          />
          <Section
            title="Cafeteria, Soft Drinks & Beer"
            categories={cafeteriaList.en}
            allItems={props.cafetaria}
            baseColor="#45586e"
            notes={props.notes}
          />
          <Section
            title="Wines and Sangrias"
            categories={winesList.en}
            allItems={props.vinhos}
            baseColor="#a3777d"
            wines
            notes={props.notes}
          />
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const plate = await getBaserow("84462");
  const cocktails = await getBaserow("84470");
  const cafetaria = await getBaserow("84472");
  const vinhos = await getBaserow("84474");
  const notes = await getBaserow("121150");

  return {
    props: {
      plate: JSON.parse(JSON.stringify(plate.data)).results,
      cockatils: JSON.parse(JSON.stringify(cocktails.data)).results,
      cafetaria: JSON.parse(JSON.stringify(cafetaria.data)).results,
      vinhos: JSON.parse(JSON.stringify(vinhos.data)).results,
      notes: JSON.parse(JSON.stringify(notes.data)).results,
    },
  };
};

export default EN;
