import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MoodTracker() {
  const [moods, setMoods] = useState([]);
  const [currentMood, setCurrentMood] = useState('');

  useEffect(() => {
    axios.get('/moods').then((response) => {
      setMoods(response.data.moods);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/moods', {
        mood: currentMood,
      })
      .then((response) => {
        setMoods([...moods, response.data.mood]);
        setCurrentMood('');
      });
  };

  const handleChange = (event) => {
    setCurrentMood(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          How are you feeling today?
          <input type="text" value={currentMood} onChange={handleChange} />
        </label>
        <button type="submit">Add Mood</button>
      </form>
      <ul>
        {moods.map((mood) => (
          <li key={mood.id}>{mood.mood}</li>
        ))}
      </ul>
    </div>
  );
}

export default MoodTracker;
