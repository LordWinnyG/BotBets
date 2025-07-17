
export default async function handler(req, res) {
  const predictions = [
    {
      id: 1,
      text: "$PEPE will increase by at least 5% in the next 48 hours.",
      deadline: "48h",
      botConfidence: "72%",
    },
    {
      id: 2,
      text: "$ETH will close above $3,100 tomorrow.",
      deadline: "24h",
      botConfidence: "83%",
    },
    {
      id: 3,
      text: "$BONK will gain 3% or more before Monday.",
      deadline: "72h",
      botConfidence: "76%",
    },
  ];

  res.status(200).json(predictions);
}