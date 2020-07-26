import React from 'react';
import TodoList from './containers/TodoList';
import Counter from './containers/Counter/MyCounter';
import Pokemon from './containers/Pokemon/Pokemon';
import TestHookByEnzyme from './containers/TestHookByEnzyme/TestHookByEnzyme'

function App() {
  return (
    <div>
      <h1>Demo 1</h1>
      <Counter/>
      <h1>Demo 2</h1>
      <TodoList/>
      <h1>Demo 3 test hooks by @testing-library/react-hooks</h1>
      <Pokemon />
      <h1>Demo 4 test hooks by Enzyme</h1>
      {/* <TestHookByEnzyme/> */}
    </div>
  );
}

export default App;
