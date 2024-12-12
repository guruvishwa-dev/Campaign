import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Statistic, Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate, useLocation } from "react-router-dom";


// Your campaign data
const campaigns = [
    { "date": "7/28/2020", "campaign_name": "Campaign_A", "impressions": 0, "clicks": 0, "spend": "$0.00", "conversions": 0, "status": "Running" },
    { "date": "7/22/2020", "campaign_name": "Campaign_B", "impressions": 264, "clicks": 22, "spend": "$3.32", "conversions": 0, "status": "Off" },
    { "date": "7/26/2020", "campaign_name": "Campaign_A", "impressions": 1804, "clicks": 11, "spend": "$1.75", "conversions": 0, "status": "Running" },
    { "date": "7/26/2020", "campaign_name": "Campaign_A", "impressions": 6204, "clicks": 418, "spend": "$63.47", "conversions": 0, "status": "Running" },
    { "date": "7/25/2020", "campaign_name": "Campaign_A", "impressions": 858, "clicks": 22, "spend": "$0.89", "conversions": 0, "status": "Running" },
    { "date": "7/27/2020", "campaign_name": "Campaign_A", "impressions": 0, "clicks": 0, "spend": "$0.00", "conversions": 0, "status": "Running" },
    { "date": "7/25/2020", "campaign_name": "Campaign_A", "impressions": 0, "clicks": 0, "spend": "$0.00", "conversions": 0, "status": "Running" },
    { "date": "7/27/2020", "campaign_name": "Campaign_A", "impressions": 0, "clicks": 0, "spend": "$0.00", "conversions": 0, "status": "Running" },
    { "date": "7/28/2020", "campaign_name": "Campaign_C", "impressions": 1793, "clicks": 11, "spend": "$16.19", "conversions": 0, "status": "Running" },
    { "date": "7/23/2020", "campaign_name": "Campaign_B", "impressions": 250, "clicks": 20, "spend": "$3.32", "conversions": 0, "status": "Off" },
    { "date": "7/25/2020", "campaign_name": "Campaign_A", "impressions": 6413, "clicks": 407, "spend": "$59.40", "conversions": 0, "status": "Running" },
    { "date": "7/24/2020", "campaign_name": "Campaign_A", "impressions": 29282, "clicks": 1001, "spend": "$194.29", "conversions": 0, "status": "Running" }
  ];

// Filter campaign data based on the campaign name from URL
const getCampaignData = (campaignName) => {
    // const { state } = useLocation();
  return campaigns.filter(campaign => campaign.campaign_name === campaignName);
};

export const CampiagnPerformance = () => {
  
  const { campaignName } = useParams(); // Capture campaign name from the URL
  const campaignData = getCampaignData(campaignName);
console.log(campaignData)
  if (campaignData.length === 0) {
    return <div>No data available for this campaign.</div>;
  }

  // Aggregate data by date for this specific campaign
  const aggregatedData = campaignData.reduce((acc, item) => {
    const date = item.date;
    if (!acc[date]) {
      acc[date] = { date: date, impressions: 0, clicks: 0, spend: 0 };
    }
    acc[date].impressions += item.impressions;
    acc[date].clicks += item.clicks;
    acc[date].spend += parseFloat(item.spend.replace('$', ''));
    return acc;
  }, {});

  const chartData = Object.values(aggregatedData);

  return (
    <>
      <Row gutter={16} style={{ marginBottom: 24 }}>

   <Col span={24}>
    <h2>{`Performance for ${campaignName}`}</h2> {/* This is the title for the section */}
  </Col>
  <Col span={8}>
    <Card >
      <Statistic title="Total Impressions" value={chartData.reduce((acc, data) => acc + data.impressions, 0)} />
    </Card>
  </Col>
  <Col span={8}>
    <Card  bordered={false}>
      <Statistic title="Total Clicks" value={chartData.reduce((acc, data) => acc + data.clicks, 0)} />
    </Card>
  </Col>
  <Col span={8}>
    <Card  bordered={false}>
      <Statistic title="Total Spend" value={`$${chartData.reduce((acc, data) => acc + data.spend, 0).toFixed(2)}`} />
    </Card>
  </Col>
  <Col span={8}>
    <Card  bordered={false}>
      <Statistic title="Score" value='50%' />
    </Card>
  </Col>
</Row>


      {/* Line Chart for Campaign Performance */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={24}>
          <Card title="Campaign Performance Over Time">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="impressions" stroke="#8884d8" />
                <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
                <Line type="monotone" dataKey="spend" stroke="#FF8042" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </>
  );
};
