// rafc
import { FC } from "react";


import Head from "next/head";


import { Navbar } from "../Navbar";
import styles from './MainLayout.module.css';




export const MainLayout: FC = ({ children }) => {


    return (
        <div className={styles.container}>



            <Head>
                <title>Home - Jesus</title>
                <meta name="description" content="Home Page" />
                <meta name="keywords" content='jesus, fonseca, curso, next.js' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* mi componente personalizado */}
            <Navbar />

            <main className={styles.main}>

                {children}

            </main>


        </div>
    );
}
