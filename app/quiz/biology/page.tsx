import QuizTemplate from "@/app/components/QuizTemplate";
import { biologyQuestions } from "@/data/biology";

export default function Page() {
  return (
    <QuizTemplate
      title="Biology Quiz"
      questions={biologyQuestions}
      gradient="linear-gradient(135deg,#14532d,#22c55e,#86efac)"
    />
  );
}
