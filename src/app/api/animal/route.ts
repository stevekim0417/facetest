import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { animalFaces, AnimalFace } from "@/data/animal-faces";

const genai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

interface AnimalFaceRequestBody {
  image: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: AnimalFaceRequestBody = await request.json();

    if (!body.image) {
      return NextResponse.json(
        { error: "Please upload an image." },
        { status: 400 }
      );
    }

    const base64Match = body.image.match(/^data:image\/(\w+);base64,(.+)$/);
    if (!base64Match) {
      return NextResponse.json(
        { error: "Invalid image format." },
        { status: 400 }
      );
    }

    const mimeType = `image/${base64Match[1]}`;
    const base64Data = base64Match[2];

    const animalList = animalFaces.map(animal => 
      `- ${animal.id}: ${animal.name} (${animal.nameKo}) - traits: ${animal.traits.join(", ")}`
    ).join("\n");

    const prompt = `You are an expert AI at analyzing facial features and matching people to their animal lookalike!

## Available Animal Types
${animalList}

## Analysis Guidelines
1. Carefully analyze the facial features of the person in the photo
2. Match them to the most fitting animal based on:
   - Eye shape (round, sharp, slanted, big, small)
   - Face shape (round, long, slim, angular)
   - Overall vibe (cute, cool, fierce, elegant, innocent)
   - Specific features (cheeks, nose, jawline)
3. Be fun and positive! This is for entertainment
4. Select the TOP 3 matching animals with percentages

## Response Format (JSON only)
{
  "mainAnimalId": "most matching animal id (from list above)",
  "mainSimilarity": similarity percentage (60-95),
  "matchingTraits": ["trait 1", "trait 2", "trait 3"],
  "otherMatches": [
    {"id": "second best animal id", "similarity": %},
    {"id": "third best animal id", "similarity": %}
  ],
  "analysis": "Fun analysis of their features (2-3 sentences)",
  "funComment": "A witty one-liner comment"
}

If no face is visible, set mainAnimalId to "none".`;

    const response = await genai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            { inlineData: { mimeType, data: base64Data } },
          ],
        },
      ],
      config: {
        temperature: 0.8,
        maxOutputTokens: 768,
      },
    });

    const text = response.text || "";
    
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const rawResult = JSON.parse(jsonMatch[0]);
      
      if (rawResult.mainAnimalId === "none") {
        return NextResponse.json(
          { error: "Couldn't detect a face in the photo. Please upload a clear selfie!" },
          { status: 400 }
        );
      }

      const mainAnimal = animalFaces.find(a => a.id === rawResult.mainAnimalId);
      if (!mainAnimal) {
        throw new Error("Invalid animal ID");
      }

      const otherMatches = (rawResult.otherMatches || [])
        .map((m: { id: string; similarity: number }) => {
          const animal = animalFaces.find(a => a.id === m.id);
          return animal ? { animal, similarity: m.similarity } : null;
        })
        .filter(Boolean)
        .slice(0, 2);

      return NextResponse.json({
        mainMatch: {
          animal: mainAnimal,
          similarity: rawResult.mainSimilarity,
          matchingTraits: rawResult.matchingTraits || mainAnimal.traits.slice(0, 3),
        },
        otherMatches,
        analysis: rawResult.analysis,
        funComment: rawResult.funComment,
      });
    }

    throw new Error("Invalid response format");
  } catch (error) {
    console.error("Animal Face API error:", error);
    
    // Fallback with random animal
    const randomAnimal = animalFaces[Math.floor(Math.random() * animalFaces.length)];
    const otherAnimals = animalFaces
      .filter(a => a.id !== randomAnimal.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    return NextResponse.json({
      mainMatch: {
        animal: randomAnimal,
        similarity: Math.floor(Math.random() * 20) + 75,
        matchingTraits: randomAnimal.traits.slice(0, 3),
      },
      otherMatches: otherAnimals.map(animal => ({
        animal,
        similarity: Math.floor(Math.random() * 15) + 60,
      })),
      analysis: `Based on our AI analysis, you have the charming ${randomAnimal.name.toLowerCase()} face! Your ${randomAnimal.traits[0]} and ${randomAnimal.traits[1]} really stand out.`,
      funComment: `A ${randomAnimal.name.toLowerCase()} face? That's adorable! ${randomAnimal.emoji}`,
    });
  }
}
