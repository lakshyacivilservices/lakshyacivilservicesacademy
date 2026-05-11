import QuizTemplate from "@/app/components/QuizTemplate";
import { hrmQuestions } from "@/data/hrm";

export default function Page() {
  return (
    <QuizTemplate
      title="HRM Quiz"
      questions={hrmQuestions}
      gradient="linear-gradient(135deg,#06b6d4,#2563eb,#7c3aed)"
    />
  );
}
