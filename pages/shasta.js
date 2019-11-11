import { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

import { Layout } from "../components/Layout";

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
    <Layout>
      <Row>
        <Col xs="12" sm={{ span: 10, offset: 1}} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3}}>
          <Card>
            <Card.Header>
              <Card.Title className="text-center mb-0" as="h2">Shasta Reservoir</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Title className="text-center">Summary:</Card.Title>
              <Card.Text>
                {summaryString && summaryString}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}