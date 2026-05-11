import QuizTemplate from "@/app/components/QuizTemplate";
import { timeWorkQuestions } from "@/data/time-work";

export default function Page() {
  return (
    <QuizTemplate
      title="Time & Work Quiz"
      questions={timeWorkQuestions}
      gradient="linear-gradient(135deg,#0f172a,#334155,#94a3b8)"
    />
  );
}
