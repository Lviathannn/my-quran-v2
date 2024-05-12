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
    const response = await model.generateContent(prompt);
    const text = JSON.parse(response?.response?.text());
    if (!text) {
      return {
        error: "An error occurred",
      };
    }

    return {
      data: text,
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
