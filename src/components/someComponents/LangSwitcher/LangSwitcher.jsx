import { useId } from "react";

export default function LangSwitcher({ value, onSelect }) {
  const selectId = useId();

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select
        value={value}
        onChange={(evt) => {
          onSelect(evt.target.value);
        }}
        id={selectId}
      >
        <option value="en">English</option>
        <option value="uk">Ukraine</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
}
