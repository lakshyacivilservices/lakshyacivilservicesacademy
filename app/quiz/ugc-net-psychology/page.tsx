import QuizTemplate from "@/app/components/QuizTemplate";
import { psychologyQuestions } from "@/data/psychology";

export default function Page() {
  return (
    <QuizTemplate
      title="UGC NET Psychology Quiz"
      questions={psychologyQuestions}
      gradient="linear-gradient(135deg,#2563eb,#7c3aed,#ec4899)"
    />
  );
}