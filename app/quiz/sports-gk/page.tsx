import QuizTemplate from "@/app/components/QuizTemplate";
import { sportsGKQuestions } from "@/data/sports-gk";

export default function Page() {
  return (
    <QuizTemplate
      title="Sports GK Quiz"
      questions={sportsGKQuestions}
      gradient="linear-gradient(135deg,#14532d,#22c55e,#86efac)"
    />
  );
}
