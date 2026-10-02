import { atom, useAtom } from "jotai";
import { useState } from "react";
import { useForm } from "react-hook-form";

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

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>([]);

function ToDoList() {
  const [toDos, setToDos] = useAtom(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    console.log("add to do", toDo);
    setToDos((ToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...ToDos,
    ]);
    setValue("toDo", "");
  };
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
