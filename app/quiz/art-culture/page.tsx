import QuizTemplate from "@/app/components/QuizTemplate";
import { artCultureQuestions } from "@/data/art-culture";

export default function Page() {
  return (
    <QuizTemplate
      title="Art & Culture Quiz"
      questions={artCultureQuestions}
      gradient="linear-gradient(135deg,#7c2d12,#ea580c,#fdba74)"
    />
  );
}
