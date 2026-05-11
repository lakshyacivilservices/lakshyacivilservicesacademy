import QuizTemplate from "@/app/components/QuizTemplate";
import { agricultureQuestions } from "@/data/agriculture";

export default function Page() {
  return (
    <QuizTemplate
      title="Agriculture Quiz"
      questions={agricultureQuestions}
      gradient="linear-gradient(135deg,#365314,#65a30d,#bef264)"
    />
  );
}
