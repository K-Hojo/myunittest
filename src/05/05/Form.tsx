import { useId, useState } from "react";
import { InputAccount } from "./InputAccount";
import { Agreement } from "./Ageement";

export function Form() {
  const [checked, setChecked] = useState(false);
  const headingId = useId();
  return (
    <form aria-labelledby={headingId}>
      <h2 id={headingId}>アカウント登録</h2>
      <InputAccount />
      <Agreement
        onChange={(e) => {
          setChecked(e.currentTarget.checked);
        }}
      />
      <div>
        <button disabled={!checked}>サインアップ</button>
      </div>
    </form>
  );
}
