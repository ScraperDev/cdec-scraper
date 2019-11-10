import { useEffect, useState } from "react";

export default () => {
  const [rvData, setRvData] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getData = async () => {
        // Dynamic import
        const spFile = await import("../util/parsers/ShastaParser");
        const parser = new spFile.ShastaParser();
        const html = await parser.requestHTML('SHA');
        const data = await parser.splitUpData(html);
        const summaryString = await parser.makeSummaryString(data);
        setRvData(data);
      }
      getData();
    }
  }, []);
  return (
    <div>
      {rvData && rvData[0]["outflow"]}
    </div>
  )
}