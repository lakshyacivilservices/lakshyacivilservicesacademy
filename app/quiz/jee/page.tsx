import QuizTemplate from "@/app/components/QuizTemplate";
import { jeeQuestions } from "@/data/jee";

export default function Page() {
  return (
    <QuizTemplate
      title="JEE Quiz"
      questions={jeeQuestions}
      gradient="linear-gradient(135deg,#1e3a8a,#2563eb,#60a5fa)"
    />
  );
}
