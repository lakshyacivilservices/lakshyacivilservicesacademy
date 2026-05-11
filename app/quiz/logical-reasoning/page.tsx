import QuizTemplate from "@/app/components/QuizTemplate";
import { logicalReasoningQuestions } from "@/data/logical-reasoning";

export default function Page() {
  return (
    <QuizTemplate
      title="Logical Reasoning Quiz"
      questions={logicalReasoningQuestions}
      gradient="linear-gradient(135deg,#0f172a,#334155,#94a3b8)"
    />
  );
}
