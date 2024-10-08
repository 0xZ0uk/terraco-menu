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

const PT: NextPage = (props: any) => {
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
            title="No Prato"
            categories={plateList.pt}
            allItems={props.noprato}
            baseColor="#b67b44"
            notes={props.notas}
          />
          <Section
            title="Cocktails, Gins e Espirituosas"
            categories={[...cocktailList.base, ...cocktailList.pt]}
            allItems={props.cockatils}
            baseColor="#aaab8b"
            notes={props.notas}
          />
          <Section
            title="Cafeteria, Refrigerantes e Cerveja"
            categories={cafeteriaList.pt}
            allItems={props.cafetaria}
            baseColor="#45586e"
            notes={props.notas}
          />
          <Section
            title="Vinhos e Sangrias"
            categories={winesList.pt}
            allItems={props.vinhos}
            baseColor="#a3777d"
            wines
            notes={props.notas}
          />
        </div>
      </main>
    </div>
  );
};

function serialize(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export const getServerSideProps = async (ctx: any) => {
  const prato = await getBaserow("83811");
  const cocktails = await getBaserow("83816");
  const cafetaria = await getBaserow("83819");
  const vinhos = await getBaserow("83822");
  const notas = await getBaserow("121050");

  return {
    props: {
      noprato: serialize(prato.data).results,
      cockatils: serialize(cocktails.data).results,
      cafetaria: serialize(cafetaria.data).results,
      vinhos: serialize(vinhos.data).results,
      notas: serialize(notas.data).results,
    },
  };
};

export default PT;
