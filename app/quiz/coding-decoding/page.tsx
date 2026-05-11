import QuizTemplate from "@/app/components/QuizTemplate";
import { codingDecodingQuestions } from "@/data/coding-decoding";

export default function Page() {
  return (
    <QuizTemplate
      title="Coding Decoding Quiz"
      questions={codingDecodingQuestions}
      gradient="linear-gradient(135deg,#581c87,#9333ea,#d8b4fe)"
    />
  );
}
