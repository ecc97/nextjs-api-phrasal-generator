'use client';

import { useState } from 'react';

export default function Home() {
  const [phrasal, setPhrasal] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const getGeneratePhrasal = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/phrases');
      const data = await response.json();
      setPhrasal(data.phrase);
    } catch (error) {
      console.error(error);
      setPhrasal("Error. Please try again.")
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 p-4">
      <h1 className="text-2xl font-bold text-gray-300 mb-4">Random Phrase Generator</h1>

      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <p className="text-lg text-gray-700 mb-4 text-center">
          {loading ? 'Loading...' : phrasal || 'Click the button to generate a phrase!'}
        </p>
        <button
          onClick={getGeneratePhrasal}
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Generate Phrase
        </button>
      </div>
    </div>
  );
}
