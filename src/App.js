import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [newTodo, setNewTodo] = React.useState('');

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      {newTodo}
      <TodoList />
    </div>
  );
}

export default App;
