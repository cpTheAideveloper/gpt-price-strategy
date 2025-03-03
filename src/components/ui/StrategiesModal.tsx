"use client";

import { useState } from "react";
import StrategyCard from "@/components/ui/StrategyCard";

export default function StrategiesModal({
  strategies,
  onClose,
}: {
  strategies: PriceStrategy[];
  onClose: () => void;
}) {
  const [selectedStrategy, setSelectedStrategy] =
    useState<PriceStrategy | null>(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {" "}
      <div className="bg-white p-4 w-11/12 max-w-2xl rounded">
        {" "}
        {!selectedStrategy && (
          <div>
            {" "}
            <h2 className="text-xl font-bold mb-4">
              Estrategias de Precios
            </h2>{" "}
            <div className="grid gap-4">
              {" "}
              {strategies.map((strategy, index) => (
                <StrategyCard
                  key={index}
                  strategy={strategy}
                  onSelect={(str) => setSelectedStrategy(str)}
                />
              ))}{" "}
            </div>{" "}
            <button
              onClick={onClose}
              className="mt-4 bg-red-600 text-white px-4 py-2"
            >
              {" "}
              Cerrar{" "}
            </button>{" "}
          </div>
        )}{" "}
        {selectedStrategy && (
          <div>
            {" "}
            <h3 className="text-lg font-bold">{selectedStrategy.title}</h3>{" "}
            <p className="my-2">{selectedStrategy.description}</p>{" "}
            {selectedStrategy.breakdown && (
              <div className="bg-gray-100 p-2 rounded">
                {" "}
                <p>
                  Competencia: {selectedStrategy.breakdown.competencia}
                </p>{" "}
                <p>
                  Margen Ganancia: {selectedStrategy.breakdown.margenGanancia}
                </p>{" "}
              </div>
            )}{" "}
            <button
              onClick={() => setSelectedStrategy(null)}
              className="mr-2 bg-gray-600 text-white px-4 py-2 mt-4"
            >
              {" "}
              Regresar{" "}
            </button>{" "}
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-4 py-2 mt-4"
            >
              {" "}
              Guardar en Cartera{" "}
            </button>{" "}
          </div>
        )}{" "}
      </div>{" "}
    </div>
  );
}
