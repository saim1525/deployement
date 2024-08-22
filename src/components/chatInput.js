import React, { useState } from 'react';
const ChatInput = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">ChatBot Web Application</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-40 resize-none"
            placeholder="Enter case details here..."
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;
