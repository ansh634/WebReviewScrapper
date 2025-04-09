'use client';

import { useState } from 'react';
import axios from 'axios';
import GeminiPrompt from './gemini';
import TopReviews from './topReviews';

export default function AmazonReviewScraper() {
    const [url, setUrl] = useState('');
    const [reviews, setReviews] = useState<ReviewsData | null>(null);
    const [loading, setLoading] = useState(false);
    const [sortBy, setSortBy] = useState('Date');
    const [error, setError] = useState<string | null>(null);
    const [selectedReviews, setSelectedReviews] = useState<Review[]>([]);

    interface Review {
        Rating: string;
        Title: string;
        Author: string;
        Date: string;
        Review: string;
    }

    interface ReviewsData {
        Product: string;
        Rating: string;
        Reviews: Review[];
    }

    const isValidAmazonUrl = (url: string) => {
        const amazonUrlPattern = /^(https?:\/\/)?(www\.)?amazon\.[a-z]{2,3}\/.*$/;
        return amazonUrlPattern.test(url);
    };

    const fetchReviews = async () => {
        if (!isValidAmazonUrl(url)) {
            alert('Invalid Amazon URL');
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('http://127.0.0.1:5001/scrape-amazon', { url });
            setReviews(response.data);
        } catch (error) {
            console.error("Error fetching reviews:", error);
            setError('Error fetching reviews');
        }
        setLoading(false);
    };

    const sortedReviews = () => {
        if (!reviews) return [];
        return [...reviews.Reviews].sort((a, b) => {
            if (sortBy === 'Rating') return parseFloat(b.Rating) - parseFloat(a.Rating);
            if (sortBy === 'Date') return new Date(b.Date).getTime() - new Date(a.Date).getTime();
            return 0;
        });
    };

    const handleReviewClick = (review: Review) => {
        setSelectedReviews((prevReviews) => {
            if (prevReviews.includes(review)) {
                return prevReviews.filter((r) => r !== review);
            } else {
                return [...prevReviews, review].slice(0, 5);
            }
        });
    };

    return (
        <div className="max-w-2xl mx-auto p-4 flex gap-4 flex-col items-center mt-10">
            <h1 className="text-4xl font-bold mb-4">Amazon Product Review Scraper</h1>
            <input
                type="text"
                placeholder="Enter Amazon Product URL"
                className="w-full p-2 border rounded-full mb-2"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button
                onClick={fetchReviews}
                className="text-white px-4 py-2 rounded-full mb-4 bg-black/10 border border-white-100 hover:bg-white/10 hover:bg-opacity-20 transition duration-200"
                disabled={loading}
            >
                {loading ? 'Fetching...' : 'Scrape Reviews'}
            </button>

            {error && <p className="text-red-500">{error}</p>}

            {reviews && (
                <div>
                    <h2 className="text-lg font-semibold">Product: {reviews.Product}</h2>
                    <p className="mb-2">Overall Rating: {reviews.Rating}</p>

                    <label>Sort by: </label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border p-1 mb-4 "
                    >
                        <option value="Date">Date</option>
                        <option value="Rating">Rating</option>
                    </select>

                    {sortedReviews().map((review, index) => (
                        <div
                            key={index}
                            className={`border-none p-2 my-2 bg-white/10 rounded cursor-pointer ${selectedReviews.includes(review) ? 'bg-blue-100' : ''}`}
                            onClick={() => handleReviewClick(review)}
                        >
                            <h3 className="font-semibold">⭐ {review.Rating} - {review.Title}</h3>
                            <p className="text-sm">By {review.Author} on {review.Date}</p>
                            <p>{review.Review}</p>
                        </div>
                    ))}
                </div>
            )}
            {reviews && <TopReviews reviews={sortedReviews()} />}
            <div className="h-4" />
            <div className='flex items-center'>
            <GeminiPrompt selectedReviews={selectedReviews} />
            </div>
            
        </div>
    );
}


