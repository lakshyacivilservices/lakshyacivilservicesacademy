import QuizTemplate from "@/app/components/QuizTemplate";
import { aiQuestions } from "@/data/ai";

export default function Page() {
  return (
    <QuizTemplate
      title="AI & Technology Quiz"
      questions={aiQuestions}
      gradient="linear-gradient(135deg,#0f172a,#7c3aed,#ec4899)"
    />
  );
}
