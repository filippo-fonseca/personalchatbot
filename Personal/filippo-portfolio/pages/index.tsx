import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { Container, Item, Header } from "../public";
import { Text } from "@geist-ui/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Filippo Fonseca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Item>
          <a href="#hello">
            <Text h1 style={{ color: "#ffffff" }}>
              Filippo Fonseca
            </Text>
          </a>
          <div id="hello" style={{ marginTop: "10rem" }}>
            <Text h1 style={{ color: "#ffffff" }}>
              Filippo Fonseca
            </Text>
          </div>
        </Item>
        <Item>Hello World</Item>
      </Container>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
