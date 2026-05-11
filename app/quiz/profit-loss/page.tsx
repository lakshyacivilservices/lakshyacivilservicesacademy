import QuizTemplate from "@/app/components/QuizTemplate";
import { profitLossQuestions } from "@/data/profit-loss";

export default function Page() {
  return (
    <QuizTemplate
      title="Profit & Loss Quiz"
      questions={profitLossQuestions}
      gradient="linear-gradient(135deg,#92400e,#d97706,#fbbf24)"
    />
  );
}
