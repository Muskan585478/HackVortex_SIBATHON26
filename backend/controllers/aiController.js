const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.explainReport = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "No text provided" });
    }

    // NEW MODEL NAME
    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash"   // <-- change here
    });

    const result = await model.generateContent(
      `Explain this medical report in simple words for a normal person:\n${text}`
    );

    const explanation = result.response.text();

    res.json({ explanation });

  } catch (error) {
    console.error("GEMINI ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};