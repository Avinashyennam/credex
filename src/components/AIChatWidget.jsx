// src/components/AIChatWidget.jsx
import React, { useState } from "react";

const EXAMPLE_QUESTIONS = [
  "How do I sell my license?",
  "What payment methods do you accept?",
  "How can I contact support?",
];

const MOCK_RESPONSES = {
  "How do I sell my license?": "To sell your license, go to the 'Sell Licenses' page, upload your license details, and submit.",
  "What payment methods do you accept?": "We accept credit cards, PayPal, and bank transfers.",
  "How can I contact support?": "You can contact support via the Contact page or email us at support@softsell.com.",
};

const AIChatWidget = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const OPENAI_API_KEY = ""; // Put your OpenAI API key here or leave empty for mock

  const sendToOpenAI = async (prompt) => {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 150,
        }),
      });

      const data = await response.json();

      if (data.error) {
        console.error("OpenAI API error:", data.error);
        return "Sorry, I couldn't process your request right now.";
      }

      return data.choices[0].message.content;
    } catch (error) {
      console.error("Fetch error:", error);
      return "Sorry, I couldn't process your request right now.";
    }
  };

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMsg = { sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    let botResponse = "";

    if (!OPENAI_API_KEY) {
      botResponse = MOCK_RESPONSES[text] || "Sorry, I don't have an answer for that.";
    } else {
      botResponse = await sendToOpenAI(text);
    }

    setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    setLoading(false);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition"
          aria-label="Open chat"
          title="Chat with us"
        >
          💬
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 w-80 bg-white shadow-lg rounded-lg flex flex-col">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg font-semibold flex justify-between items-center">
            <span>AI Chat Support</span>
            <button
              onClick={() => setOpen(false)}
              className="text-white text-xl font-bold focus:outline-none"
              aria-label="Close chat"
              title="Close chat"
            >
              &times;
            </button>
          </div>

          <div
            className="flex-grow p-4 overflow-y-auto"
            style={{ maxHeight: "300px", minHeight: "200px" }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-3 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded ${
                    msg.sender === "user"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-gray-500 italic">Typing...</div>}
          </div>

          <div className="border-t p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Ask me something..."
              className="w-full border rounded px-2 py-1"
              disabled={loading}
            />
          </div>

          <div className="border-t p-2 flex flex-wrap gap-2 bg-gray-50">
            {EXAMPLE_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-sm bg-blue-100 text-blue-800 rounded px-3 py-1 hover:bg-blue-200 transition"
                disabled={loading}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatWidget;
