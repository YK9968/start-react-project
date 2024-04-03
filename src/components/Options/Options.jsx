export default function Options({ onUpdate, onReset, totalValue }) {
  return (
    <>
      <button
        onClick={() => {
          onUpdate("good");
        }}
      >
        Good
      </button>

      <button
        onClick={() => {
          onUpdate("neutral");
        }}
      >
        Neutral
      </button>

      <button
        onClick={() => {
          onUpdate("bad");
        }}
      >
        Bad
      </button>
      {totalValue > 0 && <button onClick={onReset}>Reset</button>}
    </>
  );
}
