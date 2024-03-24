import "./App.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Todo from "./components/Todo";

export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
