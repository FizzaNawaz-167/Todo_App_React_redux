import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), task: "Demo-Task", isDone: false, isUpdated: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actoin) => {
      const newTodo = {
        id: nanoid(),
        task: actoin.payload,
        isDone: false,
      };
      state.todos.push(newTodo);
    },

    deleteTodo: (state, actoin) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== actoin.payload;
      });
    },

    markAsDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = true;
          return todo;
        } else {
          return todo;
        }
      });
    },

    updateSingleTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isUpdated = true;
          return todo;
        } else {
          return todo;
        }
      });
    },

    updateAll: (state, action) => {
      state.todos = state.todos.map((todo) => {
        todo.isUpdated = true;
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, markAsDone, updateSingleTodo, updateAll } =
  todoSlice.actions;
export default todoSlice.reducer;
