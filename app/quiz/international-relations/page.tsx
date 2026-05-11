import QuizTemplate from "@/app/components/QuizTemplate";
import { internationalRelationsQuestions } from "@/data/international-relations";

export default function Page() {
  return (
    <QuizTemplate
      title="International Relations Quiz"
      questions={internationalRelationsQuestions}
      gradient="linear-gradient(135deg,#1e3a8a,#2563eb,#93c5fd)"
    />
  );
}
