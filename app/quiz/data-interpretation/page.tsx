import QuizTemplate from "@/app/components/QuizTemplate";
import { dataInterpretationQuestions } from "@/data/data-interpretation";

export default function Page() {
  return (
    <QuizTemplate
      title="Data Interpretation Quiz"
      questions={dataInterpretationQuestions}
      gradient="linear-gradient(135deg,#92400e,#d97706,#fbbf24)"
    />
  );
}
