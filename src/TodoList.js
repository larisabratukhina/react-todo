import React from 'react';

const todoList = [
  { id: 1, title: 'Read the requirements' },
  { id: 2, title: 'Complete assignment' },
  { id: 3, title: 'Submit assignment' }
];

function TodoList() {
  return (
    <ul>
      {todoList.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
