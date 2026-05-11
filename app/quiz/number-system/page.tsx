import QuizTemplate from "@/app/components/QuizTemplate";
import { numberSystemQuestions } from "@/data/number-system";

export default function Page() {
  return (
    <QuizTemplate
      title="Number System Quiz"
      questions={numberSystemQuestions}
      gradient="linear-gradient(135deg,#581c87,#9333ea,#d8b4fe)"
    />
  );
}
