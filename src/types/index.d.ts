// File: src/types/index.d.ts
declare global {
  interface PriceData {
    costosFijos: number;
    costosVariables: number;
    margenDeseado: number;
    preciosCompetencia?: number;
  }

  interface PriceStrategy {
    title: string;
    recommendedPrice: number;
    description: string;
    breakdown?: { competencia?: number; margenGanancia?: number };
  }
}


export {};