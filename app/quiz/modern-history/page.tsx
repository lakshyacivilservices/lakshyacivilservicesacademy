import QuizTemplate from "@/app/components/QuizTemplate";
import { modernHistoryQuestions } from "@/data/modern-history";

export default function Page() {
  return (
    <QuizTemplate
      title="Modern History Quiz"
      questions={modernHistoryQuestions}
      gradient="linear-gradient(135deg,#7f1d1d,#dc2626,#fca5a5)"
    />
  );
}
