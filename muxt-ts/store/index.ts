import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'
import { ToDo } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface ToDoStore {
    todos: ToDo[];
    addTodo: (description: string) => void;
    removeTodo: (id: string) => void;
    toggleChecked: (id: string) => void;
};

export const todoStore = create<ToDoStore>()(
    devtools(
        persist(
            (set) => ({
                todos: [],
                addTodo: (description) => {
                    set((state) => ({
                        todos: [...state.todos,
                            { id: uuidv4(), description, checked: false }]
                    }));
                },
                removeTodo: (id) => {
                    set((state) => ({ todos: state.todos.filter(
                        (todo) => todo.id !== id)} ));
                },
                toggleChecked: (id) => {
                    set((state) => ({
                        todos: state.todos.map((todo) => todo.id === id ? {...todo,
                            checked: !todo.checked } : todo)
                    }))
                }
            }),
            { name: 'todoStore'}
        )
    )
);