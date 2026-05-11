import QuizTemplate from "@/app/components/QuizTemplate";
import { ancientHistoryQuestions } from "@/data/ancient-history";

export default function Page() {
  return (
    <QuizTemplate
      title="Ancient History Quiz"
      questions={ancientHistoryQuestions}
      gradient="linear-gradient(135deg,#92400e,#d97706,#fbbf24)"
    />
  );
}
