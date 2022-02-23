import React from 'react';
import { Card, Col } from "antd";

function CountryCard({ data }) {
  console.log("saup")

  return (
    <Col span={4}>
      <Card title={data.country} bordered={false} style={{margin:'5px'}}>
        Total Cases: {data.cases}
        <br/>
        Active Cases: {data.active}
        <br/>
        Recovered: {data.recovered}
        <br/>
        Critical: {data.critical}
        <br/>
        Deaths: {data.deaths}
      </Card>
    </Col>
  );
}

export default CountryCard;