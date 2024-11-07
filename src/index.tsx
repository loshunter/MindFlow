// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18+

const App: React.FC = () => {
  return <h1>Welcome to MindFlow!</h1>;
};

// Create the root and render the App component
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
