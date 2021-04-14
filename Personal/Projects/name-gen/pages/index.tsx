import Head from "next/head";
import styles from "../styles/Home.module.css";
import chance from "chance";
import { useState } from "react";
import core from "../core";

export default function Home() {
  const [output, setOutput] = useState<string>("");
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">RandName</a>
        </h1>

        <p className={styles.description}>
          A sleek, made-up name generator tool.{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
      <input type="text" onChange={() => {}} />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
