import QuizTemplate from "@/app/components/QuizTemplate";
import { psychologyQuestions } from "@/data/psychology";

export default function Page() {
  return (
    <QuizTemplate
      title="PET Quiz"
      questions={psychologyQuestions}
      gradient="linear-gradient(135deg,#16a34a,#06b6d4,#2563eb)"
    />
  );
}
