export default function Custombutton({ value, onUpdate }) {
  return <button onClick={onUpdate}>Current: {value}</button>;
}
