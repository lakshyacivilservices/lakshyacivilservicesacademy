import QuizTemplate from "@/app/components/QuizTemplate";
import { ratioProportionQuestions } from "@/data/ratio-proportion";

export default function Page() {
  return (
    <QuizTemplate
      title="Ratio & Proportion Quiz"
      questions={ratioProportionQuestions}
      gradient="linear-gradient(135deg,#7c2d12,#ea580c,#fdba74)"
    />
  );
}
