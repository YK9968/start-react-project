import Description from "../Description/Description";
import { useEffect, useState } from "react";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedBack, setFeedBack] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedBack));
  }, [feedBack]);

  const totalFeedback = feedBack.good + feedBack.neutral + feedBack.bad;

  const updateFeedback = (feedbackType) => {
    setFeedBack({
      ...feedBack,
      [feedbackType]: feedBack[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedBack({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <Description />
      <Options
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        totalValue={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback value={feedBack} totalValue={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
