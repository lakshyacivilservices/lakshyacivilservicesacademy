import QuizTemplate from "@/app/components/QuizTemplate";
import { timeDistanceQuestions } from "@/data/time-distance";

export default function Page() {
  return (
    <QuizTemplate
      title="Time & Distance Quiz"
      questions={timeDistanceQuestions}
      gradient="linear-gradient(135deg,#1d4ed8,#3b82f6,#93c5fd)"
    />
  );
}
