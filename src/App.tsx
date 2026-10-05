import { useAtom, useAtomValue } from "jotai";
import { hourSelector, minuteState } from "./atoms";
import "./style/reset.css";
import type { ReactElement } from "react";

function App() {
  const [minutes, setMinutes] = useAtom(minuteState);
  const [hours, setHours] = useAtom(hourSelector);

  const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={onHoursChange}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
}

export default App;
