import QuizTemplate from "@/app/components/QuizTemplate";
import { stateGKQuestions } from "@/data/state-gk";

export default function Page() {
  return (
    <QuizTemplate
      title="State GK Quiz"
      questions={stateGKQuestions}
      gradient="linear-gradient(135deg,#7c2d12,#ea580c,#fb923c)"
    />
  );
}
