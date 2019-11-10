import fetch from 'isomorphic-unfetch'
import Head from 'next/head';
import { useState } from 'react';

const ShastaPage = ({ html }) => {
  // const [lastWeekData, setLastWeekData] = useState(null);
  if (process.browser) {
    async function importParser() {
      const importedParser = await import("../util/parsers/ShastaParser");
      const ShastaParser = importedParser.default;
      const parser = new ShastaParser(html);
      const doc = parser.document;
      console.log('works');
      setLastWeekData(parser.splitUpData(doc))
    }
    importParser()
  }
  return (
    <>
    <Head>
      <title>Shasta Reservoir</title>
    </Head>
    <div>
      {/* {lastWeekData && lastWeekData[0].storage} */}
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