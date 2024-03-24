import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(task));

    setTask("");
    event.target.value = null;
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input placeholder="enter todo" type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        &nbsp;&nbsp;
        <button>Add Task</button>
      </form>
    </>
  );
}
