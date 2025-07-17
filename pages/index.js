export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <img
        src="/botbets.jpg"
        alt="Bot Bets Logo"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain mb-6"
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
        Bot Bets is coming soon.
      </h1>
      <p className="text-gray-700 text-sm sm:text-base max-w-md">
        Outsmart the bots. Bet on crypto, memes, and markets. Join us soon for the launch of the world’s first AI-powered prediction game.
      </p>
    </div>
  );
}
