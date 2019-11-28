import React from "react";
import styled from "styled-components";

const Item = ({ todo, changeTodoStatus }) => {
  const toggleItem = e => {
    const id = e.target.dataset.id;
    changeTodoStatus(id);
  };

  const itemClassName = todo.status === "done" ? "toggle" : "";

  return (
    <Li data-id={todo.id} onClick={toggleItem} className={itemClassName}>
      {todo.title}
    </Li>
  );
};

const Li = styled.li`
  &.toggle {
    background: #ccc;
    color: #000;
  }
`;

export default Item;
