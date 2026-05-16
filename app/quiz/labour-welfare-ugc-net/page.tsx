import QuizTemplate from "@/app/components/QuizTemplate";
import { psychologyQuestions } from "@/data/psychology";

export default function Page() {
  return (
    <QuizTemplate
      title="Labour Welfare / HRM UGC NET & PSU Quiz"
      questions={psychologyQuestions}
      gradient="linear-gradient(135deg,#14532d,#16a34a,#4ade80)"
    />
  );
}
