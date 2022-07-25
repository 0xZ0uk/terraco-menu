import axios from "axios";
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Section from "../components/Section";
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
    <main className={styles.container}>
      <div style={{ width: "100%" }}>
        <Image
          src={"/assets/img/banner.svg"}
          alt="banner terraço da alta"
          layout="responsive"
          width={windowSize.width}
          height={
            windowSize.width > 600 ? windowSize.height : windowSize.width / 1.8
          }
        />
      </div>
      <div className={styles.tableContainer}>
        <Section
          title="No Prato"
          categories={[
            "Petiscos",
            "Vegetariano",
            "Carne",
            "Peixe",
            "Para as Crianças",
            "Sobremesas",
          ]}
          allItems={props.noprato}
          baseColor="#b67b44"
        />
        <Section
          title="Cocktails, Gins e Espirituosas"
          categories={[
            "Cocktails",
            "Mocktails",
            "Gin",
            "Vodka",
            "Rum",
            "Whisky",
            "Licores e Aguardentes",
            "Aperitivos",
          ]}
          allItems={props.cockatils}
          baseColor="#aaab8b"
        />
        <Section
          title="Cafeteria, Refrigerantes e Cerveja"
          categories={["Cervejas", "Águas", "Refrigerantes", "Cafetaria"]}
          allItems={props.cafetaria}
          baseColor="#45586e"
        />
        <Section
          title="Vinhos e Sangrias"
          categories={[
            "Sangrias",
            "Brancos",
            "Tintos",
            "Espumantes & Champagnes",
          ]}
          allItems={props.vinhos}
          baseColor="#a3777d"
        />
      </div>
    </main>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const prato = await axios({
    method: "GET",
    url: "https://api.baserow.io/api/database/rows/table/83811/?user_field_names=true",
    headers: {
      Authorization: `Token ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });

  const cocktails = await axios({
    method: "GET",
    url: "https://api.baserow.io/api/database/rows/table/83816/?user_field_names=true",
    headers: {
      Authorization: `Token ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });

  const cafetaria = await axios({
    method: "GET",
    url: "https://api.baserow.io/api/database/rows/table/83819/?user_field_names=true",
    headers: {
      Authorization: `Token ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });

  const vinhos = await axios({
    method: "GET",
    url: "https://api.baserow.io/api/database/rows/table/83822/?user_field_names=true",
    headers: {
      Authorization: `Token ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });

  return {
    props: {
      noprato: JSON.parse(JSON.stringify(prato.data)).results,
      cockatils: JSON.parse(JSON.stringify(cocktails.data)).results,
      cafetaria: JSON.parse(JSON.stringify(cafetaria.data)).results,
      vinhos: JSON.parse(JSON.stringify(vinhos.data)).results,
    },
  };
};

export default PT;
