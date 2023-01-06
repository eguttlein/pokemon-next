import Head from "next/head";
import React, { PropsWithChildren } from "react";
import NavBar from "../ui/NavBar";
import styles from "./Layout.module.css";

type Props = {
  title?: string;
};

const origin = typeof window === 'undefined' ? '' : window.location.origin

export const Layout: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Emiliano Guttlein" />
        <meta name="description" content={`Pokemon ${title} Info`} />
        <meta name="keywords" content={`Pokemon, ${title}, pokedex`} />
        <meta
          property="og:title"
          content={`Pokemon ${title} Info`}
        />
        <meta
          property="og:description"
          content={`Pokemon ${title} Info`}
        />
        <meta
          property="og:image"
          content={`${origin}/img/banner.png`}
        />
      </Head>

      <NavBar />

      <main className={styles.mainContainer}>{children}</main>
    </>
  );
};
