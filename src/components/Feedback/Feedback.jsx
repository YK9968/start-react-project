export default function Feedback({
  value: { good, bad, neutral },
  totalValue,
}) {
  const positivePercentage = Math.round((good / totalValue) * 100);
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Positive: {positivePercentage}%</p>
    </>
  );
}
