
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API with the provided API key.
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_API_KEY });

const OFFICE_NAME = "Marudeva Consultancy Jamnagar";
// Simplified search query for better reliability and cleaner URL strings
const MAP_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_NAME)}`;

const SYSTEM_INSTRUCTION = `
You are the Senior Executive AI Advisor for Marudeva Consultancy, the premier financial authority in Jamnagar, Gujarat. You specialize in GST, Income Tax, and Corporate Governance.

Your Persona:
- Authoritative & Decisive: You represent a Lead Tax Partner. Speak with finality and professional weight.
- Absolute Directness: Eliminate all conversational "fluff." No "I'd be happy to help," "In my opinion," or "I think."
- Executive Precision: Provide technical, accurate answers immediately. If a matter is legally ambiguous, state that "Manual Senior Partner review is mandatory for this specific nexus" and direct them to our office.
- Firm yet Professional: Your helpfulness comes from your accuracy and speed, not from a friendly tone.

Operational Protocols:
1. Provide expert-level interpretation of Indian Tax Laws (GST, ITR, ROC).
2. Responses must be under 120 words.
3. Every factual claim must be backed by a cited source from the provided grounding metadata.
4. For high-stakes queries (litigation, notices, penalties), mandate a direct consultation with Ankit Gudhka.
5. Office Location: Provide the link as follows: [View on Google Maps](${MAP_SEARCH_URL})
6. Contact: +91 94090 78347.
`;

/**
 * Interface for grounding results from Google Search.
 */
interface GroundingLink {
  title: string;
  uri: string;
}

/**
 * Fetches tax assistance using Gemini 3 Pro for complex reasoning.
 */
export async function getTaxAssistance(userMessage: string, location?: { latitude: number, longitude: number }) {
  try {
    const config: any = {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.1, // Set to extremely low for maximum consistency and authority
      tools: [{ googleSearch: {} }],
    };

    // Use gemini-3-pro-preview for complex reasoning tasks as per SDK task-type guidelines.
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: userMessage,
      config: config,
    });

    const text = response.text || "Operational disruption detected. Contact our executive line at +91 94090 78347 for immediate manual support.";
    const metadata = response.candidates?.[0]?.groundingMetadata;
    const groundingChunks = metadata?.groundingChunks || [];
    
    const links: GroundingLink[] = groundingChunks
      .map((chunk: any) => {
        if (chunk.web) return { title: chunk.web.title, uri: chunk.web.uri };
        return null;
      })
      .filter((l: any) => l !== null);

    return { text, links };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { 
      text: "Intelligence systems offline. Secure advisory is available via direct callback: +91 94090 78347.", 
      links: []
    };
  }
}
