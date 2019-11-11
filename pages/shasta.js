import { useEffect, useState } from "react";

export default () => {
  // const [rvData, setRvData] = useState(null);
  const [summaryString, setSummaryString] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getData = async () => {
        // Dynamic import
        const spFile = await import("../util/parsers/ShastaParser");
        const parser = new spFile.ShastaParser();
        const html = await parser.requestHTML('SHA');
        const data = await parser.splitUpData(html);
        setSummaryString(await parser.makeSummaryString(data));
      }
      getData();
    }
  }, []);
  return (
    <div>
      {summaryString && summaryString}
    </div>
  )
}