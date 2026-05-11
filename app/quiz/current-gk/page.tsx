import QuizTemplate from "@/app/components/QuizTemplate";
import { currentGKQuestions } from "@/data/current-gk";

export default function Page() {
  return (
    <QuizTemplate
      title="Current GK Quiz"
      questions={currentGKQuestions}
      gradient="linear-gradient(135deg,#581c87,#9333ea,#d8b4fe)"
    />
  );
}
