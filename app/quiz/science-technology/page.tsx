import QuizTemplate from "@/app/components/QuizTemplate";
import { scienceTechnologyQuestions } from "@/data/science-technology";

export default function Page() {
  return (
    <QuizTemplate
      title="Science & Technology Quiz"
      questions={scienceTechnologyQuestions}
      gradient="linear-gradient(135deg,#0f172a,#2563eb,#7c3aed)"
    />
  );
}
