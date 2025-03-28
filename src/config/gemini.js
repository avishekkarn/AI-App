import { GoogleGenerativeAI } from "@google/generative-ai";

// API key (Ensure it's a string)
const apiKey = "AIzaSyBYaZtyHmzv8x_C-xCfu7VAnTHg1V2Jgp0";

// Debugging: Check if API key is loaded
console.log("API Key Loaded:", apiKey ? "Loaded Successfully" : "Missing API Key");

if (!apiKey) {
    throw new Error("API key is missing. Please provide a valid Gemini API key.");
}

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

// Optimized `run` function
async function run(prompt) {
    try {
        console.log("Sending prompt:", prompt);

        // Generate response from Gemini
        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            generationConfig,
        });

        // Extract response text
        const responseText = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received";
        console.log("Gemini Response:", responseText);

        return responseText;
        
    } catch (error) {
        console.error("Error in Gemini API Call:", error.message);
        return "Error fetching response from Gemini AI.";
    }
}

export default run;
