import React, { useState } from 'react';
import ChatInput from './chatInput';
import ChatOutput from './chatOutput';

const Chatbot = () => {
  const [summary, setSummary] = useState('');
  const [articles, setArticles] = useState([]);

  const handleChatInput = async (caseDetails) => {
    try {
      const response = await fetch('http://localhost:5000/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ caseDetails }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSummary(data.summary);
      setArticles(data.articles);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <ChatInput onSubmit={handleChatInput} />
        {summary && <ChatOutput summary={summary} articles={articles} />}
      </div>
    </div>
  );
};

export default Chatbot;
