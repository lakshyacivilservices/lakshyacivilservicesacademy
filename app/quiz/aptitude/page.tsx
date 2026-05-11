import QuizTemplate from "@/app/components/QuizTemplate";
import { aptitudeQuestions } from "@/data/aptitude";

export default function Page() {
  return (
    <QuizTemplate
      title="Aptitude Quiz"
      questions={aptitudeQuestions}
      gradient="linear-gradient(135deg,#1e3a8a,#2563eb,#93c5fd)"
    />
  );
}
