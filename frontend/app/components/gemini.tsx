'use client';
import { useState, useRef } from 'react';
import axios from 'axios';

interface Review {
    Rating: string;
    Title: string;
    Author: string;
    Date: string;
    Review: string;
}

interface GeminiPromptProps {
    selectedReviews: Review[];
}

export default function GeminiPrompt({ selectedReviews }: GeminiPromptProps) {
    const [overview, setOverview] = useState('');
    const [loading, setLoading] = useState(false);
    const [speaking, setSpeaking] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const speechSynthRef = useRef<SpeechSynthesisUtterance | null>(null);

    const handleGenerateOverview = async () => {
        if (!selectedReviews || selectedReviews.length === 0) {
            alert("Please select reviews first.");
            return;
        }

        setLoading(true);
        setOverview('');
        setError(null);

        try {
            const res = await axios.post('http://127.0.0.1:5001/generate-gemini-overview', { reviews: selectedReviews });
            setOverview(res.data.overview || "No overview received.");
        } catch (error) {
            console.error("Error fetching overview:", error);
            setError("Error: Unable to fetch overview.");
        }

        setLoading(false);
    };

    const speakText = () => {
        if (!overview) {
            alert("No overview available to speak.");
            return;
        }

        // Stop any ongoing speech
        if (speaking) {
            window.speechSynthesis.cancel();
            setSpeaking(false);
            return;
        }

        // Create a new utterance
        const utterance = new SpeechSynthesisUtterance(overview);
        speechSynthRef.current = utterance;
        
        // Configure speech settings
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;
        utterance.lang = "hi-GB";
        
        // Handle speech events
        utterance.onstart = () => setSpeaking(true);
        utterance.onend = () => setSpeaking(false);
        utterance.onerror = () => {
            setSpeaking(false);
        };

        // Start speaking
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="max-w-md mx-auto p-4 flex flex-col items-center">
            <h1 className="text-xl font-bold mb-4">Gemini AI Overview Generator</h1>

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleGenerateOverview}
                disabled={loading}
            >
                {loading ? "Generating..." : "Generate Overview"}
            </button>

            {overview && (
                <button 
                    onClick={speakText}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded inline-flex items-center ml-2"
                    disabled={loading}
                >
                    {speaking ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                            </svg>
                            Stop
                        </>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Listen
                        </>
                    )}
                </button>
            )}

            {error && <p className="text-red-500 mt-3">{error}</p>}

            {overview && (
                <div className="mt-4 p-4 border rounded bg-gray-800 text-white">
                    <h2 className="font-semibold mb-2">Overview:</h2>
                    <p>{overview}</p>
                </div>
            )}
        </div>
    );
}

