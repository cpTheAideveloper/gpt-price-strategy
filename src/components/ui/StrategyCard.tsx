export default function StrategyCard({
  strategy,
  onSelect,
}: {
  strategy: PriceStrategy;
  onSelect: (strategy: PriceStrategy) => void;
}) {
  return (
    <div
      className="p-4 border rounded shadow cursor-pointer hover:bg-gray-50"
      onClick={() => onSelect(strategy)}
    >
      {" "}
      <h3 className="font-bold text-lg">{strategy.title}</h3>{" "}
      <p>{strategy.description}</p>{" "}
    </div>
  );
}
