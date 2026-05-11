import QuizTemplate from "@/app/components/QuizTemplate";
import { mathsQuestions } from "@/data/maths";

export default function Page() {
  return (
    <QuizTemplate
      title="Maths Quiz"
      questions={mathsQuestions}
      gradient="linear-gradient(135deg,#991b1b,#ef4444,#fca5a5)"
    />
  );
}
