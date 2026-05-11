import QuizTemplate from "@/app/components/QuizTemplate";
import { simplificationQuestions } from "@/data/simplification";

export default function Page() {
  return (
    <QuizTemplate
      title="Simplification Quiz"
      questions={simplificationQuestions}
      gradient="linear-gradient(135deg,#14532d,#22c55e,#86efac)"
    />
  );
}
