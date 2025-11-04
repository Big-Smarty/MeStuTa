// app/page.tsx
'use client'; 
// Marking as client component is technically necessary here 
// only if you plan to use useState, otherwise it would be a static server component.
// We keep it 'use client' for the interactive button example.

import { useState } from 'react';

// Static asset path, assuming hfu.jpg is in public/assets/
const HFU_LOGO_PATH = "/assets/hfu.jpg";

export default function HomePage() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterClick = () => {
    // This is purely client-side logic—perfect for a static app!
    setIsRegistered(true);
    alert('🎉 Successfully pre-registered! Check the app console for details.');
  };

  return (
    <>
      <header className="header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          
          {/* HFU Logo: Uses the static path */}
          <img 
            src={HFU_LOGO_PATH} 
            alt="Hochschule Furtwangen University Logo" 
            style={{ height: '40px', marginRight: '15px' }} 
          />
          
          {/* Event Title */}
          <span className="logo-text">Mestuta Tech Summit</span>
        </div>
        <nav>
          {/* Navigation links using the green accent defined in globals.css */}
          <a href="#" style={{ color: 'var(--hfu-white)', marginLeft: '20px' }}>Schedule</a>
          <a href="#" style={{ color: 'var(--hfu-white)', marginLeft: '20px' }}>Map</a>
        </nav>
      </header>

      <main className="container">
        
        {/* Main Hero Card with HFU Blue Heading */}
        <div className="event-card" style={{ textAlign: 'center' }}>
          <h1>Mestuta: Innovation im Schwarzwald</h1>
          <p style={{ fontSize: '1.2em', color: 'var(--hfu-blue-medium)' }}>
            **Die beste Zeit** – A collaborative summit on applied sciences and sustainability at HFU.
          </p>
          <p>
            Hosted by Hochschule Furtwangen University, this event is designed to connect students, faculty, and industry partners in the heart of the Black Forest.
          </p>
        </div>

        {/* Details Card */}
        <div className="event-card">
          <h2>🗓️ Key Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px 5px', margin: '20px 0' }}>
            <strong>📅 Date & Time:</strong>
            <span>November 18, 2025 | 09:30 - 17:00</span>
            
            <strong>📍 Location:</strong>
            <span>HFU Campus Furtwangen, Building A (Aula)</span>
            
            <strong>💡 Focus:</strong>
            <span>Applied AI, Industry 4.0, Green Tech, Digital Health</span>
          </div>
          
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <button onClick={handleRegisterClick} disabled={isRegistered}>
              {isRegistered ? '✅ Pre-Registered' : 'Join the Summit (Free)'}
            </button>
            {isRegistered && 
              <p style={{ marginTop: '10px', color: 'var(--hfu-green-accent)' }}>
                Thank you! Your interest has been recorded.
              </p>
            }
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Hochschule Furtwangen University. Powered by Bun and Tauri.</p>
        <p>
          <a href="https://www.hs-furtwangen.de/" target="_blank" rel="noopener noreferrer">HFU Official</a> | 
          <a href="#" target="_blank" rel="noopener noreferrer">Campus Info</a>
        </p>
      </footer>
    </>
  );
}