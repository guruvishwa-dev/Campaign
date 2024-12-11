// import React from 'react';
// import { Row, Col, Card, Statistic, Table, Space } from 'antd';
// import { LineChartOutlined, AppstoreAddOutlined } from '@ant-design/icons';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // // Sample campaign data
// const data = [
//     { date: '2024-12-01', impressions: 1000, clicks: 120, spend: 200 },
//     { date: '2024-12-02', impressions: 1500, clicks: 180, spend: 250 },
//     { date: '2024-12-03', impressions: 2000, clicks: 220, spend: 300 },
//     { date: '2024-12-04', impressions: 2500, clicks: 280, spend: 350 },
//     { date: '2024-12-05', impressions: 3000, clicks: 320, spend: 400 },
//   ];
//   // // Sample campaign table data
//   const campaignData = [
//   { key: '1', name: 'Campaign 1', impressions: 1000, clicks: 120, ctr: '12%', spend: 200, roi: '5%' },
//   { key: '2', name: 'Campaign 2', impressions: 1500, clicks: 180, ctr: '12%', spend: 250, roi: '6%' },
//   { key: '3', name: 'Campaign 3', impressions: 2000, clicks: 220, ctr: '11%', spend: 300, roi: '7%' },
//   { key: '4', name: 'Campaign 4', impressions: 2500, clicks: 280, ctr: '11%', spend: 350, roi: '8%' },
// ];
// // // Campaign table columns
// const columns = [
//   {
//     title: 'Campaign Name',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: 'Impressions',
//     dataIndex: 'impressions',
//     key: 'impressions',
//   },
//   {
//     title: 'Clicks',
//     dataIndex: 'clicks',
//     key: 'clicks',
//   },
//   {
//     title: 'CTR',
//     dataIndex: 'ctr',
//     key: 'ctr',
//   },
//   {
//     title: 'Spend ($)',
//     dataIndex: 'spend',
//     key: 'spend',
//   },
//   {
//     title: 'ROI',
//     dataIndex: 'roi',
//     key: 'roi',
//   },
// ];

// export const CampaignPage = () => {
//     return (<>
//         {/* welcome to the common page of the campaign */}
        
//        <Row gutter={16} style={{ marginBottom: 24 }}>
//          {/* Statistics Cards */}
//        <Col span={8}>
//           <Card>
//            <Statistic
//               title="Total Impressions"
//               value={5000}
//               prefix={<AppstoreAddOutlined />}
//               suffix="impressions"
//             />
//           </Card>
//         </Col>
//         <Col span={8}>
//           <Card>
//             <Statistic
//               title="Total Clicks"
//               value={600}
//               prefix={<AppstoreAddOutlined />}
//               suffix="clicks"
//             />
//           </Card>
//         </Col>
//         <Col span={8}>
//           <Card>
//             <Statistic
//               title="Total Spend ($)"
//               value={1000}
//               prefix={<AppstoreAddOutlined />}
//               suffix="USD"
//             />
//           </Card>
//         </Col>
//       </Row>

//       {/* Line Chart for Campaign Performance */}
//       <Row gutter={16} style={{ marginBottom: 24 }}>
//         <Col span={24}>
//           <Card title="Campaign Performance Over Time">
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={data}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="impressions" stroke="#8884d8" />
//                 <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
//               </LineChart>
//             </ResponsiveContainer>
//           </Card>
//         </Col>
//       </Row>

//       {/* Campaign Table */}
//       <Row gutter={16}>
//         <Col span={24}>
//           <Card title="Campaigns Overview">
//             <Table
//               columns={columns}
//               dataSource={campaignData}
//               pagination={false}
//             />
//           </Card>
//         </Col>
//       </Row>

//     </>)
// }


import React from 'react';
import { Row, Col, Card, Statistic, Table ,Typography} from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
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
  { "date": "7/25/2020", "campaign_name": "Campaign_A", "impressions": 6413, "clicks": 407, "spend": "$59.40", "conversions": 0, "status": "Running" },
  { "date": "7/24/2020", "campaign_name": "Campaign_A", "impressions": 29282, "clicks": 1001, "spend": "$194.29", "conversions": 0, "status": "Running" }
];

