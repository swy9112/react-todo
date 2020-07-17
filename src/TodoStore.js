import React, { useState, useEffect } from "react";
import styled from "styled-components";
import List from "./components/List";
//import useFetch from "./useFetch";
import Header from "./components/Header";
import Form from "./components/Form";
import "./TodoStore.css";

export const TodoContext = React.createContext();

const TodoStore = () => {
  const [todos, setTodos] = useState([]);

  //const loading = useFetch(setTodos, "http://localhost:8080/todo");
  const loading = "";

  const addTodo = newTodo => {
    newTodo ? setTodos([...todos, { id: todos.length, title: newTodo, status: "todo" }]) : alert("내용을 입력하세요.");
  };

  const changeTodoStatus = id => {
    const updateTodos = todos.map(todo => {
      if (todo.id === +id) {
        if (todo.status === "done") todo.status = "todo";
        else todo.status = "done";
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  const delTodo = e => {
    e.preventDefault();
    setTodos(todos.filter(v => v.status === "todo"));
  };

  useEffect(() => {
    //console.log("내용이 추가되었습니다.", todos);
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, addTodo, delTodo, loading, changeTodoStatus }}>
      <Wrap>
        <TodoWrap>
          <Header />
          <Form />
          <List />
        </TodoWrap>
      </Wrap>
    </TodoContext.Provider>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const TodoWrap = styled.div`
  width: 400px;
  margin-bottom: 200px;
  text-align: center;
  border: 1px solid #ccc;
`;

export default TodoStore;
