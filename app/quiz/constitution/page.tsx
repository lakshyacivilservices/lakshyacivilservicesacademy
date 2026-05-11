import QuizTemplate from "@/app/components/QuizTemplate";
import { constitutionQuestions } from "@/data/constitution";

export default function Page() {
  return (
    <QuizTemplate
      title="Constitution Quiz"
      questions={constitutionQuestions}
      gradient="linear-gradient(135deg,#7c2d12,#ea580c,#fdba74)"
    />
  );
}
