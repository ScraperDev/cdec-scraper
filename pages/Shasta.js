import fetch from 'isomorphic-unfetch'
import Head from 'next/head';
const ShastaPage = ({ html }) => {
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
  return { };
}

export default ShastaPage;