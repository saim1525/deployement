import React from 'react';

const ChatOutput = ({ summary, articles }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200 mt-6">
    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Summary:</h2>
    <p className="text-gray-800 mb-4">{summary}</p>
    <h2 className="text-2xl font-semibold text-blue-700 mt-4 mb-4">Applicable Articles/Sections:</h2>
    <ul className="list-disc pl-5 space-y-2">
      {articles.map((article, index) => (
        <li key={index} className="text-gray-800">{article}</li>
      ))}
    </ul>
  </div>
);

export default ChatOutput;
