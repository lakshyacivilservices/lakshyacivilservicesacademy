import QuizTemplate from "@/app/components/QuizTemplate";
import { economicsQuestions } from "@/data/economics";

export default function Page() {
  return (
    <QuizTemplate
      title="Economics Quiz"
      questions={economicsQuestions}
      gradient="linear-gradient(135deg,#14532d,#16a34a,#4ade80)"
    />
  );
}
