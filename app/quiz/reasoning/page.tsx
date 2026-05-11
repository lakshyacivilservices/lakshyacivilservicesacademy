import QuizTemplate from "@/app/components/QuizTemplate";
import { reasoningQuestions } from "@/data/reasoning";

export default function Page() {
  return (
    <QuizTemplate
      title="Reasoning Quiz"
      questions={reasoningQuestions}
      gradient="linear-gradient(135deg,#581c87,#9333ea,#d8b4fe)"
    />
  );
}
