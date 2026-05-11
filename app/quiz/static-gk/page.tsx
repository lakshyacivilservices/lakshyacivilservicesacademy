import QuizTemplate from "@/app/components/QuizTemplate";
import { staticGKQuestions } from "@/data/static-gk";

export default function Page() {
  return (
    <QuizTemplate
      title="Static GK Quiz"
      questions={staticGKQuestions}
      gradient="linear-gradient(135deg,#581c87,#9333ea,#e9d5ff)"
    />
  );
}
