import React from 'react';
import data from './store/data.json';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Table dataSource={data} />
    </div>
  );
}

export default App;
