import fetch from 'isomorphic-unfetch'
import Head from 'next/head';
const ShastaPage = ({ html }) => {
  console.log(html);
  return (
    <>
    <Head>
      <title>Shasta Reservoir</title>
    </Head>
    <div>
      
    </div>
    </>
  );
}

ShastaPage.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:3000/api/reservoir/SHA');
  const html = await res.text();
  return { html };
}

export default ShastaPage;