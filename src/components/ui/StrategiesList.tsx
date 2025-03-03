export default function StrategiesList({
  strategies,
}: {
  strategies: PriceStrategy[];
}) {
  return (
    <div className="p-4">
      {" "}
      <h2 className="text-lg font-bold mb-4">Cartera de Precios</h2>{" "}
      <ul className="list-disc list-inside">
        {" "}
        {strategies.map((strategy, index) => (
          <li key={index} className="mb-2">
            {" "}
            <span className="font-semibold">{strategy.title}: </span>{" "}
            {strategy.recommendedPrice}{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
}
