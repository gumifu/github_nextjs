import React, { useState } from 'react';
import './style.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

export const App = () => {
  const [todoTxet,setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value); 

  //追加ボタンの実装
  const onClickAdd = () => {
    if (todoTxet === "") return;
    const newTodos = [...incompleteTodos, todoTxet];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  //削除ボタンの実装
  const onClickDelete = (index) => {
    // alert(index);
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //完了ボタンの実装
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //戻るボタンの実装
  const onClickback = (index) => {
    const newBackTodos = [...completeTodos];
    newBackTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newBackTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo todoTxet={todoTxet} onChange={onChangeTodoText} onClick={onClickAdd}/>
      <IncompleteTodos incompleteTodos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>
      <CompleteTodos completeTodos={completeTodos} onClickback={onClickback}/>
    </>
  );
};