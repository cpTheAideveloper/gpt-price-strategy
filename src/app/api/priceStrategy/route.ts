import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { costosFijos, costosVariables, margenDeseado, preciosCompetencia } =
      body as PriceData;

    const systemMessage = `
  Eres un asistente especializado en estrategias de precios para pequeños negocios.
  La respuesta debe ser un arreglo JSON de objetos con esta estructura:
  [
    {
      "title": "Estrategia X",
      "recommendedPrice": 999,
      "description": "Explicación breve",
      "breakdown": {
        "competencia": 100,
        "margenGanancia": 300
      }
    }
  ]
  Ajusta los valores de acuerdo a los datos proporcionados.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemMessage },
        {
          role: "user",
          content: JSON.stringify({
            costosFijos,
            costosVariables,
            margenDeseado,
            preciosCompetencia,
          }),
        },
      ],
    });

    const aiResponse = completion.choices[0].message?.content || "[]";
    return NextResponse.json(JSON.parse(aiResponse));
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
