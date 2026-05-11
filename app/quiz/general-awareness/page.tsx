import QuizTemplate from "@/app/components/QuizTemplate";
import { generalAwarenessQuestions } from "@/data/general-awareness";

export default function Page() {
  return (
    <QuizTemplate
      title="General Awareness Quiz"
      questions={generalAwarenessQuestions}
      gradient="linear-gradient(135deg,#14532d,#22c55e,#86efac)"
    />
  );
}
