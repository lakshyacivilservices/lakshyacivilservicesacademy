import QuizTemplate from "@/app/components/QuizTemplate";
import { psychologyQuestions } from "@/data/psychology";

export default function Page() {
  return (
    <QuizTemplate
      title="Lower PCS Quiz"
      questions={psychologyQuestions}
      gradient="linear-gradient(135deg,#ea580c,#ef4444,#ec4899)"
    />
  );
}
