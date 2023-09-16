import React, { useState, useEffect } from 'react';
import SelectPrefecture from './components/SelectPrefecture/SelectPrefecture';
import JobDataDisplay from './components/JobData/JobDataDisplay';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>求人・求職者データ表示</h1>
      <SelectPrefecture />
      <JobDataDisplay />
    </div>
  );
}

export default App;
