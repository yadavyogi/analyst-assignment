// src/App.js
import React, { useEffect, useRef } from 'react';
import UIComponent from './components/UIComponent';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const uiComponent = new UIComponent({ initialCount: 0 });
    uiComponent.mount(containerRef.current);
  }, []);

  return <div ref={containerRef} />;
}

export default App;
