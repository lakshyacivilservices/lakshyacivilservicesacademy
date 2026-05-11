import QuizTemplate from "@/app/components/QuizTemplate";
import { bloodRelationsQuestions } from "@/data/blood-relations";

export default function Page() {
  return (
    <QuizTemplate
      title="Blood Relations Quiz"
      questions={bloodRelationsQuestions}
      gradient="linear-gradient(135deg,#7f1d1d,#dc2626,#fca5a5)"
    />
  );
}
