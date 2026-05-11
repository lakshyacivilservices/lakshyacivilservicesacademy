import QuizTemplate from "@/app/components/QuizTemplate";
import { computerQuestions } from "@/data/computer";

export default function Page() {
  return (
    <QuizTemplate
      title="Computer Awareness Quiz"
      questions={computerQuestions}
      gradient="linear-gradient(135deg,#0f172a,#334155,#64748b)"
    />
  );
}
