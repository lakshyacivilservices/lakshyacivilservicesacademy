import QuizTemplate from "@/app/components/QuizTemplate";
import { scienceQuestions } from "@/data/science";

export default function Page() {
  return (
    <QuizTemplate
      title="Science Quiz"
      questions={scienceQuestions}
      gradient="linear-gradient(135deg,#1e3a8a,#2563eb,#60a5fa)"
    />
  );
}
