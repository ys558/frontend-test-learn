import React from 'react';
import TodoList from './containers/TodoList';
import ChangeState from './containers/ChangeState/ChangeState';

function App() {
  return (
    <div>
      <h1>Demo 1 - class Component test:</h1>
      <TodoList/>
      <h1>Demo 2 - hooks test:</h1>
      <ChangeState/>
    </div>
  );
}

export default App;
