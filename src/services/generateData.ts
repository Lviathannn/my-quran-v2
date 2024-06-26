import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateData = async <T>(
  prompt: string,
): Promise<{
  data?: T;
  error?: string;
}> => {
  const genAI = new GoogleGenerativeAI(
    process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
  );

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro-latest",
    generationConfig: { responseMimeType: "application/json" },
  });

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    const data = await JSON.parse(text);
    return {
      data,
    };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "An error occurred",
    };
  }
};
