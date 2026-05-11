import QuizTemplate from "@/app/components/QuizTemplate";
import { policeQuestions } from "@/data/police";

export default function Page() {
  return (
    <QuizTemplate
      title="Police Exam Quiz"
      questions={policeQuestions}
      gradient="linear-gradient(135deg,#111827,#374151,#6b7280)"
    />
  );
}
