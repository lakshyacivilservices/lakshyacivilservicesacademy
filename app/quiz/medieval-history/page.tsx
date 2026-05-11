import QuizTemplate from "@/app/components/QuizTemplate";
import { medievalHistoryQuestions } from "@/data/medieval-history";

export default function Page() {
  return (
    <QuizTemplate
      title="Medieval History Quiz"
      questions={medievalHistoryQuestions}
      gradient="linear-gradient(135deg,#7c2d12,#ea580c,#fdba74)"
    />
  );
}
