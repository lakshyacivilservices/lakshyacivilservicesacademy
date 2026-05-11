import QuizTemplate from "@/app/components/QuizTemplate";
import { indianEconomyQuestions } from "@/data/indian-economy";

export default function Page() {
  return (
    <QuizTemplate
      title="Indian Economy Quiz"
      questions={indianEconomyQuestions}
      gradient="linear-gradient(135deg,#14532d,#22c55e,#86efac)"
    />
  );
}
