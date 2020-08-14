import React from 'react';
import Header from './components/Header';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div className="container">
      <Header />
      <TodosContainer />
    </div>
  );
}

export default App;
