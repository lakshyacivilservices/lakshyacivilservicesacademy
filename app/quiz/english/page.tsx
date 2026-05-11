import QuizTemplate from "@/app/components/QuizTemplate";
import { englishQuestions } from "@/data/english";

export default function Page() {
  return (
    <QuizTemplate
      title="English Learning Quiz"
      questions={englishQuestions}
      gradient="linear-gradient(135deg,#312e81,#6366f1,#8b5cf6)"
    />
  );
}
