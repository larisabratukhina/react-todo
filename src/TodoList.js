import React from 'react';
import TodoListItem from "./TodoListItem";

const todoList = [
  { id: 1, title: 'Read the requirements' },
  { id: 2, title: 'Complete assignment' },
  { id: 3, title: 'Submit assignment' }
];

function TodoList() {
  
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} todo={item.title} />
      ))}
    </ul>
  );
}

export default TodoList;
