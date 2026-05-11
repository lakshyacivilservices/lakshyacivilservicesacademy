import QuizTemplate from "@/app/components/QuizTemplate";
import { nonVerbalReasoningQuestions } from "@/data/non-verbal-reasoning";

export default function Page() {
  return (
    <QuizTemplate
      title="Non Verbal Reasoning Quiz"
      questions={nonVerbalReasoningQuestions}
      gradient="linear-gradient(135deg,#7f1d1d,#dc2626,#fca5a5)"
    />
  );
}
