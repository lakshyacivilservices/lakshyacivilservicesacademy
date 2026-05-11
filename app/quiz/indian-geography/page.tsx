import QuizTemplate from "@/app/components/QuizTemplate";
import { indianGeographyQuestions } from "@/data/indian-geography";

export default function Page() {
  return (
    <QuizTemplate
      title="Indian Geography Quiz"
      questions={indianGeographyQuestions}
      gradient="linear-gradient(135deg,#0f766e,#14b8a6,#5eead4)"
    />
  );
}
