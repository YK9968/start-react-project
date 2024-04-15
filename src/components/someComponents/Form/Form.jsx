export default function Form({ onAdd }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAdd({
      text: evt.target.elements.text.value,
      id: Date.now(),
    });
    evt.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" />
      <button type="submit">Add task</button>
    </form>
  );
}
