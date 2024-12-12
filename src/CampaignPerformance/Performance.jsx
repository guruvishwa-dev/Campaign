
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, LabelList} from "recharts";

// Sample data
const campaigns = [
  { "date": "7/28/2020", "campaign_name": "Campaign_A", "impressions": 0, "clicks": 0, "spend": "$0.00", "conversions": 0, "status": "Running" ,"type":"Facebook – Lookalike" },
  { "date": "7/22/2020", "campaign_name": "Campaign_B", "impressions": 264, "clicks": 22, "spend": "$3.32", "conversions": 0, "status": "Off" , "type":"Web – Retargeting"},
  { "date": "7/26/2020", "campaign_name": "Campaign_A", "impressions": 1804, "clicks": 11, "spend": "$1.75", "conversions": 0, "status": "Running"  ,"type":"Facebook – Lookalike"},
  { "date": "7/26/2020", "campaign_name": "Campaign_A", "impressions": 6204, "clicks": 418, "spend": "$63.47", "conversions": 0, "status": "Running"  ,"type":"Facebook – Lookalike"},
  { "date": "7/25/2020", "campaign_name": "Campaign_A", "impressions": 858, "clicks": 22, "spend": "$0.89", "conversions": 0, "status": "Running" ,"type":"Facebook – Lookalike" },
  { "date": "7/27/2020", "campaign_name": "Campaign_A", "impressions": 0, "clicks": 0, "spend": "$0.00", "conversions": 0, "status": "Running" ,"type":"Facebook – Lookalike" },
  { "date": "7/25/2020", "campaign_name": "Campaign_A", "impressions": 0, "clicks": 0, "spend": "$0.00", "conversions": 0, "status": "Running" ,"type":"Facebook – Lookalike" },
  { "date": "7/27/2020", "campaign_name": "Campaign_A", "impressions": 0, "clicks": 0, "spend": "$0.00", "conversions": 0, "status": "Running"  ,"type":"Facebook – Lookalike"},
  { "date": "7/28/2020", "campaign_name": "Campaign_C", "impressions": 1793, "clicks": 11, "spend": "$16.19", "conversions": 0, "status": "Running" ,"type":"Web – Contextual"},
  { "date": "7/23/2020", "campaign_name": "Campaign_B", "impressions": 250, "clicks": 20, "spend": "$3.32", "conversions": 0, "status": "Off" },
  { "date": "7/25/2020", "campaign_name": "Campaign_A", "impressions": 6413, "clicks": 407, "spend": "$59.40", "conversions": 0, "status": "Running" ,"type":"Facebook – Lookalike"},
  { "date": "7/24/2020", "campaign_name": "Campaign_A", "impressions": 29282, "clicks": 1001, "spend": "$194.29", "conversions": 0, "status": "Running" ,"type":"Facebook – Lookalike"}
];
// Function to calculate performance scores
const calculatePerformance = (data) => {
  const aggregatedData = {};

  data.forEach((campaign) => {
    const { campaign_name, impressions, clicks } = campaign;
    if (!aggregatedData[campaign_name]) {
      aggregatedData[campaign_name] = { impressions: 0, clicks: 0 };
    }
    aggregatedData[campaign_name].impressions += impressions;
    aggregatedData[campaign_name].clicks += clicks;
  });

  return Object.keys(aggregatedData).map((name) => {
    const { impressions, clicks } = aggregatedData[name];
    const score = impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) : 0;
    return { campaign_name: name, impressions, clicks, score };
  });
};

const Performance = () => {
  const performanceData = calculatePerformance(campaigns);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* <h1>Campaign Performance Dashboard</h1> */}

      {/* Bar Chart for Campaign Performance */}
      <h2>Performance Scores for All Campaigns</h2>
      <BarChart width={600} height={300} data={performanceData}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="campaign_name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="score" fill="#228be6" name="Performance Score">
    <LabelList dataKey="score" position="inside" style={{ fill: '#fff', fontSize: '14px', fontWeight: 'bold' }} />
  </Bar>
</BarChart>


      {/* Campaign Details with Suggestions */}
      <h2>Campaign Suggestions</h2>

<div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
  {performanceData.map((campaign) => (
    <div
      key={campaign.campaign_name}
      style={{
        flex: "1 1 calc(50% - 20px)", // Each card takes up half the row minus the gap
        margin: "10px 0",
        padding: "10px",
        border: "1px solid #ccc",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <h3>{campaign.campaign_name}</h3>
      <p>Performance Score: {campaign.score}%</p>
      <p>Impressions: {campaign.impressions}</p>
      <p>Clicks: {campaign.clicks}</p>
      <p>Performance Score: {campaign.score}%</p>
      <p>
        Suggestion:{" "}
        {campaign.score > 10
          ? "Great performance! Keep it up."
          : campaign.score > 5
          ? "Performance is decent. Consider improving ad creatives."
          : "Low performance. Focus on better targeting and content."}
      </p>
    </div>
  ))}
</div>

    </div>
  );
};

export default Performance;
