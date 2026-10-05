import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useForm } from "react-hook-form";
import { categoryState, toDoState, type IToDo } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetAtom(toDoState);
  const category = useAtomValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDos((ToDos) => [{ text: toDo, id: Date.now(), category }, ...ToDos]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toDo", { required: true })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
