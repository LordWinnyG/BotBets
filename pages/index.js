
export default function Predictions() {
  const predictions = [
    {
      id: 1,
      text: "$PEPE will 2x by Friday",
      deadline: "Friday",
      botConfidence: "78%",
    },
    {
      id: 2,
      text: "$ETH will drop below $2,800 in 24h",
      deadline: "24h",
      botConfidence: "65%",
    },
    {
      id: 3,
      text: "$SOL will be up 10% by Monday",
      deadline: "Monday",
      botConfidence: "81%",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-8 text-black">
      <h1 className="text-3xl font-bold text-center mb-6">📊 AI-Powered Predictions</h1>
      <div className="grid gap-6 max-w-2xl mx-auto">
        {predictions.map((pred) => (
          <div key={pred.id} className="border border-gray-300 rounded-lg p-4 shadow-md">
            <p className="text-lg font-semibold">{pred.text}</p>
            <p className="text-sm text-gray-600">Deadline: {pred.deadline}</p>
            <p className="text-sm text-green-600">Bot Confidence: {pred.botConfidence}</p>
            <div className="flex justify-between mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Bet With Bot</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Bet Against Bot</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}