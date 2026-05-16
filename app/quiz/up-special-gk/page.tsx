import QuizTemplate from "@/app/components/QuizTemplate";
import { psychologyQuestions } from "@/data/psychology";

export default function Page() {
  return (
    <QuizTemplate
      title="UP Special GK Quiz"
      questions={psychologyQuestions}
      gradient="linear-gradient(135deg,#0f172a,#2563eb,#06b6d4)"
    />
  );
}
