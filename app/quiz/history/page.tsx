import QuizTemplate from "@/app/components/QuizTemplate";
import { historyQuestions } from "@/data/history";

export default function Page() {
  return (
    <QuizTemplate
      title="History Quiz"
      questions={historyQuestions}
      gradient="linear-gradient(135deg,#7c2d12,#b45309,#f59e0b)"
    />
  );
}
