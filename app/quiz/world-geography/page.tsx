import QuizTemplate from "@/app/components/QuizTemplate";
import { worldGeographyQuestions } from "@/data/world-geography";

export default function Page() {
  return (
    <QuizTemplate
      title="World Geography Quiz"
      questions={worldGeographyQuestions}
      gradient="linear-gradient(135deg,#1d4ed8,#3b82f6,#93c5fd)"
    />
  );
}
