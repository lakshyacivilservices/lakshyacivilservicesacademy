import QuizTemplate from "@/app/components/QuizTemplate";
import { currentAffairsQuestions } from "@/data/current-affairs";

export default function Page() {
  return (
    <QuizTemplate
      title="Current Affairs Quiz"
      questions={currentAffairsQuestions}
      gradient="linear-gradient(135deg,#7e22ce,#a855f7,#d8b4fe)"
    />
  );
}
