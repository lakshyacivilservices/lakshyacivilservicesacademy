import QuizTemplate from "@/app/components/QuizTemplate";
import { disasterManagementQuestions } from "@/data/disaster-management";

export default function Page() {
  return (
    <QuizTemplate
      title="Disaster Management Quiz"
      questions={disasterManagementQuestions}
      gradient="linear-gradient(135deg,#7f1d1d,#dc2626,#fca5a5)"
    />
  );
}
