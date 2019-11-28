import React, { useContext } from "react";
import styled from "styled-components";
import Item from "./Item.js";
import { TodoContext } from "./../TodoStore";

const List = () => {
  const { todos, loading, changeTodoStatus } = useContext(TodoContext);
  let todoList = <div>loading...</div>;
  if (!loading) todoList = todos.map(todo => <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus} />);

  return <Wrap>{todoList}</Wrap>;
};

const Wrap = styled.ul`
  display: block;
  margin-top: 20px;

  li {
    display: block;
    width: 100%;
    margin: auto;
    padding: 10px 0;
    border-top: 1px solid #eee;
  }
`;

export default List;
