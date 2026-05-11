import QuizTemplate from "@/app/components/QuizTemplate";
import { calendarClockQuestions } from "@/data/calendar-clock";

export default function Page() {
  return (
    <QuizTemplate
      title="Calendar & Clock Quiz"
      questions={calendarClockQuestions}
      gradient="linear-gradient(135deg,#14532d,#22c55e,#86efac)"
    />
  );
}
