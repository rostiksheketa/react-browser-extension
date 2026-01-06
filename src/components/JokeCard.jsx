import React from 'react';

export const JokeCard = ({ joke }) => {
    if (!joke) return null;

    return (
        <div className="joke-card">
            {joke.type === 'single' ? (
                <p className="single-joke">{joke.joke}</p>
            ) : (
                <>
                  <p className="setup">{joke.setup}</p>
                  <p className="delivery">{joke.delivery}</p>
                </>
            )}
            <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#666' }}>
                Category: {joke.category}
            </div>
        </div>
    );
};
