import React from "react";

interface Todo<Extrafields extends object = {}> {
  id: string; // Change to string if you're using Firestore IDs
  todoName: string;
  isDone: boolean;
  [key: string]:
    | string
    | number
    | boolean
    | object
    | Extrafields[keyof Extrafields];
}

interface ListCardProps<TYPE extends Todo = Todo> {
  // Set a default generic
  item: TYPE;
}

function ListCard({ item }: ListCardProps) {
  // Remove the generic type from here
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
