import QuizTemplate from "@/app/components/QuizTemplate";
import { psychologyQuestions } from "@/data/psychology";

export default function Page() {
  return (
    <QuizTemplate
      title="Anthropology UGC NET & PSU Quiz"
      questions={psychologyQuestions}
      gradient="linear-gradient(135deg,#1e3a8a,#2563eb,#60a5fa)"
    />
  );
}
