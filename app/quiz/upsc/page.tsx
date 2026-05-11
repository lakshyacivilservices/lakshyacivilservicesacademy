import QuizTemplate from "@/app/components/QuizTemplate";
import { upscQuestions } from "@/data/upsc";

export default function Page() {
  return (
    <QuizTemplate
      title="UPSC Quiz"
      questions={upscQuestions}
      gradient="linear-gradient(135deg,#0f172a,#2563eb,#06b6d4)"
    />
  );
}
