import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import VideoCall from './VideoCall/VideoCall';
import Discuss from './Discuss/Discuss';
import Fun from './Fun/Fun';
import Design from './Designing/Design'
import Management from './Management/Management';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/videocall" element={<VideoCall />} />
        <Route path="/discuss" element={<Discuss />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/management" element={<Management />} />
        <Route path="/fun/design" element={<Design />} />
      </Routes>
    </Router>
  );
}

export default App;
