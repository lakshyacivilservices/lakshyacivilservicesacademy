import QuizTemplate from "@/app/components/QuizTemplate";
import { chemistryQuestions } from "@/data/chemistry";

export default function Page() {
  return (
    <QuizTemplate
      title="Chemistry Quiz"
      questions={chemistryQuestions}
      gradient="linear-gradient(135deg,#be123c,#f43f5e,#fda4af)"
    />
  );
}
