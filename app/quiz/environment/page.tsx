import QuizTemplate from "@/app/components/QuizTemplate";
import { environmentQuestions } from "@/data/environment";

export default function Page() {
  return (
    <QuizTemplate
      title="Environment Quiz"
      questions={environmentQuestions}
      gradient="linear-gradient(135deg,#14532d,#22c55e,#86efac)"
    />
  );
}
