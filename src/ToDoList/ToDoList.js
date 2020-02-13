import React, { useState } from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";

const StyledUl = styled.ul`
  padding: 0;
`;

const Container = styled.div`
  border-radius: 3px;
  width: 400px;
  height: 110px;
  margin: 0 auto;
  background-color: #eee;
  background-clip: border-box;
  border: none;
  border-radius: 0.5rem;
  border-color: #c4c4c4;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px hsla(0, 0%, 76.9%, 0.4);
  margin-top: 20px;
`;

export default function TodoList() {
  const [num, setNum] = useState(0);

  return (
    <Container>
      <ToDoForm />
      <StyledUl>
        <ToDoItem id="todo-1" title="Learn React.js" />
        <ToDoItem id="todo-2" title="Learn Vue.js" />
        <ToDoItem id="todo-3" title="Learn Laravel" />
      </StyledUl>
    </Container>
  );
}
