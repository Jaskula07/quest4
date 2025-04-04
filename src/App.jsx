import React, { useState, useEffect } from 'react';

function CyberpunkSavingsApp() {
  const [goal, setGoal] = useState(1000);
  const [saved, setSaved] = useState(0);
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const newXp = saved * 0.1;
    setXp(newXp);
    const newLevel = Math.floor(newXp / 10) + 1;
    if (newLevel > level) {
      setLevel(newLevel);
      setMessage(`🎉 Awans! Masz teraz poziom ${newLevel}!`);
      setTimeout(() => setMessage(''), 3000);
    }
  }, [saved]);

  const handleSave = () => {
    const amount = Math.floor(Math.random() * 100 + 10); // losowa kwota
    setSaved(saved + amount);
  };

  const progress = Math.min((saved / goal) * 100, 100).toFixed(1);

  return (
    <div style={{
      background: '#000',
      color: '#0f0',
      fontFamily: 'monospace',
      minHeight: '100vh',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 style={{ color: '#88f' }}>💰 FinansowyQuest</h1>
      <p>Cel: {goal} €</p>
      <p>Zaoszczędzono: {saved} €</p>
      <p>Postęp: {progress}%</p>
      <div style={{ width: '80%', height: '30px', background: '#333', margin: '1rem 0' }}>
        <div style={{ width: `${progress}%`, height: '100%', background: '#0f0' }}></div>
      </div>
      <p>🎮 Poziom: {level} | XP: {xp.toFixed(1)}</p>
      {message && <div style={{ color: '#0ff', marginBottom: '1rem' }}>{message}</div>}
      <button
        onClick={handleSave}
        style={{
          padding: '1rem 2rem',
          background: '#5500aa',
          color: '#fff',
          border: 'none',
          borderRadius: '10px',
          fontSize: '1.2rem',
          cursor: 'pointer'
        }}
      >
        ➕ Dodaj oszczędność
      </button>
    </div>
  );
}

export default CyberpunkSavingsApp;
