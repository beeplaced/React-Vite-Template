// src/App.tsx
import React, { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Desktop from './routes/Desktop';

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Desktop />} />
      </Routes>
    </Router>
  );
};

export default App;