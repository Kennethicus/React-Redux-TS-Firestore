import "../styles/List.css";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import ListCard from "./ListCard";
function List() {
  const listData = useSelector((state: RootState) => state.lists);

  const listDataELements = listData.map((item) => (
    <ListCard key={item.id} item={item} />
  ));

  return (
    <div className="list-container">
      <div className="input-container">
        <input className="input" type="text" />
        <button className="add-button">
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
