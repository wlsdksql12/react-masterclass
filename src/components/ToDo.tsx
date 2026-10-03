import { useSetAtom } from "jotai";
import { Categories, toDoState, type IToDo } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetAtom(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.name);
    setToDos((oldToDos) => {
      return oldToDos.map((todo) =>
        todo.id === id
          ? { ...todo, category: event.currentTarget.name as any }
          : todo,
      );
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To_Do
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
