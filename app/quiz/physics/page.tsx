import QuizTemplate from "@/app/components/QuizTemplate";
import { physicsQuestions } from "@/data/physics";

export default function Page() {
  return (
    <QuizTemplate
      title="Physics Quiz"
      questions={physicsQuestions}
      gradient="linear-gradient(135deg,#1d4ed8,#3b82f6,#93c5fd)"
    />
  );
}
