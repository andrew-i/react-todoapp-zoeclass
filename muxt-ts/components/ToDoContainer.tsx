import { Typography, TextField, Button } from '@mui/material'
import React from 'react'
import { ToDoItem } from './ToDoItem'
import { todoStore } from '../store';

export const ToDoContainer = () => {
//   const todos = [{id: "1", description: "todo test"}];
console.log(todoStore);
  const todos = todoStore((state) => (state.todos));
  const addTodo = todoStore((state) => (state != null ? state.addTodo : () => {}));
  const handleAddTodo = (event: any) => {
    event.preventDefault();
    addTodo(event.target[0].value);
  }

  return (
    <div style={{ marginTop: "5rem",
        backgroundColor: "#fff",
        maxHeight: "80vh",
        padding: "2rem",
        borderRadius: "1rem",
        minWidth: "40vw"
    }}>
        <Typography variant="h1" sx={{ 
            fontSize: "3rem",
            fontWeight: 500,
            marginBottom: "1rem"}}>
            ToDos
        </Typography>

        <form style={{ display: "flex",
                alignItems: "center",
                marginBottom: "1rem"
            }}
            onSubmit={handleAddTodo}
            >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{marginRight: "1rem"}} />
            <Button variant="contained"
                sx={{background: "linear-gradient(0.125turn, #e66465, #9198e5)"}}
                type="submit">
                Add new...</Button>
        </form>

        {todos.map((todo) => {
            return <ToDoItem todo={todo} key={todo.id} />;
        })}
    </div>
  )
}
