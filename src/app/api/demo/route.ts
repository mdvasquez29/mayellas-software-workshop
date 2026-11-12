import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

// Automatically uses process.env.GEMINI_API_KEY
const ai = new GoogleGenAI();

export async function POST(req: Request) {
  try {
    const { toolType, userInput } = await req.json();

    let systemInstruction = "";

    if (toolType === "voice") {
      systemInstruction = `You are an AI inventory & work-order parser for an auto repair and trucking fleet shop in Calexico/Mexicali. 
      The user will speak or type a raw voice note in English, Spanish, or Spanglish (e.g., "Necesito dos filtros de aceite para un Kenworth T680, bahia 3").
      Parse this input and return a clean JSON string with:
- parsedItems: items with name, part#, quantity
- targetBay: e.g., "Bay 3"
- inventoryStatus: "In Stock at Calexico Warehouse" or "Order Needed"
- summary: 1-sentence summary of the automated action taken in Google Sheets.`;
    } else if (toolType === "outbound") {
      systemInstruction = `You are an elite B2B growth engineer at AITech Workshop, a software studio in Calexico/Mexicali. 
      The user wants to target a specific local industry (e.g., cross-border logistics fleets or auto repair shops).
      Generate a short, high-converting bilingual (English & Spanish) cold email and SMS sequence that pitches operational automation and recovers lost revenue. Keep it punchy, professional, and localized.`;
    } else {
      systemInstruction = `You are a Lead Software Architect at AITech Workshop, a local-first software studio in the Imperial Valley.
      A business owner will describe their unique operational bottleneck.
      Generate a professional, concise 3-step automation architecture pipeline connecting WhatsApp/Twilio, Google Sheets, and Google Drive. Keep it grounded in real business value.`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userInput,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.2,
      },
    });

    return NextResponse.json({ result: response.text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to process demo" }, { status: 500 });
  }
}