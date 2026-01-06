import { useState, useCallback } from 'react';
import axios from 'axios';

export const useJoke = () => {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchJoke = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            // Fetching a random joke, excluding dark content for safety, enabling both single and twopart
            // Fetching a random joke, excluding 'Dark' category and other unsafe content
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/joke/Programming,Misc,Pun,Spooky,Christmas`, {
                params: {
                    blacklistFlags: 'nsfw,religious,political,racist,sexist,explicit'
                }
            });

            if (response.data.error) {
                setError('Failed to fetch joke');
            } else {
                setJoke(response.data);
            }
        } catch (err) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    }, []);

    return { joke, loading, error, fetchJoke };
};
