export default function SingleCard({ emoji, handleChoice, flipped }) {
  const handleFirstClick = () => {
    handleChoice(emoji);
  };

  return (
    <div
      className="relative w-full h-[120px] cursor-pointer"
      onClick={handleFirstClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          flipped ? "rotate-y-180" : "rotate-y-0"
        }`}
        style={{ perspective: "1000px" }}
      >
        {/* Front side of the card (orange background) */}
        <div className="absolute w-full h-full bg-orange-400 backface-hidden rounded-lg flex justify-center items-center">
          {/* Front view - orange background */}
          <span className="text-lg font-bold">Card</span>
        </div>

        {/* Back side of the card (emoji) */}
        <div className="absolute w-full h-full bg-white rotate-y-180 backface-hidden rounded-lg flex justify-center items-center">
          <div className="text-3xl">{emoji.emoji}</div>
        </div>
      </div>
    </div>
  );
}
