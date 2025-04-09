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
    reviews: Review[] | null;
}

export default function TopReviews({ reviews }: GeminiPromptProps) {
    const [overview, setOverview] = useState('');
    const [loading, setLoading] = useState(false);
    const [speaking, setSpeaking] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const speechSynthRef = useRef<SpeechSynthesisUtterance | null>(null);

    const handleGenerateSummary = async () => {
        if (!reviews || reviews.length === 0) {
            alert("No reviews available to summarize.");
            return;
        }

        // Take top 5 reviews
        const topReviews = reviews.slice(0, 5);
        
        setLoading(true);
        setOverview('');
        setError(null);

        try {
            const res = await axios.post('http://127.0.0.1:5001/generate-gemini-overview', { 
                reviews: topReviews 
            });
            setOverview(res.data.overview || "No overview received.");
        } catch (error) {
            console.error("Error fetching overview:", error);
            setError("Error: Unable to fetch overview.");
        }

        setLoading(false);
    };

    const speakText = () => {
        if (!overview) {
            alert("No summary available to speak.");
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
            // setError("Error occurred while playing speech.");
        };

        // Start speaking
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="mt-6">
            <button
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-200 w-full"
                onClick={handleGenerateSummary}
                disabled={loading || !reviews || reviews.length === 0}
            >
                {loading ? "Generating..." : "Summary of Top Reviews"}
            </button>

            {error && (
                <div className="p-3 bg-red-100 border border-red-300 rounded text-red-700 mt-4">
                    {error}
                </div>
            )}

            {overview && (
                <div className="p-4 border rounded bg-gray-50 mt-4">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">Summary:</h3>
                        <button 
                            onClick={speakText}
                            className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                        >
                            <span>{speaking ? "Stop" : "Listen"}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                {speaking ? (
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                                ) : (
                                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <p className="text-gray-800">{overview}</p>
                </div>
            )}
        </div>
    );
}