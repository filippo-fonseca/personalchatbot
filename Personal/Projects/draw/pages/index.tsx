import Head from "next/head";
import styles from "../styles/Home.module.css";
import Painter from "../components/Painter";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cool Drawing App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Painter />
    </div>
  );
}
