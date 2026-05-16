import QuizTemplate from "@/app/components/QuizTemplate";
import { researchQuestions } from "@/data/research";

export default function Page() {
  return (
    <QuizTemplate
      title="Research Methodology Quiz"
      questions={researchQuestions}
      gradient="linear-gradient(135deg,#2563eb,#7c3aed,#ec4899)"
    />
  );
}
