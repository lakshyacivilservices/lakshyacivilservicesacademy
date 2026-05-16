import QuizTemplate from "@/app/components/QuizTemplate";
import { psychologyQuestions } from "@/data/psychology";

export default function Page() {
  return (
    <QuizTemplate
      title="Management UGC NET & PSU Quiz"
      questions={psychologyQuestions}
      gradient="linear-gradient(135deg,#0f766e,#14b8a6,#2dd4bf)"
    />
  );
}