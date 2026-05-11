import QuizTemplate from "@/app/components/QuizTemplate";
import { algebraQuestions } from "@/data/algebra";

export default function Page() {
  return (
    <QuizTemplate
      title="Algebra Quiz"
      questions={algebraQuestions}
      gradient="linear-gradient(135deg,#7f1d1d,#dc2626,#fca5a5)"
    />
  );
}
