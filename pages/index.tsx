import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/home.module.scss";
import { GB, PT } from "country-flag-icons/react/1x1";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Menu - TERRAÇO DA ALTA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <div className={styles.countryContainer}>
          <Link href="/pt">
            <span
              className="fi fis fi-pt"
              style={{ width: 180, height: 180, borderRadius: "100%" }}
            ></span>
          </Link>
          <Link href="/pt">
            <h2 className={styles.flagText}>Português</h2>
          </Link>
        </div>
        <div className={styles.countryContainer}>
          <Link href="/en">
            <span
              className="fi fis fi-gb"
              style={{ width: 180, height: 180, borderRadius: "100%" }}
            ></span>
          </Link>
          <Link href="/en">
            <h2 className={styles.flagText}>English</h2>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
