import QuizTemplate from "@/app/components/QuizTemplate";
import { neetQuestions } from "@/data/neet";

export default function Page() {
  return (
    <QuizTemplate
      title="NEET Quiz"
      questions={neetQuestions}
      gradient="linear-gradient(135deg,#14532d,#16a34a,#4ade80)"
    />
  );
}
