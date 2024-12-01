export const QueryDatabase = async (question: string, chatHistory: { question: string; answer: string }[]) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, chatHistory }),
    });

    if (response.ok) {
      const responseData = await response.json();
      return responseData; // Returns the 'answer' and 'chatHistory'
    } else {
      console.error("Server returned an error:", response.status, response.statusText);
      throw new Error("Server error");
    }
  } catch (error) {
    console.error("Error in QueryDatabase:", error);
    throw error;
  }
};
