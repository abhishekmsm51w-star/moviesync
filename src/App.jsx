import { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Simulated Wait Times
  const [washroomWait, setWashroomWait] = useState(3);
  const [foodCourtWait, setFoodCourtWait] = useState(12);

  const movies = [
    { title: 'Dhurandhar 1', time: '10:00 AM', status: 'Ended', duration: '2h 10m' },
    { title: 'Dhurandhar 2', time: '1:30 PM', status: 'Now Showing', duration: '2h 30m', isNowShowing: true },
    { title: 'Dr Abhishek Ki Video', time: '5:00 PM', status: 'Next', duration: '1h 45m' },
  ];

  useEffect(() => {
    // Clock Simulator
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Dynamic Wait Time Simulator
    const dataTimer = setInterval(() => {
      // Fluctuate washroom wait time between 1 and 8 mins
      setWashroomWait(prev => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        return Math.max(1, Math.min(8, prev + change));
      });

      // Fluctuate food court wait time between 5 and 25 mins
      setFoodCourtWait(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to 2
        return Math.max(5, Math.min(25, prev + change));
      });
    }, 5000); // Update every 5 seconds for visual dynamic effect

    return () => {
      clearInterval(timer);
      clearInterval(dataTimer);
    };
  }, []);

  const getStatusColor = (wait) => {
    if (wait <= 4) return 'status-low';
    if (wait <= 10) return 'status-medium';
    return 'status-high';
  };

  const getStatusText = (wait) => {
    if (wait <= 4) return 'Low';
    if (wait <= 10) return 'Medium';
    return 'High';
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
          </svg>
          MovieSync
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div className="live-badge">
            <div className="pulse-dot"></div>
            Live Updates
          </div>
          <div className="current-time">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
        </div>
      </header>

      <main className="grid">
        <section className="card">
          <h2 className="card-title">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Today's Schedule
          </h2>
          <div className="schedule-list">
            {movies.map((movie, index) => (
              <div key={index} className={`movie-item ${movie.isNowShowing ? 'now-showing' : ''}`}>
                <div className="movie-time">{movie.time}</div>
                <div className="movie-details">
                  <h3>{movie.title}</h3>
                  <p>{movie.duration} • {movie.status}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <h2 className="card-title">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            Live Wait Times
          </h2>
          <div className="wait-times-grid">
            
            <div className={`wait-time-panel ${getStatusColor(washroomWait)}`}>
              <div className="wait-time-info">
                <h3>Washrooms</h3>
                <p>Near Screen 1-4</p>
              </div>
              <div className="wait-time-status">
                <div className="wait-time-number">
                  {washroomWait} <span>min</span>
                </div>
                <div className="status-badge">
                  {getStatusText(washroomWait)}
                </div>
              </div>
            </div>

            <div className={`wait-time-panel ${getStatusColor(foodCourtWait)}`}>
              <div className="wait-time-info">
                <h3>Food Court</h3>
                <p>Main Concourse</p>
              </div>
              <div className="wait-time-status">
                <div className="wait-time-number">
                  {foodCourtWait} <span>min</span>
                </div>
                <div className="status-badge">
                  {getStatusText(foodCourtWait)}
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
