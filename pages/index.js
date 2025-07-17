export default function Ticker() {
  return (
    <div style={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: '100%',
      background: '#f0f0f0',
    }}>
      <div
        style={{
          display: 'inline-block',
          animation: 'ticker 20s linear infinite',
          padding: '10px 0',
          fontWeight: 'bold',
        }}
      >
        ETH will rise 2% • BTC holding steady • BONK trending on Twitter • PEPE moon incoming •
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
