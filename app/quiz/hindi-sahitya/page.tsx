import QuizTemplate from "@/app/components/QuizTemplate";
import { hindiQuestions } from "@/data/hindi";

export default function Page() {
  return (
    <QuizTemplate
      title="Hindi Sahitya Quiz"
      questions={hindiQuestions}
      gradient="linear-gradient(135deg,#7c2d12,#dc2626,#f97316)"
    />
  );
}
