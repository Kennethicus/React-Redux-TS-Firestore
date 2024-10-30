import "../styles/List.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import ListCard from "./ListCard";

import { fetchTodos, addTodo } from "../feature/listSlicer";
import React, { useEffect } from "react";

function List() {
  const dispatch: AppDispatch = useDispatch();
  const listData = useSelector((state: RootState) => state.lists);
  const [newTodoName, setNewTodoName] = React.useState("");

  // ? fetch todos when component mounts
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // ? Adding new todo
  const handleAddTodo = async () => {
    if (newTodoName.trim()) {
      await dispatch(addTodo({ todoName: newTodoName, isDone: false }));
      setNewTodoName("");
    }
  };

  // ? Render list todos
  const listDataELements = listData.map((item) => (
    <ListCard key={item.id} item={item} />
  ));

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setNewTodoName(value);
  }

  return (
    <div className="list-container">
      <div className="input-container">
        <input
          value={newTodoName}
          onChange={(e) => handleChange(e)}
          className="input"
          type="text"
        />
        <button onClick={handleAddTodo} className="add-button">
          <p>+</p>
        </button>
      </div>
      <div className="todo-container">
        <div className="todo-title">
          <div className="title">List</div>

          <button className="clear-button">Clear</button>
        </div>
        <div className="todo-list-container">{listDataELements}</div>
      </div>
    </div>
  );
}

export default List;
