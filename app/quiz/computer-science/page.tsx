import QuizTemplate from "@/app/components/QuizTemplate";
import { computerScienceQuestions } from "@/data/computer-science";

export default function Page() {
  return (
    <QuizTemplate
      title="Computer Science Quiz"
      questions={computerScienceQuestions}
      gradient="linear-gradient(135deg,#0f172a,#334155,#94a3b8)"
    />
  );
}
