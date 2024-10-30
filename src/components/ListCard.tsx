import React from "react";

interface Todo<Extrafields extends object = {}> {
  id: number;
  todoName: string;
  isDone: boolean;
  [key: string]: string | number | boolean | object | Extrafields[keyof Extrafields]
}

interface ListCardProps<TYPE extends Todo> {
  item: TYPE;
}

function ListCard({ item }: ListCardProps<Todo>) {
  const { id, todoName, isDone } = item;
  const [verify, setVerify] = React.useState(isDone);

  return (
    <div className="list-container">
      <input
        className="checkbox"
        type="checkbox"
        checked={verify}
        onChange={() => setVerify((verify) => !verify)}
      />
      <div className="list-title">{todoName}</div>

      <button className="delete-button">X</button>
    </div>
  );
}

export default ListCard;

interface Starship<T, K> {
  name: T;
  speed: K;
}

const ship1: Starship<string, number> = {
  name: "Pan",
  speed: 1_000_000,
};

console.log("Before update:", ship1);

function UpdateShip(
  shipname: Starship<string, number>,
  updates: Partial<Starship<string, number>>
) {
  return {
    ...shipname,
    ...updates,
  };
}

console.log("After update:", UpdateShip(ship1, { speed: 1_000_000_000 }));
