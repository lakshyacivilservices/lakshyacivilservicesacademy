import QuizTemplate from "@/app/components/QuizTemplate";
import { indianHistoryQuestions } from "@/data/indian-history";

export default function Page() {
  return (
    <QuizTemplate
      title="Indian History Quiz"
      questions={indianHistoryQuestions}
      gradient="linear-gradient(135deg,#7c2d12,#ea580c,#fdba74)"
    />
  );
}
