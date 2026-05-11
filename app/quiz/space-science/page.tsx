import QuizTemplate from "@/app/components/QuizTemplate";
import { spaceScienceQuestions } from "@/data/space-science";

export default function Page() {
  return (
    <QuizTemplate
      title="Space Science Quiz"
      questions={spaceScienceQuestions}
      gradient="linear-gradient(135deg,#312e81,#6366f1,#c4b5fd)"
    />
  );
}
