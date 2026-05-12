import QuizTemplate from "@/app/components/QuizTemplate";
import { ancientHistoryMcq as historyQuestions } from "./ancientHistoryMcq";

export default function Page() {
  return (
    <QuizTemplate
      title="History Quiz"
      questions={historyQuestions}
      gradient="linear-gradient(135deg,#7c2d12,#b45309,#f59e0b)"
    />
  );
}
