import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "./../TodoStore";

const Form = () => {
  const inputRef = useRef(false);
  const { addTodo, delTodo } = useContext(TodoContext);

  const addTodoData = e => {
    e.preventDefault();
    addTodo(inputRef.current.value);
  };

  return (
    <>
      <form action="">
        <Input type="text" ref={inputRef} />
        <Button onClick={addTodoData}>추가</Button>
        <Button onClick={delTodo}>삭제</Button>
      </form>
    </>
  );
};

const Input = styled.input`
  height: 30px;
  padding: 4px;
  outline: none;
  box-sizing: border-box;
`;

const Button = styled.button`
  height: 30px;
  padding: 4px;
  background: #bbb;
  color: #fff;
  outline: none;
  border: none;
`;

export default Form;
