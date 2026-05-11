import QuizTemplate from "@/app/components/QuizTemplate";
import { worldHistoryQuestions } from "@/data/world-history";

export default function Page() {
  return (
    <QuizTemplate
      title="World History Quiz"
      questions={worldHistoryQuestions}
      gradient="linear-gradient(135deg,#581c87,#9333ea,#d8b4fe)"
    />
  );
}
