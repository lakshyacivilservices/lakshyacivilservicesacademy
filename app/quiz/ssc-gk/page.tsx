import QuizTemplate from "@/app/components/QuizTemplate";
import { sscQuestions } from "@/data/ssc";

export default function Page() {
  return (
    <QuizTemplate
      title="SSC GK Quiz"
      questions={sscQuestions}
      gradient="linear-gradient(135deg,#f97316,#ef4444,#ec4899)"
    />
  );
}
