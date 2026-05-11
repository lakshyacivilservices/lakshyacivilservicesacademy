import QuizTemplate from "@/app/components/QuizTemplate";
import { ethicsQuestions } from "@/data/ethics";

export default function Page() {
  return (
    <QuizTemplate
      title="Ethics Quiz"
      questions={ethicsQuestions}
      gradient="linear-gradient(135deg,#581c87,#9333ea,#d8b4fe)"
    />
  );
}