// Aggregate totals for each campaign
const aggregateCampaignData = () => {
  const campaignAggregates = {};

  campaigns.forEach(item => {
    if (!campaignAggregates[item.campaign_name]) {
      campaignAggregates[item.campaign_name] = {
        campaign_name: item.campaign_name,
        status: item.status,
        impressions: 0,
        clicks: 0,
        spend: 0,
        conversions: 0
      };
    }

    campaignAggregates[item.campaign_name].impressions += item.impressions;
    campaignAggregates[item.campaign_name].clicks += item.clicks;
    campaignAggregates[item.campaign_name].spend += parseFloat(item.spend.replace('$', ''));
    campaignAggregates[item.campaign_name].conversions += item.conversions;
  });

  return Object.values(campaignAggregates);
  
};
// Aggregate data by date
const aggregateDataByDate = () => {
    const dateAggregates = {};
  
    campaigns.forEach(item => {
      const date = item.date;
  
      // If date doesn't exist, create it
      if (!dateAggregates[date]) {
        dateAggregates[date] = {
          date: date,
          impressions: 0,
          clicks: 0,
          spend: 0
        };
      }
  
      // Aggregate data for the specific date
      dateAggregates[date].impressions += item.impressions;
      dateAggregates[date].clicks += item.clicks;
      dateAggregates[date].spend += parseFloat(item.spend.replace('$', ''));
    });
  
    // Convert aggregated data into an array and sort by date
    return Object.values(dateAggregates).sort((a, b) => new Date(a.date) - new Date(b.date));
  };
  
  
// Transform data for chart
const chartData = campaigns.map(item => ({
  date: item.date,
  impressions: item.impressions,
  clicks: item.clicks,
}));

// Campaign table columns
const columns = [
  { title: 'Campaign Name', dataIndex: 'campaign_name', key: 'campaign_name', render: (text) => <Typography.Link>{text}</Typography.Link>, },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Impressions', dataIndex: 'impressions', key: 'impressions' },
  { title: 'Clicks', dataIndex: 'clicks', key: 'clicks' },
  { title: 'Spend', dataIndex: 'spend', key: 'spend', render: spend => `$${spend.toFixed(2)}` },
  { title: 'Conversions', dataIndex: 'conversions', key: 'conversions' },
];

export const CampaignPage = () => {

    const navigate=useNavigate()
  const aggregatedData = aggregateCampaignData();
  const aggregatedDate = aggregateDataByDate();
  // Calculate totals for impressions, clicks, spend, and conversions
  const totalImpressions = aggregatedData.reduce((acc, campaign) => acc + campaign.impressions, 0);
  const totalClicks = aggregatedData.reduce((acc, campaign) => acc + campaign.clicks, 0);
  const totalSpend = aggregatedData.reduce((acc, campaign) => acc + campaign.spend, 0);
  const totalConversions = aggregatedData.reduce((acc, campaign) => acc + campaign.conversions, 0);

//   //for chart -->Calculate totals for impressions, clicks, spend, and conversions
//   const total_Impressions = aggregatedData.reduce((acc, campaign) => acc + campaign.impressions, 0);
//   const total_Clicks = aggregatedData.reduce((acc, campaign) => acc + campaign.clicks, 0);
//   const total_Spend = aggregatedData.reduce((acc, campaign) => acc + campaign.spend, 0);
//   const total_Conversions = aggregatedData.reduce((acc, campaign) => acc + campaign.conversions, 0);

const handleRowClick = (record) => {
console.log('recored',record)
    // Navigate to the performance page for the clicked campaign
    navigate(`/campaign/performance/${record.campaign_name}`);
  };


  return (
    <>
      {/* Welcome message */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        {/* Impressions Card */}
        <Col span={6}>
          <Card>
            <Statistic
              title="Impressions"
              value={totalImpressions.toLocaleString()} // Format the number with commas
              suffix="impressions"
            />
          </Card>
        </Col>

        {/* Spend Card */}
        <Col span={6}>
          <Card>
            <Statistic
              title="Spend"
              value={`$${totalSpend.toFixed(2)}`} // Format as currency
              suffix="USD"
            />
          </Card>
        </Col>

        {/* Clicks Card */}
        <Col span={6}>
          <Card>
            <Statistic
              title="Clicks"
              value={totalClicks.toLocaleString()} // Format the number with commas
              suffix="clicks"
            />
          </Card>
        </Col>

        {/* Conversions Card */}
        <Col span={6}>
          <Card>
            <Statistic
              title="Conversions"
              value={totalConversions.toFixed(1)} // Format the value to one decimal place
              suffix="conversions"
            />
          </Card>
        </Col>
      </Row>

      {/* Line Chart for Campaign Performance */}
      {/* <Row gutter={16} style={{ marginBottom: 24 }}>
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
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row> */}
 <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={24}>
          <Card title="Campaign Performance Over Time">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={aggregatedDate}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickFormatter={(tick) => new Date(tick).toLocaleDateString()} />
                <YAxis />
                <Tooltip formatter={(value, name) => `${name}: ${value}`} />
                <Legend />
                <Line type="monotone" dataKey="impressions" stroke="#8884d8" />
                <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
                <Line type="monotone" dataKey="spend" stroke="#FF8042" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* Campaign Table */}
      <Row gutter={16}>
        <Col span={24}>
          <Card title="Campaign Overview" bordered={false} style={{ marginTop: 20 }}>
            <Table
              columns={columns}
              dataSource={aggregatedData}
              pagination={false}
              onRow={(record) => ({
                onClick: () => handleRowClick(record), // Handle row click
              })}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

