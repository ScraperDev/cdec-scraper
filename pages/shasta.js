import fetch from 'isomorphic-unfetch'
import Head from 'next/head';
const ShastaPage = ({ html }) => {
  if (process.browser) {
    async function importParser() {
      const importedParser = await import("../util/parsers/ShastaParser");
      const ShastaParser = importedParser.default;
      const parser = new ShastaParser(html);
      const doc = parser.document;
      parser.splitUpData(doc)
    }
    importParser()
  }
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