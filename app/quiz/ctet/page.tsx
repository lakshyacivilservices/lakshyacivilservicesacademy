import QuizTemplate from "@/app/components/QuizTemplate";
import { ctetQuestions } from "@/data/ctet";

export default function Page() {
  return (
    <QuizTemplate
      title="CTET Quiz"
      questions={ctetQuestions}
      gradient="linear-gradient(135deg,#0f766e,#14b8a6,#2dd4bf)"
    />
  );
}
