import React, { useState } from 'react';
import Welcome from './components/Welcome';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import AccountSettings from './components/AccountSettings';
import BottomNav from './components/BottomNav';

const App = () => {
  const [page, setPage] = useState(0);
  const pages = [
    <Welcome onNext={() => setPage(1)} />,
    <CreateAccount onNext={() => setPage(2)} />,
    <Login onNext={() => setPage(3)} />,
    <AccountSettings />
  ];

  const nextPage = () => setPage((prev) => Math.min(prev + 1, pages.length - 1));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 0));

  return (
    <div className="app-container">
      {pages[page]}
      <div className="arrow-nav">
        <button onClick={prevPage}>←</button>
        <button onClick={nextPage}>→</button>
      </div>
      <BottomNav />
    </div>
  );
};

export default App;
