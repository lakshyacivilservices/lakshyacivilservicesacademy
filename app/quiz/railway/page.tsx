import QuizTemplate from "@/app/components/QuizTemplate";
import { railwayQuestions } from "@/data/railway";

export default function Page() {
  return (
    <QuizTemplate
      title="Railway Quiz"
      questions={railwayQuestions}
      gradient="linear-gradient(135deg,#7c2d12,#ea580c,#f97316)"
    />
  );
}
