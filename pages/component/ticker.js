// pages/component/Ticker.js (move to /components/Ticker.js if needed)
export default function Ticker() {
  return (
    <div style={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      backgroundColor: '#000',
      color: '#fff',
      padding: '10px 0',
      width: '100%',
      fontSize: '16px'
    }}>
      <div style={{
        display: 'inline-block',
        animation: 'ticker 20s linear infinite'
      }}>
        ETH will rise 2% · BTC holding steady · BONK trending on Twitter · You can’t outsmoke $PEPE ·
      </div>

      <style jsx>{`
        @keyframes ticker {
          0%   { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
