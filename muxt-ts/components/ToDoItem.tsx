import { Typography, Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from "@mui/icons-material/Delete";
import { todoStore } from '../store';
import { ToDo } from '../types';

interface Props {
    todo: ToDo;
}

export const ToDoItem = ({todo}: Props) => {
  const removeTodo = todoStore((state) => state.removeTodo);
  const toggleChecked = todoStore((state) => state.toggleChecked);

  return (
    <div style={{ backgroundColor: "rgba(231, 231, 231, 0.8)",
        marginBottom: "1rem",
        borderRadius: "0.25rem",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }}>
        <div style={{ display: "flex", alignItems: "center"}}>
            <Checkbox checked={todo.checked} onClick={() => toggleChecked(todo.id)} />
            <Typography sx={{color: todo.checked ? "rgba(181, 181,181,0.8)" : "auto",
                textDecoration: todo.checked ? "line-through" : "none" }}>
                {todo.description}
            </Typography>
        </div>
        <Button onClick={() => removeTodo(todo.id)}>
            <DeleteIcon color="error" />
        </Button>
    </div>
  )
}
