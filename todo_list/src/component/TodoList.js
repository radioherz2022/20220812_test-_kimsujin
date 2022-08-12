import styled from "styled-components";
import TodoItem from "./TodoItem";

export default function TodoList({todoList, onToggle, onRemove}){
    return ( 
    <Block>
        {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove}/>))}
    </Block>
    )
}

const Block = styled.ul`
    flex:1;


`