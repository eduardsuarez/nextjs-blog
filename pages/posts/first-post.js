import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";


export default function FirstPost() {
  return (
    <Layout>

    
    
      <Head>
        <title>Fist Post</title>
      </Head>


      <h1>Fist Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      </Layout>
    
  );
}
