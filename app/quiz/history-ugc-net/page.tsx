import QuizTemplate from "@/app/components/QuizTemplate";
import { psychologyQuestions } from "@/data/psychology";

export default function Page() {
  return (
    <QuizTemplate
      title="History UGC NET & PSU Quiz"
      questions={psychologyQuestions}
      gradient="linear-gradient(135deg,#ea580c,#f97316,#facc15)"
    />
  );
}
