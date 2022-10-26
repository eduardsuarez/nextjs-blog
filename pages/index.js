import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/posts";

import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Soy ingeniero en Telecomunicaciones y desarrollador de software. Me
          siento afortunado de haber encontrado en estas disciplinas lo que me
          apasiona y poder hacer de ello mi trabajo. <br />
          Mi camino en el mundo de la programación inició en el año 2017,
          aprendiendo mediante el lenguaje de programación C++, y a partir de
          ahí fui adquiriendo conocimientos en otras tecnologías y lenguajes de
          programación como Java, JavaScript, Python , HTML5, CSS, React.js,
          Bases de Datos, Git/Github, etc. Como se puede ver en mi perfil de
          github, he trabajado en proyectos en los que se han aplicado estas
          tecnologías y lenguajes de programación.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
