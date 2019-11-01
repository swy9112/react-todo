import React, { useState, useEffect } from "react";
import List from "./components/List";

const App = () => {
  const [todos, setTodos] = useState([`js공부`]);
  const [newTodo, setNewTodo] = useState("");

  const handleChange = e => {
    setNewTodo(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    newTodo ? setTodos([...todos, newTodo]) : alert("내용을 입력하세요.");
  };

  const delTodo = () => {
    console.log(todos);
  };

  const fetchInitialData = async () => {
    const response = await fetch("http://localhost:8080/todo");
    const initialData = await response.json();
    console.log(initialData);
  };

  useEffect(() => {
    console.log("내용이 추가되었습니다.");
  }, [todos]);

  useEffect(() => {
    fetchInitialData();
  });

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={addTodo}>추가</button>
      <button onClick={delTodo}>삭제</button>
      <List todos={todos} />
    </React.Fragment>
  );
};

export default App;
