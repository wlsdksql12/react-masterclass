import { useAtom, useAtomValue } from "jotai";
import CreateToDo from "./CreateToDo";
import {
  Categories,
  categoryState,
  toDoSelector,
  toDoState,
  type IToDo,
} from "../atoms";
import ToDo from "./ToDo";

// function ToDoList() {
//   const [value, setValue] = useState("");
//   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(event.target.value);
//   };
//   const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(value);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={value} placeholder="Write a to do" />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  // const toDos = useAtomValue(toDoState);
  const toDos = useAtomValue(toDoSelector);
  const [category, setCategory] = useAtom(categoryState);
  const onInput = (event: React.InputEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as IToDo["category"]);
  };
  console.log(category);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default ToDoList;
