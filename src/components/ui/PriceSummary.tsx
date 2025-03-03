"use client";

export default function PriceSummary({ data }: { data: PriceData }) {
  if (!data) return null;

  const { costosFijos, costosVariables, margenDeseado, preciosCompetencia } =
    data;
  return (
    <div className="p-4 border-l border-gray-200 w-full h-full">
      {" "}
      <h2 className="text-lg font-semibold mb-2">Resumen Preliminar</h2>{" "}
      <p>Costos Fijos: {costosFijos}</p>{" "}
      <p>Costos Variables: {costosVariables}</p>{" "}
      <p>Margen deseado: {margenDeseado}</p>{" "}
      <p>Precios Competencia: {preciosCompetencia}</p>{" "}
    </div>
  );
}
