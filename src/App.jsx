import { useEffect } from 'react';
import './App.css';
import { useJoke } from './hooks/useJoke';
import { JokeCard } from './components/JokeCard';

function App() {
  const { joke, loading, error, fetchJoke } = useJoke();

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  return (
    <div className="app-container">
      <h1>Random Joke Generator</h1>
      
      {loading && <p>Loading joke...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {!loading && !error && joke && <JokeCard joke={joke} />}
      
      <button onClick={fetchJoke} disabled={loading} style={{ marginTop: '1rem' }}>
        {loading ? 'Fetching...' : 'Get Another Joke'}
      </button>
    </div>
  );
}

export default App;
