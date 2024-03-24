import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import "./Todo.css";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  markAsDone,
  updateAll,
  updateSingleTodo,
} from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <AddForm />
      <br />
      <h2>Todo List App</h2>
      <div className="todo-div">
        <ul className="list">
          {todos.map((todo) => (
            <li
              className="list-item"
              key={todo.id}
              style={{
                textDecorationLine: todo.isDone ? "line-through" : "none",
              }}
            >
              {todo.isUpdated === true ? todo.task.toUpperCase() : todo.task}
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </button>
              <button
                style={todo.isDone ? { backgroundColor: "green" } : {}}
                onClick={() => dispatch(markAsDone(todo.id))}
              >
                isDone
              </button>
              <button
                style={todo.isUpdated ? { backgroundColor: "green" } : {}}
                onClick={() => dispatch(updateSingleTodo(todo.id))}
              >
                Updateded
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={() => dispatch(updateAll())}>Update All</button>
    </>
  );
}
