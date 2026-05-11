import QuizTemplate from "@/app/components/QuizTemplate";
import { indianPolityQuestions } from "@/data/indian-polity";

export default function Page() {
  return (
    <QuizTemplate
      title="Indian Polity Quiz"
      questions={indianPolityQuestions}
      gradient="linear-gradient(135deg,#1e3a8a,#2563eb,#60a5fa)"
    />
  );
}
