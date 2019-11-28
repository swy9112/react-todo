import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "./../TodoStore";

const Header = () => {
  const { todos } = useContext(TodoContext);
  return (
    <>
      <H1>Hello Todo</H1>
      <Div>해야할일 ! {todos.filter(v => v.status === "todo").length}개가 있습니다.</Div>
    </>
  );
};

const H1 = styled.h1`
  margin-bottom: 20px;
  padding: 10px 0;
  background: #3e5756;
  font-weight: normal;
  color: #fff;
`;

const Div = styled.div`
  padding: 0 0 10px 0;
`;

export default Header;
