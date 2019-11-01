import React from "react";
import styled from "styled-components";

const List = ({ todos }) => {
  const todoList = todos.map((todo, i) => <li key={`todo${i}`}>{todo}</li>);

  return <Wrap>{todoList}</Wrap>;
};

const Wrap = styled.ul``;

export default List;
