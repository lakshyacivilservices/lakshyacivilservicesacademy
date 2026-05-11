import QuizTemplate from "@/app/components/QuizTemplate";
import { bankingQuestions } from "@/data/banking";

export default function Page() {
  return (
    <QuizTemplate
      title="Banking Quiz"
      questions={bankingQuestions}
      gradient="linear-gradient(135deg,#14532d,#22c55e,#84cc16)"
    />
  );
}
