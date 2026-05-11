import QuizTemplate from "@/app/components/QuizTemplate";
import { verbalAbilityQuestions } from "@/data/verbal-ability";

export default function Page() {
  return (
    <QuizTemplate
      title="Verbal Ability Quiz"
      questions={verbalAbilityQuestions}
      gradient="linear-gradient(135deg,#1d4ed8,#3b82f6,#93c5fd)"
    />
  );
}
