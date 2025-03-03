"use client";
import { useState } from "react";

export default function PriceForm({
  onDataSubmit,
}: {
  onDataSubmit: (data: PriceData) => void;
}) {
  const [costosFijos, setCostosFijos] = useState<number>(0);
  const [costosVariables, setCostosVariables] = useState<number>(0);
  const [margenDeseado, setMargenDeseado] = useState<number>(0);
  const [preciosCompetencia, setPreciosCompetencia] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onDataSubmit({
      costosFijos,
      costosVariables,
      margenDeseado,
      preciosCompetencia,
    });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {" "}
      <div>
        {" "}
        <label htmlFor="costosFijos">Costos Fijos</label>{" "}
        <input
          id="costosFijos"
          type="number"
          className="border p-2 w-full"
          value={costosFijos}
          onChange={(e) => setCostosFijos(Number(e.target.value))}
        />{" "}
      </div>{" "}
      <div>
        {" "}
        <label htmlFor="costosVariables">Costos Variables</label>{" "}
        <input
          id="costosVariables"
          type="number"
          className="border p-2 w-full"
          value={costosVariables}
          onChange={(e) => setCostosVariables(Number(e.target.value))}
        />{" "}
      </div>{" "}
      <div>
        {" "}
        <label htmlFor="margenDeseado">Margen Deseado</label>{" "}
        <input
          id="margenDeseado"
          type="number"
          className="border p-2 w-full"
          value={margenDeseado}
          onChange={(e) => setMargenDeseado(Number(e.target.value))}
        />{" "}
      </div>{" "}
      <div>
        {" "}
        <label htmlFor="preciosCompetencia">
          Precios Competencia (opcional)
        </label>{" "}
        <input
          id="preciosCompetencia"
          type="number"
          className="border p-2 w-full"
          value={preciosCompetencia}
          onChange={(e) => setPreciosCompetencia(Number(e.target.value))}
        />{" "}
      </div>{" "}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 mt-4">
        {" "}
        Generar Estrategias{" "}
      </button>{" "}
    </form>
  );
}
