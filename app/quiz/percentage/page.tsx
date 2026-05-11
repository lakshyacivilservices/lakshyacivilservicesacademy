import QuizTemplate from "@/app/components/QuizTemplate";
import { percentageQuestions } from "@/data/percentage";

export default function Page() {
  return (
    <QuizTemplate
      title="Percentage Quiz"
      questions={percentageQuestions}
      gradient="linear-gradient(135deg,#0f766e,#14b8a6,#5eead4)"
    />
  );
}
